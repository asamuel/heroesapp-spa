import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useMemo } from "react";
import queryString from "query-string";
import { HeroItem } from "../components/HeroItem";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = useMemo(() => getHeroesByName(q), [q]);
  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;
  const { searchValue, onInputChange } = useForm({ searchValue: q });

  const onSubmitSearch = (event) => {
    event.preventDefault();
    navigate(`?q=${searchValue}`);
  };
  return (
    <div className="row">
      <div className="col-5">
        <h3>Searh</h3>
        <hr />

        <form onSubmit={onSubmitSearch} aria-label="form">
          <input
            type="text"
            name="searchValue"
            value={searchValue}
            onChange={onInputChange}
            placeholder="search..."
            className="form-control"
            autoComplete="off"
          />
        </form>
      </div>

      <div className="col-7">
        <h3>Results</h3>
        <hr />

        <div
          className="alert alert-primary animate__animated animate__fadeIn"
          style={{ display: showSearch ? "" : "none" }}
        >
          Searh a Hero
        </div>
        <div
          aria-label="alert"
          className="alert alert-danger animate__animated animate__fadeIn"
          style={{ display: showError ? "" : "none" }}
        >
          No hero with <b>{q}</b>
        </div>

        {heroes.map((x) => (
          <HeroItem key={x.id} {...x} />
        ))}
      </div>
    </div>
  );
};
