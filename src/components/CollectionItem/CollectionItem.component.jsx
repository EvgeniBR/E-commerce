import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../CustomButton/CustomButton.component";
import './CollectionItem.styles.scss'

const CollectionItem = ({ item, addItem })=>{
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div
             className="image"
             style={{
                 background:`url(${imageUrl}) no-repeat center center/cover`
             }}
             />
             <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                 </div>    
            <CustomButton onClick={()=> addItem(item)} inverted>Add to cart</CustomButton>     
        </div>
    )
} 

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem) ;