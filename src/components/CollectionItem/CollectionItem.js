import React from 'react'
import './CollectionItem.scss'
import CustomButton from '../CustomButton/CustomButton'
import { connect } from 'react-redux'
import { addItem } from '../../Redux/Cart/CartAction'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div className="image"
                style={{ background: `url(${imageUrl})` }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProp = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProp)(CollectionItem)
