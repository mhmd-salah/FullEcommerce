class MainComponent{
    setName(name){
      this.name = name;
    }
    getName(){
        return this.name;
    }
    setAge(age){
      this.age = age;
    }
    getAge(){
      return this.age;
    }
}

export default new MainComponent();