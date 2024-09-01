const Product=()=>{

    const demo =()=>{
        console.log("Buy click");
        
    }
    return(
        <>
            <h1 className="prod">This is Product Component</h1>
            <button onClick={demo}>Buy Now</button>
        </>
    )
}


export default Product;