import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getVids,
  searchVids,
  getGenres,
  filterGenres,
  selectDb,
} from "../actions/index.js";
import VideogameList from "./VideogameList";
import Searchbar from "./Searchbar";
import SortAZ from "./SortAZ.jsx";
import FilterGen from "./FilterGen.jsx";
import SortRating from "./SortRating.jsx";
import FilterDb from "./FilterDb.jsx";
import { Link } from "react-router-dom";
import styles from "../css_modules/GameDisplay.module.css";
 
import '../css/estilos.css';
import '../css/cinco.css';
export default function GameDisplay() {
  let vids = useSelector((state) => state.vidsList);
  const dispatch = useDispatch();
  let [page, setPage] = useState(0);
  let [vars, setVars] = useState([0, 15]);
  let [search, setSearch] = useState("");
  let [sort, setSort] = useState("");
  let [genre, setGenre] = useState("");
  let [ratings, setRatings] = useState("");
  let [db, setDb] = useState("");

  if (ratings && !sort) {
    if (ratings === "ASC") {
      vids.sort(function (a, b) {
        return a.rating - b.rating;
      });
    } else if (ratings === "DESC") {
      vids.sort(function (a, b) {
        return b.rating - a.rating;
      });
    }
  }
  if (sort && !ratings) {
    vids.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return sort === "ASC" ? 1 : -1;
      }
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return sort === "ASC" ? -1 : 1;
      }
      return 0;
    });
  }

  if (sort && ratings) {
    vids.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return sort === "ASC" ? 1 : -1;
      }
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return sort === "ASC" ? -1 : 1;
      }
      return 0;
    });
    if (ratings === "ASC") {
      vids.sort(function (a, b) {
        return a.rating - b.rating;
      });
    } else if (ratings === "DESC") {
      vids.sort(function (a, b) {
        return b.rating - a.rating;
      });
    }
  }

  useEffect(() => {
    if (!search && !genre && !db) {
      dispatch(getVids());
      dispatch(getGenres());
    }
    if (search && !genre && !db) {
      dispatch(searchVids(search));
    }
    if (genre) {
      dispatch(filterGenres(genre));
    }
    if (db === "DB" || db === "Rawg") {
      dispatch(selectDb(db, search, genre));
    }
  }, [search, genre, db, sort, ratings, dispatch]);

  function nextPage() {
    let maxPages = Math.floor(vids.length / 15);
    setPage(page + 1);
    if (page < maxPages) {
      setVars([vars[0] + 15, vars[1] + 15]);
    } else {
      setPage(maxPages);
    }
  }

  function prevPage() {
    if (page > 0) {
      setPage(page - 1);
      setVars([vars[0] - 15, vars[1] - 15]);
    } else {
      setPage(0);
    }
  }

  function onSearch(name) {
    setSearch(name);
    setPage(0);
    setVars([0, 15]);
  }

  function onSort(value) {
    setSort(value);
    setDb(db);
  }

  function onFilterGen(value) {
    setGenre(value);
    setPage(0);
    setVars([0, 15]);
    setDb(db);
  }

  function onRating(value) {
    setRatings(value);
    setDb(db);
  }

  function onDb(value) {
    setDb(value);
  }

  return (
    <div className={`${styles.master}`}>
      <div className={`${styles.banner}`}>
         
      </div>
      <div className={`${styles.macro}`}>
       
        <SortAZ sort={sort} onSort={onSort} />
        <SortRating ratings={ratings} onRating={onRating} />
        <Searchbar
          onSearch={onSearch}
          onSort={onSort}
          onFilterGen={onFilterGen}
          onRating={onRating}
          onDb={onDb}
        />
         <FilterDb db={db} onDb={onDb} />
        <FilterGen genre={genre} onFilterGen={onFilterGen} />
        <Link to="/create">
          <button className="boton cinco">&nbsp;Create Game &nbsp;</button>
        </Link>
      </div>
      <br/><br/><br/>
      <div className={`${styles.container}`}>
        <VideogameList vids={vids} vars={vars} />
      </div>
      <div className={`${styles.btn_box}`}>
        <button className={`${styles.btn}`} onClick={prevPage}>
          {`<`}
        </button>
        <button className={`${styles.btn}`} onClick={nextPage}>
          {`>`}
        </button>
      </div>
    </div>
  );
}
