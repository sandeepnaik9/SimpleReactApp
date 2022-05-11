import React, {useState} from 'react';
import {Container} from '@material-ui/core'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import { useDispatch } from 'react-redux';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
const App = () => {
    const [add,setAdd] = useState(false);
    const [open,setOpen] = useState(false);
    const handleOpen = () => {setOpen(true); setAdd(true);console.log(add,open)};
    const handleClose = () => setOpen(false);
    return (
        <BrowserRouter>
            <Container maxWidth='lg'>
                <NavBar handleOpen={handleOpen} handleClose={handleClose} setOpen={setOpen} open={open} add={add}/>
                <Routes>
                    <Route path="/" exact element={<Home handleOpen={handleOpen} handleClose={handleClose} setOpen={setOpen} setAdd={setAdd} open={open} add={add} />} />
                    <Route path="/auth" exact element={<Auth />} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default App