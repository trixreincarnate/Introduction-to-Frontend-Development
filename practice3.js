// JSON - Javascript Object Notation: it is wrapping structure data as a string
// it is used to pass and receive data over networks.
/*async function getData(){

    const url = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"


    console.log(content);

    console.log(content.members);
}
*/

// getData();


let nkem = {
    age: 8,
    gender: "female",
}

console.log(JSON.stringify(nkem));

// Synchronous JS - one line execution at a time.

// Asynchronous JS - it is a technique that allows you to run more than one task and switch back on completion.

// callback - it is a function that's passed into another function.

// promise - represent the success or failure of an async operation.
/* Promise can have different states
- pending
- fufilled
- rejected
- completed
- resolved : this is more advanced
*/

async function getAllMyMoney(){
    try{
        const example = fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");

        const data = (await example).json();

        return data;
        }

    catch(error) {
        console.log(`something broke: ${error}`);
    }
}
console.log(example);

example.then((response) => {
    console.log(`you have received a response": $
        {response.status}`);
        const data = response.json();

        data.then((content) => {
            console.log(content);
        })
})
.catch((error) => {`something broke`

})
console.log("Fine girl from Barbados");

// fetch API - ansynchronous api that returns a promise - fetch(url, argument); it makes a get request by default

async function getMoney() {
    console.log("money");
}

console.log(getMoney());