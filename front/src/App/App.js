import style from'./App.module.css';
import {Routes, Route, NavLink, useNavigate} from 'react-router-dom';
// import Test from '../component/Test/Test';
import Name from '../component/Name/Name';
import About from '../conteiner/About/About';
import Contact from '../conteiner/Contact/Contact';
import Blog from '../conteiner/Blog/Blog';

function App() {
  const navigate = useNavigate();
const handlerChange = (ev) => {
  console.log('event>>', ev.target.value);
  const result = ev.target.value;
  const url = `/blog/${result}`;
  navigate(url);
}

  return (
    <div className={style.App}>
      <Name />
      <div>
      <NavLink to='/'>Main</NavLink>
      <br/>
      <NavLink to='/about'>About</NavLink>
      <br></br>
      <NavLink to='/contact'>Contact</NavLink>
      <br/>
      {/* <NavLink to='/blog/1'>Blog</NavLink> */}
      </div>
      <input type='text' onChange={handlerChange}></input>
      <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/blog/:id' element={<Blog />}/>
      </Routes>
    </div>
  );
}

export default App;
