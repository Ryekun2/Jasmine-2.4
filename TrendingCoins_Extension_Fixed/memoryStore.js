// memoryStore.js
// Simulates short-term agent memory

let memory = [];

export function remember(key, value) {
    memory.push({ key, value });
    console.log(`Memory updated: ${key}`);
}

export function recall(key) {
    return memory.find(entry => entry.key === key)?.value || null;
}
