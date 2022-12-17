import React from 'react';
import { createRoot } from 'react-dom/client';

class MyConditionalRender extends React.Component {
  render() {
    const authed = isAuthed()
   
    if (authed) {
      return <h1>Welcome back!</h1>
    } else {
      return <h1>Login to see your dashboard</h1>
    }
  }

  // Tenary
  render() {
    return isAuthed()
      ? <h1>Welcome back!</h1>
      : <h1>Login to see your dashboard</h1>
  }

  // JSK with expression {}
  render() {
    return (
      <div>
        <Logo />
        {isAuthed() === true
          ? <h1>Welcome back!</h1>
          : <h1>Login to see your dashboard</h1>}
      </div>
    )
  }
}

