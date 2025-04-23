import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlants } from "../features/plantsSlice";

function PlantFetcher() {
  const dispatch = useDispatch();
  // const status = useSelector((state) => state.plants.status);
  const plantNames = useSelector((state) => state.plants.plantNames);
  const plantData = useSelector((state) => state.plants.plantData);

  useEffect(() => {
    if (plantNames.length > 0) {
      dispatch(fetchPlants(plantNames));
    }
  }, [dispatch, plantNames]);

  return (
    <div>
      <h1>Plant Data</h1>
      <pre>{JSON.stringify(plantData, null, 2)}</pre>
    </div>
  );
}

export default PlantFetcher;
