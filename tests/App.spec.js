import { h } from 'preact';
import createStore from 'unistore'
import render from 'preact-render-to-string';
import htmlLooksLike from 'html-looks-like';

import Count from '../Count'

let store = createStore({ count: 0 })

const increment = (count) => ({ count: count + 1 })

const decrement = (count) => ({ count: count - 1 })

const incrementAsync = (state) => {
  setTimeout( () => {
    store.setState({ count: state.count + 1 })
  }, 300)
}

const decrementAndLog = ({ count }, event) => {
  console.log(event)
  return { count: count - 1 }
}

const App = () => (
  <div>
    <button onClick={() => increment()}>Increment</button>
    <button onClick={() => incrementAsync()}>Async Increment</button>
    <Count count={0}/>
    <button onClick={() => decrement()}>Decrement</button>
    <button onClick={() => decrementAndLog()}>Decrement with Log</button>
  </div>
)

describe('App', () => {
  it('has count', () => {
    const actual = render(<App />);
    const expected = `
      <div>
        <button>Increment</button>
        <button>Async Increment</button>
        <p>0</p>
        <button>Decrement</button>
        <button>Decrement with Log</button>
      </div>
    `;

    htmlLooksLike(actual, expected);
  });
});

export default App