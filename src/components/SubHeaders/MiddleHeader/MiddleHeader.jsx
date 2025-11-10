// MiddleHeader.jsx
import React, { useEffect, useState } from "react";
import "./style.css";
import { navData } from "../../../Data/data";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useAnimation } from "./useAnimation";
import { Link } from "react-router-dom";

const MiddleHeader = () => {
  const [activeMenu, setActiveMenu] = useState(null);
const  {fadeInFun,fadeInRef , slideInRef, slideInFun}  = useAnimation()
  const handleMenuClick = (menuKey) => {
    setActiveMenu((prev) => (prev === menuKey ? null : menuKey));
  };
  useEffect(() => {
    if (activeMenu) {
      fadeInFun(); 
      slideInFun();
    }
  }, [activeMenu]);
  const renderMenuContent = (menuKey) => {
    const menu = navData[menuKey];
    if (!menu) return null;

    if (menu.sections) {
      // multi_section (e.g., Sports)
      return (
        <div className="menu-grid container " ref={fadeInRef} >
          {menu.sections.map((section) => (
            <div className="menu-card" key={section.title}>
              <img src={section.image} alt={section.title} />
              <h3>{section.title}</h3>
              <ul>
                {section.subcategories.map((sub) => (
                  <li key={sub.link}>
                    <a href={sub.link}>{sub.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }

    if (menu.categories) {
      // tabbed_sections (e.g., Outdoor, Children, Lifestyle)
      return (
        <div className="container"  ref={slideInRef}>
          <div>
            <TabGroup className={"tab-group"}>
              <TabList className="tab-lists">
                {menu.categories.map(({ title, icon }) => (
                  <Tab
                    key={title}
                    className={({ selected }) =>
                      `tab-list-item ${selected ? "active-tab" : ""}`
                    }
                    
                  >
                    {icon && <span className="tab-icon">{icon}</span>}
                    {title}
                  </Tab>
                ))}
              </TabList>

              <TabPanels className="mt-3">
                {menu.categories.map(({ title, items, image }) => (
                  <TabPanel
                    key={title}
                    className="tab-panel"
                    style={{ width: "100%" }}
                  >
                    <div
                      className="tab-items-columns"
                      style={{ display: "flex", gap: "2rem" }}
                    >
                      {Array.from(
                        { length: Math.ceil(items.length / 6) },
                        (_, colIdx) => (
                          <ul
                            key={colIdx}
                            style={{ listStyle: "none", margin: 0, padding: 0 }}
                          >
                            {items
                              .slice(colIdx * 6, colIdx * 6 + 6)
                              .map((item, index) => (
                                <li key={index} className="tab-list-item-link">
                                  <a href="#">
                                    <span className="" />
                                    {item}
                                  </a>
                                </li>
                              ))}
                          </ul>
                        )
                      )}
                    </div>

                    <div className="tab-image-container">
                      <img src={image} alt="" width={300} height={300} />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      );
    }

    if (menu.bestSellers && menu.partners) {
      // brand_sections (e.g., Brands)
      return (
        <div className="menu-brands container">
          <div>
            <h2 className="main-title">Best Sellers</h2>
            <div className="brand-logos">
              {menu.bestSellers[0].brands.map((brand) => (
                <div>
                  <a href={brand.link} key={brand.name} className="brand-item">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="brand_single_logo"
                      width={20}
                      height={20}
                    />
                    <span>{brand.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="main-title">The most durable</h2>
            <div className="brand-logos">
              {menu.bestSellers[0].brands.map((brand) => (
                <div>
                  <a href={brand.link} key={brand.name} className="brand-item">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="brand_single_logo"
                      width={20}
                      height={20}
                    />
                    <span>{brand.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="partners-section">
            <h3 className="main-title">{menu.partners.subtitle}</h3>
            <p>{menu.partners.description}</p>
            <div className="brand-images">
              {menu.partners.brands.map((brand) => (
                <div key={brand.name} className="brand-image">
                  <img src={brand.image} alt={brand.name} />
                  <p>{brand.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="menu-grid container">
        <p>No template defined for: {menuKey}</p>
      </div>
    );
  };

  return (
    <div className="middleheader_main_main">
      <div className="middle_main ">
        <nav className="main-nav-container  container">
          <div className="navbar">
            {Object.keys(navData).map((menuKey) => (
            <button
              key={menuKey}
              className={` ${activeMenu === menuKey ? "active-nav" : ""}`}
              onClick={() => handleMenuClick(menuKey)}
            >
              {navData[menuKey].title || menuKey}
            </button>
          ))}

         
          </div>
<Link to={"/sell/abdurazak"} className="sell-button-large">
          <button >Sell</button></Link>
        </nav>

      <div className="menu-content">
      {activeMenu && (
          <div className="menu-overlay">
            {renderMenuContent(activeMenu)}
            <Footer />
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default MiddleHeader;

function Footer() {
  return (
    <div className="footer_container">
      ♻️ Buy. Sell. Your equipment protects the playing field
    </div>
  );
}
