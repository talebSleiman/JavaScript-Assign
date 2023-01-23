let start = performance.now();

for (let i = 0; i < 99999; i++) {
    document.write(i);
}

let end = performance.now();
console.log(`Loop Took ${parseInt(end - start)} Milliseconds.`);