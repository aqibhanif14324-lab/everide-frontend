import { useState, useEffect } from "react";
import BrandContent from "./BrandContent";
import ColorContent from "./ColorContent";
import Practical from "./Practical";
import MembraneContent from "./Membrane";
import GoreTextContent from "./GoreText";
import ChooseDialog from "./ChooseDialog";
import PriceFormContent from "./Price";
import MyContactDialog from "./MyContactDialog";

import SendModeFormDialog from "./SendModeDialog";

const DialogContent = ({
  isOpen,
  setIsOpen,
  defaultselected,
  selectedBrands,
  setSelectedBrands,
  practical,
  setpractical,
  selectedMembrane,
  setselectedMembrane,
  goreTexOptions,
  setgoreTexOptions,
  selectedcut,
  setselectedcut,
  selectedInsulation,
  setSelectedInsulation,
}) => {
  const [currentPage, setCurrentPage] = useState(defaultselected);
  const [selectedColors, setSelectedColors] = useState([]);
  const data = [
    { id: "standard", label: "Standard" },
    { id: "adjusted", label: "Adjusted" },
    { id: "sample", label: "Sample" },
  ];
  const insulation = [
    { id: "doubled", label: "Double" },
    { id: "unlined", label: "Unlined" },
  ];

  useEffect(() => {
    setCurrentPage(defaultselected);
  }, [defaultselected]);

  const handleConfirm = () => {
    console.log("Confirmed selections:", {
      brand: selectedBrands,
      colors: selectedColors,
    });
    setIsOpen(false);
  };

  const handleClearAll = (clear) => {
    switch (clear) {
      case "membrane":
        setselectedMembrane("");
        break;
      case "practical":
        setpractical([]);
        break;
      case "goreTex":
        setgoreTexOptions("");
        break;
      case "cut":
        setselectedcut("");
        break;
      case "insulation":
        setSelectedInsulation("");
        break;

      default:
        break;
    }
  };

  const handleApplyFilters = () => {
    console.log("Applied filters:", {
      sort: selectedBrands,
      brands: selectedBrands,
      colors: selectedColors,
    });
    setIsOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "brands":
        return (
          <BrandContent
            selectedOption={selectedBrands}
            onSelect={setSelectedBrands}
          />
        );
      case "practical":
        return (
          <Practical
            practical={practical}
            onSelectPractical={setpractical}
            onConfirm={handleConfirm}
            onClear={handleClearAll}
          />
        );
      case "membrane":
        return (
          <MembraneContent
            selectedOption={selectedMembrane}
            onSelect={setselectedMembrane}
            onClear={handleClearAll}
          />
        );
      case "goreTex":
        return (
          <GoreTextContent
            selectedOption={goreTexOptions}
            onSelect={setgoreTexOptions}
            onClear={handleClearAll}
          />
        );
      case "cut":
        return (
          <ChooseDialog
            selectedOption={selectedcut}
            onSelect={setselectedcut}
            data={data}
            dontknow={"cut"}
            onClear={handleClearAll}
          />
        );
      case "insulation":
        return (
          <ChooseDialog
            selectedOption={selectedInsulation}
            onSelect={setSelectedInsulation}
            data={insulation}
            dontknow={"insulation"}
            onClear={handleClearAll}
          />
        );
      case "price":
        return <PriceFormContent />;
      case "contact":
        return <MyContactDialog />;
      case "sendMode":
        return <SendModeFormDialog />;
      default:
        return null;
    }
  };

  return (
    <div className="filter-overlay">
      <div className="filter-modal">
        <div className="filter-header">
          <h2>
            {currentPage == "brands"
              ? "What Brand?"
              : currentPage === "practical"
              ? "Practical"
              : currentPage === "membrane"
              ? "Membrane"
              : ""}
          </h2>
          <button className="close-button" onClick={() => setIsOpen(false)}>
            ×
          </button>
        </div>

        <div className="filter-content">{renderPage()}</div>
        {/* 
        {(
          <div className="filter-actions">
            <button
              className="filter-action-button clear-button"
              onClick={handleClearAll}
            >
              CLEAR ALL
            </button>
            <button
              className="filter-action-button apply-button"
              onClick={handleApplyFilters}
            >
              APPLY FILTERS
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default DialogContent;
