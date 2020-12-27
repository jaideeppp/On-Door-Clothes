import SHOP_DATA from './ShopData'

const initalState = {
    collections: SHOP_DATA
}

const shopReducer = (state = initalState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer