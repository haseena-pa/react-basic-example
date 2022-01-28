function Product({img,brandName,productName,price}) {

    const showConsole = (product) => {
        console.log(product);
    }
    
    return (
        <article className="product-card" onClick={() => showConsole(productName)}>
            <img src={img} alt={productName}/>
            <div className="product-info">
                <div><b>{brandName}</b></div>
                <div>{productName}</div>
                <b>Rs. {price}</b>
            </div>
        </article>
    )
}

export default Product;