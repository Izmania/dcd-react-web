import React from 'react';
import { createRoot } from 'react-dom/client';
 
class Counter extends React.Component {
  constructor(props) {
    super(props);
 
    // inisialisasi data dalam state
    this.state = {
      count: 1
    };
  }
 
  render() {
    return (
      <div>
        {/* menampilkan data count */}
        <p>{this.state.count}</p>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <Counter />
    <Counter />
    <Counter />
  </div>
);