import { portfolioItems, filters } from "../data/constants";
import { useState, useEffect } from "react";
import PortfolioCard from "./PortfolioCard";
import Bean from "./Bean";
function Portfolio() {
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Wordpress");

  useEffect(() => {
    setFilteredItems(
      portfolioItems.items
        .filter(
          (item) =>
            item.filters.findIndex((filter) => filter === activeFilter) > -1
        )
        .map((item, i) => <PortfolioCard item={item} key={i} />)
    );
  }, [activeFilter]);

  const filterBeans = filters.map((filter, i) => (
    <Bean
      text={filter}
      key={i}
      setFilter={setActiveFilter}
      currentFilter={activeFilter}
    />
  ));
  return (
    <>
      <section
        className="text-gray-400 body-font bg-gray-800 h-screen flex flex-col items-center justify-center"
        id="portfolio"
      >
        <div className="container px-5 py-4 my-4 mx-auto">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Pitchfork Kickstarter Taxidermy
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table.
            </p>
          </div>
        </div>
        <div className="flex flex-row mb-3">{filterBeans}</div>
        <div className="grid gap-2 grid-rows-2 grid-cols-3 container px-3 max-w-screen-lg">
          {filteredItems}
        </div>
      </section>
    </>
  );
}

export default Portfolio;
