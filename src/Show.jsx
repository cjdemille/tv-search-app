
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './Show.css';






export default function Show({ name = 'TestName', rating = 5, img = "./image-not-found.png", summary = "lorem" }) {
    return (
        <div className="Show">
            <div className="card" >
                <img src={img} alt="" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-header">{name}</h2>
                    {rating && <p>Average Rating: {rating}</p>}
                </div>
            </div>
        </div>
    )
}