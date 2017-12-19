import { h } from 'preact'
import createStore from 'unistore'
import { Provider, connect } from 'unistore/preact'

import './main.css'

let store = createStore({ count: 0 })

let actions = store => ({
  increment: ({ count }) => ({ count: count + 1 }),

  decrement: ({ count }) => ({ count: count - 1 }),

  incrementAsync(state) {
    setTimeout( () => {
      store.setState({ count: state.count + 1 })
    }, 300)
  },

  decrementAndLog({ count }, event) {
    console.log(event)
    return { count: count - 1 }
  }
})

const App = connect('count', actions)(
  ({ count, increment, incrementAsync, decrement, decrementAndLog }) => (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAsync}>Async Increment</button>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={decrementAndLog}>Decrement with Log</button>
    </div>
  )
)

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)