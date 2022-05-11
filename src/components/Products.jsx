
import React, {useContext , useState} from 'react';
import ImageCard from './ImageCard';
// import ImgCard from './imgCard';
import Images from './NavItems';
import NavBar from './NavBar';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {CardContext} from './CardContext';




export default function Home() {
const {images, setImages , buskets , setBuskets} = useContext(CardContext);
    
    // useEffect(() =>{
    //     fetch("/preds").then(
    //         res => res.json()
            
    //         ).then(
    //         data => {
    //             setData(data)
    //         console.log(data)
    //         })
    // },[])


    const handlePredict= () =>{

        // alert("hello " + data.name)
    }
    return (
        <div className='home'>



            <NavBar/>

{/* <p className='par'> <a href=' https://www.kaggle.com/datasets/skillsmuggler/amazon-ratings#https://www.kaggle.com/datasets/nicapotato/womens-ecommerce-clothing-reviews
'> datatse link</a></p> */}
{/* <div className='par'>
<p>Here are the  10 products recommended based on user ratings. The products are in  with the item purchased by a particular  customer based on items rated by 
    other customers  who bought the same product say the product with the product id
    '1304624498' and outputs other products recommendation in Correlation with other products other users rated
</p>
<hr></hr>
<p> Here are the 10 products represented by  their  id's...</p>
{(typeof data.predictions === 'undefined')?(
    <p>Loading ...</p>
): 
 (data.predictions?.map((predictions, i)=>(
    <h6 id= "list" key={i}>product   {i + "=>"}: {predictions}</h6>
 ))
 )} */}
 {/* </div> */}
 <Box p={5}>
<Grid container spacing={5}>
{images.map((img ,i) =>{
    return(
        
        <Grid key = {i} item>
        <ImageCard key= {img.id} title = {img.title} id={i} imageName= {img.src} desc =""/>

        </Grid>
    )
})}

</Grid>
</Box>
 {/* https://mysterious-everglades-58670.herokuapp.com/ */}

    
        </div>

        
    )
}
