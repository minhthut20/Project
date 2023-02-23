import './App.css';
import Router from './router/Router';
import storeValue from './redux/store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';



function App() {
  
  return (
    <>
      <BrowserRouter>
        <Provider store={storeValue}>
          <Router />
        </Provider>
      </BrowserRouter>

    </>
  );
}

export default App;
