import React from 'react';
import ReactDOM from 'react-dom';
// Semenjak React versi 18 untuk me-render di sisi client (browser), React menggunakan module ‘react-dom/client’ bukan lagi ‘react-dom’.

const element = <h1>Hello React</h1>;

ReactDOM.render(element, document.getElementById('root'));
