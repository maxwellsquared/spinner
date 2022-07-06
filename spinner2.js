let spinnyBoi = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let n = 100;
for (let i in spinnyBoi) {
  setTimeout(() => {
      process.stdout.write(`\r${spinnyBoi[i]}   `);
    }, n);
  n += 200;
};