"use client";

import React, { useState } from "react";
import KittenCard from "./KittenCard";
import { getRancomKittens, getRandomKittens } from "@/services";
const GameBoard = () => {
  // const kittensArray= [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10, 11, 12];
  const [numOfKittens, setNumOfKittens] = useState(6);
  const [kittens, setKittens] = useState([]);
  const [cardOne, setCardOne] = useState();
  const [cardTwo, setCardTwo] = useState();
  const [solvedKittensArray, setSolvedKiittensArray] = useState([]);
  // function to fetch kittens

  const fetchKittens = async () => {
    const response = await getRandomKittens(numOfKittens);
    if (response.isError) {
      alert(response.error);
    } else {
      console.log("API Response:", responose.images);
    }
  };
  useEffect(() => {
    fetchKittens();
  }, []);

  //pull down before wed
  return (
    <div className="flex flex-wrap flex-row gap-4 justify-center w-full">
      {kittens.map((kitten) => (
        <KittenCard
          key={kitten.id}
          kitten={kitten}
          cardOne={cardOne}
          cardTwo={cardTwo}
          setCardOne={setCardOne}
          setCardTwo={setCardTwo}
          solvedKittensArray={solvedKittensArray}
          setSolvedKittensArray={setSolvedKittensArray}
        />
      ))}
    </div>
  );
};

export default GameBoard;
