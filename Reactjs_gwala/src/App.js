import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbare from './Components/Navbare';
import Contact from './Components/Contact';
import Qustions from './Components/Qustions';
import QustionDetail from './Components/QustionDetail';
import Article from './Components/Article';
import Footer from './Components/Footer';
import Signin from './Components/signin';
import SignUp from './Components/Signup';
import ScrollToTop from './Components/scrolltotop';
import Postquestion from './Components/Postquestion';
import Recoverpassword from './Components/Recoverpassword';
function App() {
  return (
    <div className="App">
<BrowserRouter>
<ScrollToTop/>
<Navbare/>
      <Routes>
      <Route path='/' element={<Article/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Qustions' element={<Qustions/>}/>
      <Route path='/QustionDetail' element={<QustionDetail/>}/>
      <Route  path='/Signin' element={<Signin/>}/>
      <Route  path='/Signup' element={<SignUp/>}/>
      <Route path='/Post-Qustion' element={<Postquestion/>}/>
      <Route path='/Recoverpassword' element={<Recoverpassword/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
