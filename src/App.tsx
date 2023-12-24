import {Route, Routes} from 'react-router-dom';
import Form from './components/Form/Form';
import Contacts from './components/Contacts/Contacts';
import ContactItem from './components/Contacts/ContactItem';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App = () => (
  <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Contacts/>}/>
      <Route path="/contact/:id" element={<ContactItem/>}/>
      <Route path="/add" element={<Form/>}/>
      <Route path="/edit/:id" element={<Form/>}/>
      <Route path="*" element={(<h1>Not Found!</h1>)}/>
    </Routes>
  </>
);

export default App;
