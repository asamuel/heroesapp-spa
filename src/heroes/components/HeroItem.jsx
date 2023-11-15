import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const HeroItem = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroUrl = `/heroes/${id}.jpg`;
  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col4 animate__animated animate__fadeIn">
            <img src={heroUrl} alt={superhero} className="card-img" />
          </div>

          <div className="col8">
            <div className="card-body">
              <h5 className="card-title"> {superhero} </h5>
              <p className="card-text">{alter_ego}</p>

              {characters !== alter_ego && <p>{characters}</p>}

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroItem.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};
