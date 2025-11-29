// Configuration file for ReflectAI

const Config = {
    // API Configuration
    api: {
        baseUrl: 'https://api.groq.com/openai/v1/chat/completions',
        model: 'llama-3.1-8b-instant',
        temperature: 0.7,
        maxTokens: 400,
        timeout: 30000 // 30 seconds
    },
    
    // App Configuration
    app: {
        name: 'ReflectAI',
        version: '2.0.0',
        maxHints: 4,
        maxConversationHistory: 50,
        autoSaveInterval: 5000, // 5 seconds
        characterLimit: 2000
    },
    
    // UI Configuration
    ui: {
        animations: {
            duration: 300,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        },
        sidebar: {
            width: 280,
            mobileHeight: '50vh'
        },
        messages: {
            maxHeight: 120,
            autoScroll: true
        }
    },
    
    // Feature Flags
    features: {
        darkMode: true,
        conversationHistory: true,
        exportFunctionality: true,
        progressTracking: true,
        keyboardShortcuts: true,
        autoSave: true
    },
    
    // Problem Categories
    categories: {
        dsa: {
            name: 'Data Structures & Algorithms',
            icon: '⚡',
            description: 'Arrays, Trees, Graphs, DP',
            examples: [
                'Find the maximum sum subarray',
                'Implement binary search',
                'Reverse a linked list',
                'Find the longest common subsequence'
            ]
        },
        aptitude: {
            name: 'Quantitative Aptitude',
            icon: '🧮',
            description: 'Math, Logical Reasoning',
            examples: [
                'Calculate average speed',
                'Solve percentage problems',
                'Work with ratios and proportions',
                'Logical reasoning puzzles'
            ]
        },
        coding: {
            name: 'Coding Problems',
            icon: '💻',
            description: 'Debug, Optimize, Implement',
            examples: [
                'Debug this code snippet',
                'Optimize time complexity',
                'Implement a sorting algorithm',
                'Fix memory leaks'
            ]
        },
        system: {
            name: 'System Design',
            icon: '🏗️',
            description: 'Architecture, Scalability',
            examples: [
                'Design a URL shortener',
                'Design a chat application',
                'Design a recommendation system',
                'Design a distributed cache'
            ]
        },
        verbal: {
            name: 'Verbal Reasoning',
            icon: '📝',
            description: 'Reading Comprehension, Logic',
            examples: [
                'Analyze this passage',
                'Identify logical fallacies',
                'Comprehend technical documentation',
                'Solve verbal analogies'
            ]
        },
        hr: {
            name: 'HR & Behavioral',
            icon: '🤝',
            description: 'Interview Questions, STAR method',
            examples: [
                'Tell me about a challenging project',
                'How do you handle conflicts?',
                'Describe your leadership experience',
                'What are your career goals?'
            ]
        }
    },
    
    // System Prompts
    prompts: {
        hint: {
            1: `You are Reflect AI helping with placement prep. Give a gentle, SPECIFIC hint about the algorithm or approach needed. Don't give generic advice about "breaking down problems." Be concrete about the actual solution method.

For maximum subarray problems: Ask about what decision they need to make at each array position, or mention keeping track of running totals.

Example: "As you scan through the array left to right, at each number you have a choice: continue the current sum or start fresh. What would help you decide when to start over?"

Keep it 1-2 sentences. Be algorithm-specific, not generic.`,
            
            2: `You are Reflect AI. Give a MORE SPECIFIC hint about the exact technique. Mention the key insight or decision rule without giving the full algorithm name. 2-3 sentences max.

For maximum subarray: "The key insight is this: if your running sum becomes negative, it's better to start fresh from the next position rather than drag along the negative sum. What would you track to implement this logic?"

Be specific about the core algorithmic insight.`,
            
            3: `You are Reflect AI. Give STEP-BY-STEP guidance about the algorithm without writing code. List the exact steps they need to follow.

For maximum subarray: "Here's the approach: 1) Keep track of current sum and maximum sum seen so far 2) At each position, add the current number to your running sum 3) If running sum becomes negative, reset it to 0 4) Update your maximum if current sum is higher. This gives you O(n) solution."`
        },
        
        final: `You are Reflect AI providing the COMPLETE SOLUTION to the specific problem the student asked about. 

IMPORTANT: Look at the conversation context. If you gave hints that mentioned specific code examples or problems, solve THOSE specific examples, not generic explanations.

For example:
- If your hint mentioned "make this code print numbers 5 to 9", provide the exact code solution
- If discussing a specific bug, show the corrected code
- Be specific and practical, not general

Provide working code/solution with clear explanation of what was wrong and how to fix it. Be educational but focused on the actual problem.`,
        
        feedback: `You are Reflect AI. The student just shared their attempt or understanding. Give specific, constructive feedback. Point out what's correct and what needs work. Don't solve it for them - guide them toward the next step. Keep it encouraging and focused. 2-3 sentences max.`,
        
        quick: `You are a helpful AI assistant in Quick Mode. Provide direct, helpful answers while still being educational. Be concise but thorough.`
    },
    
    // Error Messages
    errors: {
        apiKeyMissing: 'Please provide a valid Groq API key to use the AI features. You can get one free from console.groq.com',
        apiKeyInvalid: 'Invalid API key. Please check your Groq API key and try again.',
        networkError: 'Network error. Please check your internet connection and try again.',
        rateLimit: 'Rate limit exceeded. Please wait a moment before trying again.',
        serverError: 'Server error. Please try again later.',
        timeout: 'Request timed out. Please try again.'
    }
};

// Export for use in main HTML file
window.Config = Config;
