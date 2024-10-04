const sym = Symbol("desc");

const obj = {
  [sym]: "value",
};


console.log(obj[sym]);


let id = "id";

const objTwo = {
  id:"value",
}


const idUniq = Symbol("id");

console.log(idUniq)
