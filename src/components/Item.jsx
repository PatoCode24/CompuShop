const Item = ({ id, title, price, description, image }) => {
    return (
        <>
                <div className="card" key={id}>
                    <img src={image}  alt={title}/>
                    <h4 className="card-titulo ">{title}</h4>
                    <h5 className="card-precio">${price}</h5>
                    <button className="card-detalle">Ver detalles</button>
                </div>
        </>
    );
};

export default Item;
