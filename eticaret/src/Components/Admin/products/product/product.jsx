import React from 'react'

function Product() {
    return (
        <div style={Style.container}>Product</div>
    )
}

export default Product

const Style = {
    container: {
        width: '100%',
        margin: '1%',
        borderRadius: '5px',
    },
}