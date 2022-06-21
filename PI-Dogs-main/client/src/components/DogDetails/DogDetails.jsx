import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogDetail, clearDogDetail } from "../../redux/Actions";
import "./DogDetails.css";

export default function DogDetail(props) {
  const dispatch = useDispatch();
  const index = props.match.params.id;

  const dog = useSelector((state) => state.dogDetail);

  useEffect(() => {
    dispatch(getDogDetail(index));
    return () => {
      // willUnmount
      //limpiar el estado cuando se desmonte
      dispatch(clearDogDetail());
    };
  }, [index, dispatch]);

  return (
    <div className="detail">
      {Object.values(dog).length > 0 ? (
        <div className="card">
          <img
            className="imag-dog"
            src={dog.image}
            alt="dog-img"
            height="200px"
          />
          <h1>{dog.name}</h1>
          <h2>Weight:</h2>
          {dog.min_weight
            ? dog.min_weight
            : "There's no weight provided for this dog"}
          {" - "}
          {dog.max_weight
            ? `${dog.max_weight} Kg`
            : "There's no weight provided for this dog"}
          <h2>Height:</h2>
          <h3>{`${dog.min_height} - ${dog.max_height} cm`}</h3>
          <h2>Life Span: </h2>
          {dog.life_span_min || dog.life_span_max
            ? dog.life_span_min !== dog.life_span_max
              ? `${dog.life_span_min} - ${dog.life_span_max} years`
              : `${dog.life_span_min} years`
            : "There's no Life Span provided for this dog!"}
          {/* <h3>Temperament: {!dog.was_created? dog.temperaments : dog.temperaments.map(t => t.name)}</h3> */}
          <h3>
            {dog.was_created
              ? dog.temperaments.map((e) => e.name).join(", ")
              : dog.temperaments
              ? dog.temperaments
              : "🤷‍♂️ No temperaments provided for this breed 🤷‍♀️"}
          </h3>
          {/* <div>{dog.temperaments.split(", ").map((t, i) => (
                    key={i}>{t}
                    ))}
                </div> */}
        </div>
      ) : (
        <div class="loader">
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
        </div>
      )}
      <Link to="/home">
        <button className="Backyy">Go Back</button>
      </Link>
    </div>
  );
}
