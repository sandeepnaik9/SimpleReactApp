import React from 'react';
import Post from './Post/Post'
import {Grid, CircularProgress} from '@material-ui/core'
import {useSelector} from 'react-redux';
import useStyles from './styles'
const Posts = ({setCurrentId,setOpen,setAdd}) => {
    const posts = useSelector((state)=>state.posts)
    const classes = useStyles();
    console.log(posts)
    return(
       !posts.length?<CircularProgress />: (
           <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
               {
                   posts.map((post)=> (
                       <Grid key={post._id} item xs={12} sm={6}>
                           <Post post={post} setCurrentId={setCurrentId} setOpen={setOpen} setAdd={setAdd}/>
                       </Grid>
                   ))
               }
           </Grid>
       )
    )
}
export default Posts