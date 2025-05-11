export function camelize(str) {
    return str
        .split('-') 
        .map((word, index) => 
            index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
}

export function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
