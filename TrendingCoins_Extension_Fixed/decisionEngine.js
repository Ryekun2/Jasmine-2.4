// decisionEngine.js
// Simulates decision-making logic based on parsed context

export function evaluateUserIntent(context) {
    // Placeholder: Simulate intent evaluation
    if (context.keywords.includes('solana')) {
        return 'displaySOLChart';
    }
    return 'idle';
}

export function triggerResponse(intent) {
    // Fake action
    console.log(`Agent triggered intent: ${intent}`);
}
