// Utility functions for ReflectAI

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus input
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('messageInput').focus();
    }
    
    // Ctrl/Cmd + / to toggle sidebar
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        toggleSidebar();
    }
    
    // Ctrl/Cmd + D to toggle dark mode
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        toggleDarkMode();
    }
    
    // Escape to close sidebar
    if (e.key === 'Escape') {
        const sidebar = document.getElementById('sidebar');
        if (sidebar.classList.contains('open')) {
            toggleSidebar();
        }
    }
});

// Utility functions
const Utils = {
    // Format timestamp
    formatTimestamp: (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    },
    
    // Truncate text
    truncateText: (text, maxLength = 100) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    },
    
    // Generate unique ID
    generateId: () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },
    
    // Validate API key format
    validateApiKey: (key) => {
        return key && key.startsWith('gsk_') && key.length > 20;
    },
    
    // Copy text to clipboard
    copyToClipboard: async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return true;
        }
    },
    
    // Show toast notification
    showToast: (message, type = 'info') => {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#4f46e5'};
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },
    
    // Debounce function
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Check if device is mobile
    isMobile: () => {
        return window.innerWidth <= 768;
    },
    
    // Get browser info
    getBrowserInfo: () => {
        const ua = navigator.userAgent;
        const browsers = {
            chrome: /Chrome/.test(ua),
            firefox: /Firefox/.test(ua),
            safari: /Safari/.test(ua) && !/Chrome/.test(ua),
            edge: /Edg/.test(ua)
        };
        
        return Object.keys(browsers).find(browser => browsers[browser]) || 'unknown';
    },
    
    // Validate message content
    validateMessage: (message) => {
        if (!message || typeof message !== 'string') {
            return false;
        }
        const trimmed = message.trim();
        return trimmed.length > 0 && trimmed.length <= 2000;
    },
    
    // Sanitize message content
    sanitizeMessage: (message) => {
        if (!message || typeof message !== 'string') {
            return '';
        }
        return message.trim().substring(0, 2000);
    },
    
    // Format error message for user
    formatErrorMessage: (error) => {
        if (error.includes('400')) {
            return 'There was an issue with your request. Please try rephrasing your question.';
        } else if (error.includes('401')) {
            return 'Invalid API key. Please check your Groq API key and try again.';
        } else if (error.includes('429')) {
            return 'Rate limit exceeded. Please wait a moment before trying again.';
        } else if (error.includes('network')) {
            return 'Network error. Please check your internet connection and try again.';
        } else {
            return 'An unexpected error occurred. Please try again.';
        }
    }
};

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Export for use in main HTML file
window.Utils = Utils;
