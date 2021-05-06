import React from 'react';
import classes from './ProductPreview.module.css'
const ProductPreview=(props)=>{
    const currentHour=new Date().getHours();
  const currentMinutes = new Date().getMinutes();

return(

    <div className={classes.ProductPreview}>

          <img src={props.currentPreviewImage} alt="Product Preview"/>

          <div className={classes.FeatureData}>
              {
                  props.showHeartBeatSection?<div className={classes.HeartSection}>
                  <i class="fas fa-heartbeat"></i>
                    <p>78</p>
                  </div>
                  :
                <div className={classes.TimeSection}>
            <p>{`${currentHour}:${currentMinutes}`}</p>
          </div>

              }
          
          

          </div>
        </div>
    
)
}
export default ProductPreview;