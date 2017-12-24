import { h } from 'preact'
import createStore from 'unistore'
import { Provider, connect } from 'unistore/preact'

import Header from './Header'
import Image from './Image'
import Counter from './Counter'
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

export const App = connect('count', actions)(
  ({ count, increment, incrementAsync, decrement, decrementAndLog }) => (
    <div>
      <Header/>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAsync}>Async Increment</button>
      <Counter count={count}/>
      <button onClick={decrement}>Decrement</button>
      <button onClick={decrementAndLog}>Decrement with Log</button>
      <Image url="./images/funny_cat.jpg"/>
    </div>
  )
)

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)