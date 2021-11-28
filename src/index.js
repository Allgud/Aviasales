import React from 'react';
import ReactDOM from 'react-dom';
const {render} = ReactDOM

export const App = () => (
  <div className="container">
    <h1>Hello World</h1>
  </div>
)

render(<App />, document.getElementById('root'))

