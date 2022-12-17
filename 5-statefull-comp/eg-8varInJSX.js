import React from 'react';
import { createRoot } from 'react-dom/client';
 
// Kapan pun Anda ingin menggunakan JavaScript expression (sesuatu yang menghasilkan nilai) di JSX, Anda perlu membungkus expression dalam kurung kurawal seperti ini.
class MyVariabel extends React.Component {
  render() {
    const name = 'Dicoding';
   
    return (
      <div>
        <h1>Hello, {name}</h1>
        <p>Today is {new Date().toLocaleDateString()}</p>
        <p>What is 2 + 2? {2 + 2}</p>
      </div>
    )
  }
}

