
import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "../../context/themeContext";
import Pagination from "../pagination/pagination";
import Card from "./card";
import "./cards.css";
import ScrollReveal from "scrollreveal";
import spinner from "../../../assets/images/infinity2.svg";
import { fetchAds } from "../../services/api";

const Cards = () => {
  const [pageNumber, setPage] = useState(1);
  const perpage = 5;
  const { darkMode } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.ads.adsList);
  const [inputValue, setInputValue] = useState("");
  console.log("cards", cards);
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: true,
    });
    sr.reveal(`.card`);

    fetchAds(dispatch);
  }, []);
  const newCardsList = cards.filter((card) =>
    card.address.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <section className={`cardSection ${darkMode && "dark"}`}>
      <h2 className="sectionTitle">Advertisement</h2>
      <span className="sectionSubtitle">Find Your Home</span>
      <div className="inputWrapper">
        <div className="inputContainer">
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setPage(1);
            }}
          />
        </div>
      </div>
      <div className="CardsContainer">
        {newCardsList.length > 1 ? (
          newCardsList
            .slice(
              (pageNumber - 1) * perpage,
              (pageNumber - 1) * perpage + perpage
            )
            .map((card) => {
              return <Card key={card.id} id={card.id} address={card.address} />;
            })
        ) : (
          <img
            src={spinner}
            alt="spinner"
            style={{ width: "100px", height: "100px" }}
          />
        )}
      </div>

      {newCardsList.length > perpage + 1 && (
        <Pagination
          numberOfCards={newCardsList.length}
          perPage={perpage}
          setPageNumber={setPage}
          pageNumber={pageNumber}
        />
      )}
    </section>
  );
};

export default Cards;
