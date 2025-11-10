import { useEffect, useState } from "react";
import "../styles/ProductDetailsForm.css";
import SellingDialog from "./SellingDialog/SellingDialog";

const ProductDetailsForm = ({ selectedData, onBack, onClose }) => {
  const [selectedBrands, setSelectedBrands] = useState("Select the brand");
  const [selectedMembrane, setSelectedMembrane] = useState("");
  const [practical, setPractical] = useState([]);
  const [goreTexOptions, setgoreTexOptions] = useState("")
  const [selectedcut, setselectedcut] = useState("")
  const [selectedInsulation, setSelectedInsulation] = useState("");
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedPrice, setselectedPrice] = useState()

  const [isOpen, setIsOpen] = useState(false);
  const [defaultSelected, setDefaultSelected] = useState("");
  
  const [formData, setFormData] = useState({
    brand: selectedBrands,
    modelName: "",
    forWho: [],
    size: "",
    colors: [],
    condition: "",
    sport: "",
    membrane: "",
    goreTex: "",
    cut: "",
    insulation: "",
    additionalInfo: "",
    price: "",
    contactDetails: "21 Chemin des Rosiers, 74200 Saint Denis",
    sendMode: "Mondial Relay, Chronopost 525, Colissimo, Re",
  });

 

  const maxColors = 3;

  // Sync form data with selections
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      brand: selectedBrands,
      membrane: selectedMembrane,
      practical: practical,
      goreTex: goreTexOptions,
      cut: selectedcut,
      insulation: selectedInsulation,
      colors: selectedColors,
    }));
  }, [selectedBrands, selectedMembrane, practical,goreTexOptions, selectedcut,selectedInsulation, selectedColors]);

  const colorOptions = [
    { id: "black", color: "#000000" },
    { id: "gray", color: "#808080" },
    { id: "brown", color: "#8B4513" },
    { id: "beige", color: "#F5F5DC" },
    { id: "orange", color: "#FFA500" },
    { id: "yellow", color: "#FFFF00" },
    { id: "green", color: "#008000" },
    { id: "teal", color: "#008080" },
    { id: "lightblue", color: "#ADD8E6" },
    { id: "blue", color: "#0000FF" },
    { id: "red", color: "#FF0000" },
    { id: "burgundy", color: "#800020" },
    { id: "purple", color: "#800080" },
    { id: "pink", color: "#FFC0CB" },
  ];

  const sizes = ["XXS", "XS", "S", "M", "L"];

  const personOptions = [
    {
      id: "men",
      label: "Men",
      iconUrl: "https://static.everide.app/wccUmjs5zWmOeInGT4h26cgucI8W-T6tMHtNeXVXYa4/rs:fit:900:900:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9nZW5kZXJzL00ucG5n.webp",
    },
    {
      id: "women",
      label: "Women",
      iconUrl: "https://static.everide.app/9nfOUkeJXEaQjc4bmd2VIZ4qpndffkCSUX8UGLGh3x0/rs:fit:900:900:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9nZW5kZXJzL0YucG5n.webp",
    },
    {
      id: "unisex",
      label: "Unisex",
      iconUrl: "https://static.everide.app/OLn93hZQys3LsWZRQPkTVYiClBiLVJEJGJ_hYGxqD-Y/rs:fit:900:900:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9nZW5kZXJzL1UucG5n.png",
    },
    {
      id: "junior",
      label: "Junior",
      iconUrl: "https://static.everide.app/9lXsyIFbSMq_cLOOBMzUj4vJIyk52PdRdug9P4yDfO4/rs:fit:900:900:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9nZW5kZXJzL0oucG5n.webp",
    },
    {
      id: "kids",
      label: "Kids",
      iconUrl: "https://static.everide.app/oe1L8asflGfODhIjnA_EMAgYovfsyYObu4GtCsKNtbA/rs:fit:900:900:1/q:75/g:ce/aHR0cHM6Ly9zdGF0aWMuZXZlcmlkZS5hcHAvc2l0ZS9nZW5kZXJzL0sucG5n.webp",
    },
  ];


  const handleColorSelect = (colorId) => {
    if (selectedColors.includes(colorId)) {
      setSelectedColors(selectedColors.filter((id) => id !== colorId));
    } else if (selectedColors.length < maxColors) {
      setSelectedColors([...selectedColors, colorId]);
    }
  };



 
  const handlePublish = () => {
    alert("Product published successfully!");
    onClose();
  };

  const openDialog = (type) => {
    setIsOpen(true);
    setDefaultSelected(type);
  };
  

  return (
    <div className="product-details-container">
      <div className="product-details-content">
        <div className="product-type-section">
          <img
            src={selectedData.productType?.iconUrl}
            alt=""
            width={70}
            height={70}
          />
          <div className="product-type-selected">
            <h3>Type of product</h3>
            <div className="product-type-info">
              <span className="product-type-name">
                {selectedData.productType.name}
              </span>
              <button className="edit-button" onClick={()=>onBack()}>Edit</button>
            </div>
          </div>
        </div>

        <div className="add-photos-section">
          <div className="section-header">
            <h3>Add photos</h3>
            <span className="required-label">3 min</span>
          </div>
          <p className="help-text">
            Consult the help to properly manage your images
          </p>
          <button className="add-photos-button">
            <span className="upload-icon">+</span>
            ADD PHOTOS
          </button>
        </div>

        <div className="general-info-section">
          <div className="section-header">
            <h3>General informations</h3>
            <span className="required-label">Mandatory</span>
          </div>

          <div
            className="form-field"
            onClick={() => openDialog("brands")}
          >
            <label>What brand ?</label>
            <div className="field-with-arrow">
              <span className="selected-brand-data">{formData.brand}</span>
              <span className="arrow-icon_product-details">›</span>
            </div>
          </div>

          <div className="form-field">
            <label>Model name?</label>
            <input
              type="text"
              placeholder="eg: speedcross"
              value={formData.modelName}
              onChange={(e) =>
                setFormData({ ...formData, modelName: e.target.value })
              }
            />
            <span className="hint-text">Indicate the exact model</span>
            <span className="character-count">50 characters remaining</span>
          </div>

          <div className="form-field">
            <label>For who ?</label>
            <div className="person-options">
              {personOptions.map((person) => (
                <div
                  key={person.id}
                  className={`person-option ${
                    formData.forWho.includes(person.id) ? "selected" : ""
                  }`}
                  onClick={() => {
                    const newForWho = formData.forWho.includes(person.id)
                      ? formData.forWho.filter((id) => id !== person.id)
                      : [...formData.forWho, person.id];
                    setFormData({ ...formData, forWho: newForWho });
                  }}
                >
                  <img src={person.iconUrl} alt={person.label} />
                  <span className="person-option-label">{person.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="form-field">
            <label>Size</label>
            <div className="size-options">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-option ${
                    formData.size === size ? "selected" : ""
                  }`}
                  onClick={() => setFormData({ ...formData, size: size })}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="form-field color-field">
            <div className="color-field-header">
              <label>Colors</label>
              <span className="color-count">{selectedColors.length} max</span>
            </div>
            <div className="color-options">
              {colorOptions.map((color) => (
                <button
                  key={color.id}
                  className={`color-option ${
                    selectedColors.includes(color.id) ? "selected" : ""
                  }`}
                  style={{ backgroundColor: color.color }}
                  onClick={() => handleColorSelect(color.id)}
                  disabled={
                    !selectedColors.includes(color.id) &&
                    selectedColors.length >= maxColors
                  }
                />
              ))}
            </div>
          </div>

          <div className="form-field">
            <label>Condition</label>
            <div className="condition-options">
              <div
                className={`condition-option ${
                  formData.condition === "new-with-tags" ? "selected" : ""
                }`}
                onClick={() =>
                  setFormData({ ...formData, condition: "new-with-tags" })
                }
              >
                <h4>New with tags</h4>
                <p>
                  New item, in perfect condition, never used, with tags or
                  original packaging
                </p>
              </div>
              <div
                className={`condition-option ${
                  formData.condition === "new-without-tags" ? "selected" : ""
                }`}
                onClick={() =>
                  setFormData({ ...formData, condition: "new-without-tags" })
                }
              >
                <h4>New without tags</h4>
                <p>
                  New item, in perfect condition, never used, without tags or
                  original packaging
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="technical-info-section">
          <div className="section-header">
            <h3>Technical informations</h3>
            <div>
              <span className="optional-label">Optional</span>
              <span className="percentage">30% sale</span>
            </div>
          </div>

          <div className="form-field" onClick={() => openDialog("practical")}>
            <label>Practical</label>
            <div className="field-with-arrow">
              {practical.length > 0 ? (
                <span className="selected-brand-data">{practical.join(", ")}</span>
              ) : (
                <span className="selected-brand-data">Select practical</span>
              )}
              <span className="arrow-icon_product-details">›</span>
            </div>
          </div>

          <div className="form-field" onClick={() => openDialog("membrane")}>
            <label>Membrane</label>
            <div className="field-with-arrow">
              {selectedMembrane ? (
                <span className="selected-brand-data">{selectedMembrane}</span>
              ) : (
                <span className="selected-brand-data">Select Membrane</span>
              )}
              <span className="arrow-icon_product-details">›</span>
            </div>
          </div>

          

          
          <div className="form-field" onClick={() => openDialog("goreTex")}>
             <label>Gore-Tex</label>
            <div className="field-with-arrow">
              {formData.goreTex  ? (
                <span className="selected-brand-data">{formData.goreTex }</span>
              ) : (
                <span className="selected-brand-data">Select Membrane</span>
              )}
              <span className="arrow-icon_product-details">›</span>
            </div>
          </div>

          <div className="form-field" onClick={() => openDialog("cut")}>
            <div className="field-with-arrow">
              <label>Cut</label>
              <span>{formData.cut || "Select Fit"}</span>
              <span className="arrow-icon_product-details">›</span>
            </div>
          </div>

          <div className="form-field" onClick={() => openDialog("insulation")}>
            <div className="field-with-arrow">
              <label>Insulation</label>
              <span>{formData.insulation || "Select Insulation"}</span>
              <span className="arrow-icon_product-details">›</span>
            </div>
          </div>

          <div className="form-field">
            <label>Need to add info?</label>
            <textarea
              placeholder="A precision on the size, an important detail, a small defect to indicate or a great adventure lived with your article to tell?"
              value={formData.additionalInfo}
              onChange={(e) =>
                setFormData({ ...formData, additionalInfo: e.target.value })
              }
              maxLength={800}
            />
            <span className="character-count">
              {800 - formData.additionalInfo.length} characters remaining
            </span>
          </div>
        </div>

        <div className="price-delivery-section">
          <div className="section-header">
            <h3>Price and delivery</h3>
            <span className="required-label">Mandatory</span>
          </div>

          <div className="form-field" onClick={() => openDialog("price")}>
            <label>my selling price</label>
            <div className="field-with-arrow">
              <span>Plus delivery</span>
              <span className="arrow-icon_product-details">›</span>
            </div>
          </div>

          <div className="form-field" onClick={() => openDialog("contact")}>
            <label>My contact details</label>
            <div className="field-with-arrow">
              <span>{formData.contactDetails}</span>
              <span className="arrow-icon_product-details">›</span>
            </div>
          </div>

          <div className="form-field" onClick={() => openDialog("sendMode")}>
            <label>Send mode</label>
            <div className="field-with-arrow">
              <span>{formData.sendMode}</span>
              <span className="arrow-icon_product-details">›</span>
            </div>
          </div>
        </div>

        <div className="accept-terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            I accept the{" "}
            <a href="#" className="terms-link">
              GTC/CGU
            </a>
          </label>
        </div>

        <button className="publish-button" onClick={handlePublish}>
          PUBLISH
        </button>
      </div>

      <SellingDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        defaultselected={defaultSelected}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
        practical={practical}
        setpractical={setPractical}
        selectedMembrane={selectedMembrane}
        setselectedMembrane={setSelectedMembrane}
        goreTexOptions={goreTexOptions}
        setgoreTexOptions={setgoreTexOptions}
        selectedcut={selectedcut}
        setselectedcut={setselectedcut}
        selectedInsulation={selectedInsulation}
        setSelectedInsulation={setSelectedInsulation}
      />

    </div>
  );
};

export default ProductDetailsForm;