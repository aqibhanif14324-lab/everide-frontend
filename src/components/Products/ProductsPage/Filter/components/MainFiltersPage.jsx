import "../styles/MainFiltersPage.css";

const MainFiltersPage = ({
  selectedSort,
  selectedBrands,
  selectedColors,
  onNavigate,
  selectedState,
  selectedGender,
}) => {
  const getSortText = () => {
    switch (selectedSort) {
      case "recent":
        return "The most recent";
      case "ascending":
        return "Ascending price";
      case "descending":
        return "Decreasing price";
      default:
        return "The most recent";
    }
  };

  const getSelectedCount = (items) => {
    return items.length > 0 ? `(${items.length})` : "";
  };

  const filters = [
    {
      label: "Sort by",
      value: getSortText(),
      key: "sort",
      className: "sort-row",
    },
    {
      label: "Brands",
      value: getSelectedCount(selectedBrands),
      key: "brands",
    },
    {
      label: "Colors",
      value: getSelectedCount(selectedColors),
      key: "colors",
    },

    // { label: "Size", key: "size" },

    // {
    //   label: "Price",
    //   key: "price",
    //   extraClass: "price-border",
    // },
    { label: "State", key: "state", value: getSelectedCount(selectedState) },
    { label: "Gender", key : "gender", value: getSelectedCount(selectedGender) },
  ];

  const technicalFilters = [
    // { label: "Sleeveless", key: "sleeveless" },

    // { label: "Matter", key: "matter" },
  ];

  const renderFilterRow = ({
    label,
    value = "",
    key,
    className = "",
    extraClass = "",
  }) => (
    <div
      className={`filter-row ${extraClass}`}
      key={key}
      onClick={() => onNavigate && onNavigate(key)}
    >
      <div className={`filter-label ${className}`}>
        <span>{label}</span>
        {value && <span className="filter-selection">{value}</span>}
      </div>
      <span className="chevron">›</span>
    </div>
  );

  return (
    <div className="main-filters">
      {filters.map(renderFilterRow)}

      <div className="filter-section-title">TECHNICAL INFORMATION</div>

      {technicalFilters.map(renderFilterRow)}
    </div>
  );
};

export default MainFiltersPage;
