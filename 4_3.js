let height = parseInt(prompt("Enter the height of your tree:"));
let tree = '';

for (let i = 0; i < height; i++) {
    tree += ' '.repeat(height - i - 1) + '*'.repeat(2 * i + 1) + '\n';
}
console.log(tree);