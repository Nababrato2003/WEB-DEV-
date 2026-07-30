//BREAK and CONTINUE

for (let i = 1; i < 201; i++) {
    console.log(i);
    if (i === 32) {
        break;
    }

}

for (let i = 1; i < 201; i++) {
    if (i === 32) {
        continue;
    }
    console.log(i);
}
