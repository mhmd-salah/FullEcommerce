const useState = (defaultState) => {
  let state = defaultState;
  let setState = (newState) => {
    if (typeof newState == "function") state = newState(state);
    else state = newState;
  };
  
  return [
    setState, // setter
    () => state, // getter
  ];
};

const [setNumber, getNumber] = useState(1);
setNumber(2);
setNumber(3);
setNumber((prev) => prev + 10);
console.log(getNumber());
