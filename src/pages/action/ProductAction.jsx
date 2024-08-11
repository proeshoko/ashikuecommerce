const productActionCreator = (data) => {
    return{
        type: "PRODUCT",
        Payload:data,
    };
};
export default productActionCreator;