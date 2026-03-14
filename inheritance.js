class car{
  constructor(year,model){
    this.year=year;
    this.model=model;
  }
  manufacture(){
    console.log(`${this.year} , ${this.model} `);

  }
}
class electricCar extends car{
  constructor(year,model,batterylife){
    super(year,model);
    this.batterylife=batterylife;
  }
  bt(){
    console.log( `batterylife is  ${this.batterylife}`)
  }
  extraInfoHTML(){
  return `<div>hello</div>`;
}

}

const c=new car("BMW",1980);
c.manufacture();
const e= new electricCar('bmw1',2010,"2 years");
e.bt();

console.log(e.extraInfoHTML());
