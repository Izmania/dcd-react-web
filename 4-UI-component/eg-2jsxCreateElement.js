const element0 = <p>Hello, React!</p>; 

const element1 = <p className="red-paragraph">Hello, React!</p>;
const element2 = React.createElement('p',{className: 'red-paragraph',},'Hello, React!',);

// with JavaScript expression 
const name = 'Dicoding';
const element3 = <p>Hello, {name}</p>;


// With nested +  convention
const divContainer = (
  <div className="container">
    <h1>React</h1>
    <p>The <strong>best tool</strong> for building UI</p>
  </div>
);