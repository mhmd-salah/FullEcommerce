let log = (prim) => (name) => {
  if (prim == "admin") console.log("you are admin", name);
  else {
    console.log("you are user ", name);
  }
};

let logAdmin = log("admin");
let logUser = log("user")

logAdmin("ahmed");
logUser("mohamed salah");
