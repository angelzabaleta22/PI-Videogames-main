import React, { useState } from "react";
import css from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  orderByName,
  orderByRating,
  searchGame,
  setLoading,
  sortBySource,
} from "../../redux/actions";

function Filter({ setOrder }) {
  const [search, setSearch] = useState("");
  const filterSource = useSelector((state) => state.filterSource);

  const dispatch = useDispatch();

  const handleOrderByName = (event) => {
    const order = event.target.value;
    console.log(order);
    dispatch(orderByName(order));
    /* setOrder(`Ordenado ${event.target.value}`); */
  };

  const handleOrderByRating = (event) => {
    const order = event.target.value;
    dispatch(orderByRating(order));
    /* setOrder(`Ordenado ${event.target.value}`); */
  };

  const handleSortBySource = (event) => {
    const source = event.target.value;
    dispatch(sortBySource(source));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const search = event.target.value;
    setSearch(search);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(searchGame(search));
    dispatch(setLoading(true));
  };

  return (
    <div className={css.filter}>
      <div className={css.contentSearch}>
        <input
          type="text"
          placeholder="Search videoGame"
          name="search"
          id=""
          onChange={handleSearch}
          className={css.search}
        />
        <button
          type="submit"
          onClick={handleSearchSubmit}
          className={css.submit}
        >
          Search
        </button>
      </div>
      <div className={css.contentSelect}>
        <select
          name=""
          id=""
          onChange={handleSortBySource}
          className={css.selectSource}
          value={filterSource}
        >
          <option value="ALL">Filtrar Por Fuente</option>
          <option value="ALL">Todo</option>
          <option value="DB">Base de Datos</option>
          <option value="API">API</option>
        </select>

        {
          <select name="" id="" onChange={handleOrderByName}>
            <option value="ALL">Ordernar Alfabéticamente</option>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        }
        <select name="" id="" onChange={handleOrderByRating}>
          <option value="ALL">Orderar Por Rating</option>
          <option value="min">min</option>
          <option value="max">max</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;