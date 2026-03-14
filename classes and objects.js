const product={
  soap:4,
  shapoo:2,
  chair:4
};
product.id=2;

console.log(product);
class product2{
  methoud(){
    console.log('hello');

  }
}
const pro=new product2();
pro.methoud();
console.log(pro);
class person{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  
  
  p1(){
    console.log(`hello,my name is ${this.name} and my age is ${this.age}`);
  }
}
    

const p=new person("spandana",19);
p.p1();


