import React from 'react';
import './cardTEST.css';
import img from '../../img/dead.png';

function CardMovie(props) {
    const { surch,Film } = props;
return (
<div>
    <div className="card">
        <img src={img} className="card_img" alt=""/>{/*props.imgsrc*/}
            <div className="card_body">
            <h1 className="card_title">DeadPool</h1> {/*props.title*/}
                <p className="card_gern">Action/Comédie</p>{/*props.gern*/}
        </div>
    </div>
</div>
    );
  }
  
export default CardMovie;