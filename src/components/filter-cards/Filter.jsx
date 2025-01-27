// const Filters = ({ data, selectedFilters, setSelectedFilters }) => {
//     const handleFilterChange = (type) => {
//       setSelectedFilters((prev) =>
//         prev.includes(type)
//           ? prev.filter((item) => item !== type)
//           : [...prev, type]
//       );
//     };
  
//     const uniqueTypes = [
//       ...new Set(
//         data.flatMap((item) => item.about?.map((about) => about.type) || [])
//       ),
//     ];
  
//     return (
//       <div className="mx-8">
//         <h3 className="text-[#aaaa] font-semibold text-[20px] uppercase">type</h3>
//         <ul>
//           {uniqueTypes.map((type) => (
//             <li key={type} className="mb-2">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   checked={selectedFilters.includes(type)}
//                   onChange={() => handleFilterChange(type)}
//                 />
//                 {type}
//               </label>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };
  
//   export default Filters;
  

// const Filters = ({ data, selectedFilters, setSelectedFilters }) => {
//     const filterOptions = [...new Set(data.flatMap((car) => car.about?.map((about) => about.type)))];
  
//     const handleCheckboxChange = (e) => {
//       const { value, checked } = e.target;
//       const updatedFilters = checked
//         ? [...selectedFilters, value]
//         : selectedFilters.filter((filter) => filter !== value);
  
//       setSelectedFilters(updatedFilters); // URLni yangilash
//     };
  
//     return (
//       <div className="p-4">
//         <h3 className="text-xl font-bold mb-4">Filters</h3>
//         {filterOptions.map((option, index) => (
//           <label key={index} className="block">
//             <input
//               type="checkbox"
//               value={option}
//               checked={selectedFilters.includes(option)}
//               onChange={handleCheckboxChange}
//             />
//             {option}
//           </label>
//         ))}
//       </div>
//     );
//   };
  
//   export default Filters;
  


const Filters = ({ data, selectedFilters, setSelectedFilters }) => {
    // Unikal 'type' va 'capacity' filterlarini olish
    const filterTypes = [
      ...new Set(data.flatMap((car) => car.about?.map((about) => about.type))) // 'type' unikal qiymatlari
    ];
  
    const filterCapacities = [
      ...new Set(data.flatMap((car) => car.about?.map((about) => about.capacity))) // 'capacity' unikal qiymatlari
    ];
  
    // Filterlar o'zgarganda yangilash
    const handleCheckboxChange = (e, filterCategory) => {
      const { value, checked } = e.target;
      let updatedFilters;
  
      // Agar filterCategory 'type' bo'lsa
      if (filterCategory === 'type') {
        updatedFilters = checked
          ? [...selectedFilters.type, value]
          : selectedFilters.type.filter((filter) => filter !== value);
      }
      // Agar filterCategory 'capacity' bo'lsa
      if (filterCategory === 'capacity') {
        updatedFilters = checked
          ? [...selectedFilters.capacity, value]
          : selectedFilters.capacity.filter((filter) => filter !== value);
      }
  
      // Filterlarni yangilash
      setSelectedFilters((prev) => ({
        ...prev,
        [filterCategory]: updatedFilters,
      }));
    };
  
    return (
      <div className="p-4">
        <h3 className="text-xl font-bold mb-4">Filters</h3>
        
        {/* Type Filter */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Type</h4>
          {filterTypes.map((option, index) => (
            <label key={index} className="block">
              <input
                type="checkbox"
                value={option}
                checked={selectedFilters.type.includes(option)}
                onChange={(e) => handleCheckboxChange(e, 'type')}
              />
              {option}
            </label>
          ))}
        </div>
  
        {/* Capacity Filter */}
        <div>
          <h4 className="text-lg font-semibold">Capacity</h4>
          {filterCapacities.map((option, index) => (
            <label key={index} className="block">
              <input
                type="checkbox"
                value={option}
                checked={selectedFilters.capacity.includes(option)}
                onChange={(e) => handleCheckboxChange(e, 'capacity')}
              />
              {option} people
            </label>
          ))}
        </div>
      </div>
    );
  };
  
  export default Filters;
  