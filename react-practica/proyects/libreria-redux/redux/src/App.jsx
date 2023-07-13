import { Provider } from 'react-redux'
import ReduxApp from './Components/ReduxApp'
import store from './store'
import ContadorRedux from './Components/ContadorRedux'

function App() {

  return (
    <>
      <Provider store={store}>
        <ContadorRedux />
        <ReduxApp />
      </Provider>
    </>
  )
}

export default App
