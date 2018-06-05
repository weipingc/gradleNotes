// Source : https://basarat.gitbooks.io/typescript/docs/async-await.html
// Asyn / Await is an ES8 feature

function delay0(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
        setTimeout(() => {
            resolve(count);
        }, milliseconds);
    });
}

// async function always returns a Promise
async function dramaticWelcome(): Promise<void> {
    console.log("Hello");

    for (let i = 0; i < 5; i++) {
        // await is converting Promise<number> into number
        const count: number = await delay0(500, i);
        console.log(count);
    }

    console.log("World!");
}

async function main() {
    console.log("Start (output 1)");
    await    // await statement A
    dramaticWelcome();
    console.log("End (If uncomment the above await statement A, this output will be right after output 1");
}

main();
