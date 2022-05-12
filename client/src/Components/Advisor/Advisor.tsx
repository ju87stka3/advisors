import React, { memo } from "react";
import "./Advisor.css";
import { IAdvisor } from "../../Type/IAdvisors";

const Advisor = ({ item }: { item: IAdvisor }) => {
  return (
    <div className="Advisor">
      <div className="Advisor__left">
        <p>Name: {item?.name || "No name"}</p>
        <p>Surname: {item?.surname || "No surname"}</p>
        <p>Language: {item?.language || "No language"}</p>
      </div>
      <div className="Advisor__right">
        <p>Id: {item?.id || "No id"}</p>
        <p>Reviews: {item?.reviews || "No reviews"}</p>
        <p>Online: {item?.online ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
};
export default memo(Advisor);
