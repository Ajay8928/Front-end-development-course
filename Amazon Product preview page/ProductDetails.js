import React from 'react';
import classes from './ProductDetails.module.css';
const ProductDetails=(props)=>
{
    const colorOptions=props.data.colorOptions.map((item,pos)=>
    {
        const classArr=[classes.ProductImage]
        if(pos===0)
        {
           classArr.push(classes.SelectedProductImage);
        }
       return(
          <img key={pos} className={classes.ProductImage} src={item.imageUrl} alt={item.styleName}
          onClick={props.onColorOptionClick(pos)}/>
       );
    })

    const featureList=props.data.featureList.map((item,pos)=>
    {
        const classArr=[classes.FeatureItem];
        if(pos===0)
        {
            classArr.push(classes.SelectedFeatureItem);
        }
        return(
            <button key={pos} className={classArr.join(' ')}>{item}</button>
        )

    })
    return(
        
        <div className={classes.ProductDetails}>

           <h1 className={classes.ProductTitle}>{props.data.title}</h1>
           <p className={classes.ProductDescription}>{props.data.description}</p>

           <h3 className={classes.SectionHeading}>Select Color</h3>
           <div >
               {colorOptions}
             {/* <img className={[classes.ProductImage,classes.SelectedProductImage].join(' ')} src="https://i.imgur.com/PTgQlim.png" alt="red color"></img>
             <img className={classes.ProductImage} src="https://i.imgur.com/iOeUBV7.png" alt="black color"></img>
             <img className={classes.ProductImage} src="https://i.imgur.com/Mplj1YR.png" alt="blue color"></img>
             <img className={classes.ProductImage} src="https://i.imgur.com/Zygu7I3.png" alt="pink color"></img>
             <img className={classes.ProductImage} src="https://i.imgur.com/xSIK4M8.png" alt="purplecolor"></img> */}

           </div>

           <h3 className={classes.SectionHeading}>Select Feature</h3>
           <div>
           <button className={[classes.FeatureItem,classes.SelectedFeatureItem].join(' ')}>Time</button>
           <button className={classes.FeatureItem}>Heart Rate</button>
           

           </div>
           <button className={classes.BuyNow}>Buy Now</button>

           </div>
        
    )
}
export default ProductDetails;