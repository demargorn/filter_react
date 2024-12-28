const Toolbar = ({ filters, selected, onSelectFilter }) => {
   const renderFilters = (filters) => {
      return filters.map((filter, i) => {
         const className = filter === selected ? 'filter-selected' : 'filter';
         return (
            <button
               key={`filter-${i}`}
               className={className}
               onClick={() => onSelectFilter(filter)}
            >
               {filter}
            </button>
         );
      });
   };

   return <div className='toolbar'>{renderFilters(filters)}</div>;
};

export default Toolbar;
