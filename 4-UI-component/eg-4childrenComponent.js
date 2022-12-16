// eg 1
function SayHello({ name }) {
  return <p>Hello, {name}!</p>;
}

<SayHello name="Dicoding" />; // <p> Hello, Dicoding!</p>

// eg 2
function SayHello1({ children }) {
  return <p>Hello, {children}!</p>;
}

<SayHello1>Dicoding</SayHello1>; // Hello, Dicoding!
