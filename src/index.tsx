import './index.css'
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import theme from './theme'
import store from './store'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider as ReduxProvider } from 'react-redux'

ReactDOM.render(
  <ReduxProvider store={store}>
    <ChakraProvider resetCSS theme={theme}>
      <App />
    </ChakraProvider>
  </ReduxProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
