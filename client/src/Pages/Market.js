import React, { useEffect, useState } from "react";
import Card from "../components/Cards/newcard";
import {
  MAGIC_ITEMS,
  ALL_EQUEPMENT,
  MONSTERS_QUERY,
  MONSTER_QUERY,
} from "../utils/api";

const Market = () => {
  const [equipments, setEquipments] = useState([]);
  useEffect(() => {
    ALL_EQUEPMENT().then(({ data }) => {
      console.log("***", data);
      setEquipments(data.equipments);
    });
  }, []);

  return (
    <div>
      <div>
        <h1> Welcome to the Marketplace </h1>
      </div>
      <div>
        <ul>{equipments.length && <Card equipments={equipments} />}</ul>
      </div>
    </div>
  );
};

export default Market;
