import React, { memo } from "react";
import { IParamRequest } from "../../Type/IAdvisors";
import "./Filters.css";

const Filters = ({
  setFilter,
  setPage,
}: {
  setFilter: React.Dispatch<React.SetStateAction<IParamRequest | undefined>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleFilters = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setFilter((prev) => {
      if (event?.target?.value === "none") {
        !!prev && delete prev[event?.target?.name as keyof IParamRequest];
        return { ...prev, page: 1 };
      }
      return { ...prev, page: 1, [event?.target?.name]: event?.target?.value };
    });
    setPage(1);
  };

  return (
    <header className="Filters">
      <p>Filters</p>
      <div className="Filters__inputs">
        <div className="Filters__input">
          <label htmlFor="online">Choose your status</label>

          <select
            id="online"
            name="online"
            data-testid="online"
            onChange={handleFilters}
            aria-label="Choose your status"
          >
            <option value="none" defaultChecked>
              Noting status
            </option>
            <option value="true">Online</option>
            <option value="false">Offline</option>
          </select>
        </div>
        <div className="Filters__input">
          <label htmlFor="language">Choose your language</label>

          <select
            id="language"
            name="language"
            onChange={handleFilters}
            aria-label="Choose your language"
          >
            <option value="none" defaultChecked>
              Noting language
            </option>
            <option value="english">English</option>
            <option value="russian">Russian</option>
            <option value="german">German</option>
          </select>
        </div>
        <div className="Filters__input">
          <label htmlFor="sort">Choose your sort</label>

          <select
            id="sort"
            name="sort"
            onChange={handleFilters}
            aria-label="Choose your sort"
          >
            <option value="none" defaultChecked>
              Noting sort
            </option>
            <option value="asc">Reviews Asc </option>
            <option value="desc">Reviews Desc</option>
          </select>
        </div>
      </div>
    </header>
  );
};
export default memo(Filters);
