import React, { useCallback } from "react";
import "./Advisors.css";
import { useFetch } from "../../Hooks/useFetch";
import { getAdvisors } from "../../Api/Advisors";
import { IAdvisor, IParamRequest } from "../../Type/IAdvisors";
import Advisor from "../../Components/Advisor";
import Error from "../../Components/Error";
import Filters from "../../Components/Filters";

function Advisors() {
  const [filter, setFilter] = React.useState<IParamRequest | undefined>({
    page: 1,
  });
  const [page, setPage] = React.useState(1);
  const [bottom, setIsBottom] = React.useState(false);

  const api = useCallback(() => getAdvisors(filter), [filter]);

  const [data, loading, error] = useFetch<IAdvisor[]>(api);
  const [listOfAdvisors, setListOfAdvisors] = React.useState<IAdvisor[] | null>(
    []
  );

  React.useEffect(() => {
    if (bottom) {
      setFilter((prev) => {
        return { ...prev, page: page };
      });
    }
  }, [page]);
  React.useEffect(() => {
    if (bottom) {
      setPage((prev) => prev + 1);
    }
  }, [bottom]);
  React.useEffect(() => {
    setPage(1);
    setListOfAdvisors([]);
  }, [error]);

  React.useEffect(() => {
    setListOfAdvisors((prev) => {
      if (!prev) {
        return data;
      }
      if (!data) {
        return [];
      }

      const res = [...prev, ...data];
      return res;
    });
    setIsBottom(false);
  }, [data]);

  React.useEffect(() => {
    if (!!filter && filter?.page && filter?.page > 1) {
      return;
    }
    console.log("clear");
    setListOfAdvisors([]);
  }, [filter]);
  const onScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const target = event?.target as HTMLElement;
    if (
      target?.scrollHeight - (target?.scrollTop + target?.offsetHeight) <
      100
    ) {
      setIsBottom(!!data && !!data?.length ? true : false);
    }
  };
  console.log("error", error);
  return (
    <div className="Advisors_page">
      <Filters setFilter={setFilter} setPage={setPage} />
      <p>On this page you see a list of advisors </p>

      <main className="Advisors" onScroll={onScroll} data-testid="scroll">
        <div className="Advisors__wrapper">
          {loading && <p className="Advisors__loading">Loading</p>}
          <div
            className={
              loading ? "Advisors__list Advisors__list_blur" : "Advisors__list"
            }
          >
            {!listOfAdvisors?.length
              ? !loading && <p>Nothing to show</p>
              : listOfAdvisors?.map((item) => (
                  <Advisor key={item?.id} item={item} />
                ))}
          </div>
          {!!error && <Error message={error} />}
        </div>
      </main>
    </div>
  );
}

export default Advisors;
