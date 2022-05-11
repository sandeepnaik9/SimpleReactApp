import React, {useState,useEffect} from 'react';
import useStyles from './styles'
import {TextField,Button,Typography,Paper} from '@material-ui/core';
import FileBase from 'react-file-base64'
import {useDispatch,useSelector} from 'react-redux'
import { createPost,updatePost } from '../../actions/posts';


//Get the current id 

const Form = ({currentId,setCurrentId,setOpen,setAdd,currentAdd}) => {
    const [postData,setPostData] = useState({ title:'',message:'',tags:'',selectedFile:''})
    const post = useSelector((state) => currentId ? state.posts.find((p)=> p._id === currentId):null)
    const classes = useStyles()
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'))
    useEffect(()=>{
        if(post) setPostData(post)
        if(currentAdd) clear()
    },[post,currentAdd])
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId,{...postData,name:user&&user.result&&user.result.name}));
        }
        else{
            dispatch(createPost({...postData,name:user&&user.result&&user.result.name}))            
        }
        clear()
        setOpen(false)
    }
    const clear = () => {
        setCurrentId(null)
        setPostData({title:'',message:'',tags:'',selectedFile:''})
    }


    return(
        <Paper className={classes.paper}>
            <Button style={{align: 'right'}} onClick={()=>setOpen(false)}>X</Button>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}> 
                
                <Typography variant="h6">{currentId?'Editing':'Add'} a Task</Typography>
                <TextField  name="title" variant="outlined" label="Task Title" fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title: e.target.value})} />
                <TextField  name="message" variant="outlined" label="Task Description" fullWidth value={postData.message} onChange={(e)=>setPostData({...postData,message: e.target.value})} />
                <TextField  name="tags" variant="outlined" label="Task Tags" fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData,tags: e.target.value.split(',')})} />
                <div className={classes.fileInput}>
                    <FileBase fullWidth label="Upload Task Document"  type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" onClick={handleSubmit} size="large" fullWidth>{currentId?'Update':'Add'}</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>clear</Button>
            </form>
        </Paper>
    )
}

export default Form;
