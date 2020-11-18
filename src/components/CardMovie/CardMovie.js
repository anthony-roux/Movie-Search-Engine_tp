
function CardMovie(props) {
  
return (
<div>
    <div className="card">
        <img src={props.imgsrc} className="card-img" alt=""/>
            <div className="card-body">
                <h1>{propsTitle}</h1>
                <p className="card-text gern">{props.gern}</p>
            </div>
    </div>
</div>
    );
  }
  
export default CardMovie;