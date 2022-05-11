import React, {useState,useEffect} from 'react'
import {Container, Grow,Modal,Box} from '@material-ui/core'
import {useDispatch} from 'react-redux';
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import {getPosts} from '../../actions/posts'
import useStyles from '../../styles'

const Home = ({handleOpen,handleClose,setOpen,setAdd,open,add}) => {
    const [currentId,setCurrentId]=useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    useEffect(()=>{
        dispatch(getPosts());

    },[dispatch,currentId])
    
  return (
    <Grow in>
        <Container>
            <Posts setCurrentId={setCurrentId} setOpen={setOpen} setAdd={setAdd}/>
                    <Modal style={style} open={open} onClose={handleClose}>
                        <Box>
                        <Form currentId={currentId} setOpen={setOpen} setCurrentId={setCurrentId} setAdd={setAdd} currentAdd={add}/>
                        </Box>
                    </Modal>
        </Container>
    </Grow>
  )
}

export default Home