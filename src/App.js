import React from 'react'
import { Provider } from 'react-redux';
import {Routes,Route} from 'react-router-dom'
import FormContextProvider from './components/context/formcontext';
import ThemeContextProvider from './components/context/themeContext';
import CreateAdsPage from './components/createAdsPage/createAdsPage';
import DetailsPage from './components/detailsPage.js/detailsPage';
import HomePage from "./components/homepage/HomePage";
import SignInSignUp from './components/auth/SignInUp';
import { store } from './redux/store';
function App() {
  
  return (
    <Provider store={store}>
<ThemeContextProvider>

    <div className="App">
      <Routes>
<Route path="/" element={<HomePage />}/>
<Route path="/auth" element={<FormContextProvider><SignInSignUp/> </FormContextProvider>}/>
<Route path='/details/:id' element={<DetailsPage/>}/>
<Route path="/create" element={<CreateAdsPage/>}/>
      </Routes>
    
    </div>
</ThemeContextProvider>
    </Provider>
  );
}

export default App;
