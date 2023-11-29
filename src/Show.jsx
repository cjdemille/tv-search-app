
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './Show.css';






export default function Show({name='TestName', rating=5, img = "https://static.tvmaze.com/uploads/images/medium_portrait/401/1003373.jpg" , summary="lorem"}){
    const style = {width: '18rem'}
    return(
        <div className="Show">
            <div className="card" style ={style}>
                <img src={img} alt="" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-header">{name}</h2>
                    <p>Average Rating: {rating}</p>
                </div>
            </div>
            
        </div>
    )
}