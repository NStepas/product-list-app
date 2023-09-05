import { BrowserRouter }  from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRoutes from './ui/routes/Routes';
import store from '../src/store'

function App() {
  return (
    <div className="app">
    <Provider store={store}>
       <BrowserRouter>
          <AppRoutes />
       </BrowserRouter>
    </Provider>
 </div>
  );
}

export default App;
