const Card = ({name, stock, img}) => {
  return (
    <div className="card m-3" style={{width: '18rem'}}>
      {
        img && (
          <img src={img} className="card-img-top" alt="..." />
        )
      }
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {
          stock && (<>
            <p className="card-text">
            {stock === 0 ? 'No hay stock' : `Hay ${stock} unidades disponibles`}
            </p>
            <a href="/" className="btn btn-primary">
              Comprar
            </a>
          </>)
        }
      </div>
    </div>
  );
};

export default Card;
