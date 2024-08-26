
const Product =(props)=>{
   
    
    return(
        <div>
           <h1>{props.title}</h1>
           <p>Price :- {props.price}</p>
           {props.children}
           <Demo/>
           
        </div>
    )
}

const Demo =()=>{
return(

    <div>
        <h1>This is Profile Box</h1>
        <p>This is demo box</p>
    </div>
)
}
export default Product;