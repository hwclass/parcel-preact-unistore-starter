import { h } from 'preact'
import createStore from 'unistore'
import { Provider, connect } from 'unistore/preact'

import Header from '../components/Header/'
import Image from '../components/Image/'
import Counter from '../Counter/'
import '../../static/css/main.css'

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
      <Image url="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"/>
    </div>
  )
)

if('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('../sw.js')
    .then(function() { console.log("Service Worker Registered"); });
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
