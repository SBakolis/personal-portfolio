import Education from "./Education";
import Work from "./Work";
import { useState } from "react";
function Experience() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <section
      className="bg-gray-900 text-gray-100  h-screen flex flex-col items-center justify-center"
      id="exp"
    >
      <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap text-gray-100">
        <a
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 ${
            currentTab === 0
              ? "border-violet-400 text-gray-50"
              : "border-gray-700 text-gray-400"
          } `}
          onClick={() => setCurrentTab(0)}
        >
          Excepturi
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-2 border-b-4 ${
            currentTab === 1
              ? "border-violet-400 text-gray-50"
              : "border-gray-700 text-gray-400"
          } `}
          onClick={() => setCurrentTab(1)}
        >
          Consectetur
        </a>
      </div>
      {currentTab === 0 ? <Education /> : null}
      {currentTab === 1 ? <Work /> : null}
    </section>
  );
}

export default Experience;
