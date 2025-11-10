import React, { useMemo, useState } from "react";
import GoBackButton from "../../ui/goback/goBack";
import { IoSearch } from "react-icons/io5";
import BrandsListItem from "./SearchBrands";

const SearchCategoryBrands = ({setCurrentTab}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
 const brands = [
    "ARCTERYX",
    "ARVA",
    "ASICS",
    "BLACK CROWS",
    "BLACK DIAMOND",
    "BROOKS",
    "DYNAFIT",
    "FIVE TEN",
    "GARMIN",
    "HAGLOFS",
    "HOKA ONE ONE",
    "ICEBREAKER",
    "MAVIC",
    "MILLET",
    "MOUSTACHE BIKES",
    "MSR",
    "OAKLEY",
    "ON RUNNING"
  ];
  // Memoized filtered brands for performance
  const filteredBrands = useMemo(() => {
    if (!searchValue) return brands;
    return brands.filter(brand => 
      brand.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [brands, searchValue]);

  const handleBrandClick = (brand) => {
    console.log(`${brand} clicked`);
    // Add your navigation or state update logic here
  };
const  handleBack = () => {
    setCurrentTab("sports");

  
}
  return (
    <>
      <div className="search_header_container_categories">
        
        <div className="search_header_text-wapper">
          <GoBackButton to={"/search"} handleBack={handleBack} />

          <div className="search_container">
            <input
              type="search"
              placeholder=""
              className="search-input"
              value={searchValue}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <IoSearch className="search-icon" size={20} />
            {!isFocused && searchValue === "" && (
              <>
                {" "}
                <span className="search-label-1">Search</span>
                <span className="search-label">Search for a brand..</span>
              </>
            )}
          </div>
        </div>
      </div>
{
        filteredBrands.map((brand, index) => (
          <BrandsListItem
            key={index}
            index={index + 1}
            text={brand}
            onClick={() => console.log(`${brand} clicked`)}
          />
        ))
}
    </>
  );
};

export default SearchCategoryBrands;
