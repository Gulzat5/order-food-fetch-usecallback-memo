import React from "react";
import styled from "styled-components";
import { MealItems } from "./MealItems";
import { useEffect, useState } from "react";
import { fetchRequest } from "../../lib/fetAPI";
export const Meals = React.memo(() => {
  const [meals, setMeals] = useState();
  const getFoods = async () => {
    try {
      const response = await fetchRequest("/foods");
      setMeals(response);
    } catch (error) {
      new Error(error);
    }
  };
  useEffect(() => {
    getFoods();
  }, []);
  return (
    <Conatainer>
      {meals?.map((meal) => {
        return <MealItems key={meal._id} meal={meal} />;
      })}
    </Conatainer>
  );
});

const Conatainer = styled.div`
  background-color: #ffffff;
  width: 80%;
  margin: 0 auto;
  border-radius: 16px;
  padding: 40px;
`;
