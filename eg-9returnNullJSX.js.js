import React from 'react';
import { createRoot } from 'react-dom/client';
 
class MyNull extends React.Component {
  render() {
    if (isLoading()) {
      return null;

      // OR
      // return (
      //   ...
      // )
    }
  }
}

