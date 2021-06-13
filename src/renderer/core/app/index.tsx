import React from "react";
import { styled } from "@twstyled/core";

const Corelayout = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: auto 1fr;
`;

const App: React.FC = () => {
  return (
    <Corelayout h-screen- w-screen- overflow-hidden->
      {/* Titlebar */}
      <div col-start-2- col-end-4- bg-red-500- row-start-1- row-end-2->
        titlebar
      </div>

      {/* Sidebar */}
      <div col-start-1- col-end-2- row-start-1- row-end-3- bg-purple-500->
        Sidebar
      </div>

      {/* Contextbar */}
      <div col-start-2- col-end-3- row-start-2- row-end-3- bg-yellow-500->
        Contextbar
      </div>

      {/* Pages */}
      <div col-start-3- col-end-4- row-start-2- row-end-3- bg-blue-500->
        Pages
      </div>
    </Corelayout>
  );
};

export default App;
