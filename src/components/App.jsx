import { useState } from 'react';
import Toolbar from './Toolbar';
import Portfolio from './Portfolio';

const App = ({ filters, projects }) => {
   const [filter, setFilter] = useState(filters[0]);

   function handlerSetFilter(filter) {
      setFilter(filter);
   }

   function handlerFilterProjects(filter) {
      if (filter === 'All') {
         return projects;
      }

      return projects.filter((p) => p.category === filter);
   }

   return (
      <>
         <Toolbar
            filters={filters}
            selected={filter}
            onSelectFilter={(filter) => handlerSetFilter(filter)}
         />
         <Portfolio projects={handlerFilterProjects(filter)} />
      </>
   );
};

export default App;
