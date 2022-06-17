import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogDetail } from "../../redux/Actions";

export default function DogCard(props) {
    const dispatch = useDispatch()
    const id = props.match.params.id
    const dog = useSelector(state => state.dogDetail)

    useEffect(() => {
        dispatch(getDogDetail(id))
    }, [id, dispatch])
    return (
        <div>
            <img src={dog.img} alt="dog-img"/>
            <div>
                <h1>{dog.name}</h1>
                <span>
                    <h2>Weight:</h2>
                    <h3>{`${dog.min_weight} - ${dog.max_weight} Kg`}</h3>
                </span>
                <span>
                    <h2>Height:</h2>
                    <h3>{`${dog.min_height} - ${dog.max_height} Kg`}</h3>
                </span>
                <span>
                    <h2>Life Span: </h2>
                    <h3>{`${dog.life_span_min} - ${dog.life_span_max} years`}</h3>
                </span>
                <span>
                    <h3>Temperaments:</h3>
                    <div>{this.props.temperaments.split(", ").map((t, i) => (
                    <span key={i}>{t}</span>
                    ))}
                    </div>
                </span>
            </div>
            <Link to = "/home">
                <button>Go Back</button>
            </Link>
        </div>
    )
}