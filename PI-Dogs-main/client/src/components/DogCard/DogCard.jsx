import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDogDetail } from "../../redux/Actions";
import "./DogCard.css"

export default function DogCard ({id, image, name, minWeight, maxWeight, temperaments, was_created}) {
    const dispatch = useDispatch()
    return (
        <Link to={`/home/${id}`} onClick={() => dispatch(getDogDetail(id))}>
            <div className="Cardy" >
                <div className="CardyDetails">
                    <img className="dog-img" src={image} alt="dog-img" height="200px"/>
                    <h1 className="dog-name" >{name}</h1>
                    <div>
                        <h3 className="dogDetails">Weight</h3>
                        <p className="dogDetails" key={id}>{`${minWeight}Kg - ${maxWeight}Kg`}</p>
                    </div>
                    {/* <h1 className="dog-name" >{temperaments}</h1> */}
                    <h3 className="dogDetails">
                        {was_created
                            ? temperaments.map((e) => e.name).join(", ") // ["","",""]
                            : temperaments
                            ? temperaments
                            : "🤷‍♂️ No temperaments provided for this breed 🤷‍♀️"}
                    </h3>

                    {/* <h3>Temperaments:</h3> */}
                    {/* <h3>Temperament: {!was_created? temperaments : temperaments.map(t => t.name)}</h3> */}
                    {/* <div className="temp-container">{temperaments.split(", ").map((d, i) => (
                        <span className="temperaments" key={i}>{d}</span>
                    ))}
                    </div> */}
                </div>
            </div>
        </Link>
    )
}

// export class DogCard extends Component {
//     render() {
//         return (
//             <div className="Cardy" >
//                 <img className="dog-img" src={this.props.image} alt="dog-img" height="200px"/>
//                 <h1 className="dog-name" >{this.props.name}</h1>
//                 <div>
//                     <h3>Weight</h3>
//                     <p key={this.props.id}>{`${this.props.minWeight}Kg - ${this.props.maxWeight}Kg`}</p>
//                 </div>
//                 <h3>Temperaments:</h3>
//                 <div className="temp-container">{this.props.temperaments.split(", ").map((d, i) => (
//                     <span className="temperaments" key={i}>{d}</span>
//                 ))}
//                 </div>
//             </div>
//         )
//     }
// }

// export default connect()(DogCard)