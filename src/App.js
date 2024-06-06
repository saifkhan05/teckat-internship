import logo from './logo.svg';
import './App.css';

function App() {
  // let str = "Hello"
  // let str2 = "world"

  // if(Str === "Hello" && str2 === "world")
  //   {
  //     console.log("hello world")
  //   } 

  // const student = {
  //   name: "saif",
  //   age: 19,
  //   address: "mango",
  
  // }
  //   const student2 = {

  //     name: "saifee",
  //     age: 18,
  //     address: "jamshedpur",
  // };
  // if (student.name === student2.name) {
  //   console.log("hello");
  // } else {
  //   console.log("world");
  // }


  const people = [ 
    { name: "saif" age: 33 },
    { name: "faizan" age: 12 },
    { name: "kaif", age: 22 },
  ] ; 

  // for (let item of people) { 
  //   console.log(item.name)
  // };

  people.forEach((person) =>
{
  // console.log(person.name)
});

console.log(employee.name);
const employee = {
   name: "saif",
   age: 33,
   occupation: "engineer",
};
  

for (const key in employee) {
   if (employee.hasOwnproperty(key)) {
    console.log(`${key}: ${employee[key]}`);

  
   }
}
 
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;