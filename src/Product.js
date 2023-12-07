

export default function Product(props){
    return(
        <div className="product">
            <img className="img" src={props.url} />
            <h3>{props.name}</h3>
            <p>	&#8377;{props.price}</p>

        </div>
    )
}