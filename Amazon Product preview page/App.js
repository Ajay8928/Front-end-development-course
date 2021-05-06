import logo from './logo.svg';
import classes from'./App.module.css';
import React,{Component} from 'react';
import ProductData from "./ProductData";
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import Topbar from './Topbar';


class App extends Component{
  state=
  {
    productData:ProductData,
    currentPreviewImage:"https://i.imgur.com/PTgQlim.png",
    showHeartBeatSeaction:false,
  }
  
  render()
  {
    return (
      <div className="App">
        <Topbar/>
    <div className={classes.MainContainer}>
           <ProductPreview currentPreviewImage={this.state.currentPreviewImage} showHeartBeatSection={this.state.showHeartBeatSeaction}/>
           <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick}/>
    </div>
      </div>
    );
  }
  
 
}
const onColorOptionClick= (pos) =>
{
  
  const updatedPreviewImage=this.state.productData.colorOptions[pos].imageUrl
  this.setState({currentPreviewImage:updatedPreviewImage});
  
}

export default App;
