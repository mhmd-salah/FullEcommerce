

function test(){
  console.log("test")
}
test.age=()=>{
  console.log("mohamed salah")
}

test.User = {
  name:"MOHAMED",
  age:21,
  liveIn:"Egypt"
}

function one(o){
  return function(t){
    return o + t
  }
}

let addNumToThree = one(3)
console.log(addNumToThree(10));


test()
test.age();
console.log(test.User)

