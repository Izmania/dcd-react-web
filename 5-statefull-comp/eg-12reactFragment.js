import React from 'react';
import { createRoot } from 'react-dom/client';

class MyReactFragment extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, Dicoding</h1>
        <p>Today is a great day!</p>
      </div>
    )
  }

  // Menjadi
  render() {
    return (
      <React.Fragment>
        <h1>Hello, Dicoding</h1>
        <p>Today is a great day!</p>
      </React.Fragment>
    )
  }

  // Lebih singkatnya
  render() {
    return (
      <>
        <h1>Hello, Dicoding</h1>
        <p>Today is a great day!</p>
      </>
    )
  }
}

