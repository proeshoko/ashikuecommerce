const productInitialData = {
    data:[]
}

const productReducer = (state = productInitialData, action) => {
    if(action.type==="PRODUCT"){
        state = {
            data:action.payload,
        }
    }
return state;
};

export default productReducer;