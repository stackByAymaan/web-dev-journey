//* Axios

let url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        let res = await fetch(url);
        console.log(res);

    } catch (err) {
        console.log("error - ", err);
    }
}
