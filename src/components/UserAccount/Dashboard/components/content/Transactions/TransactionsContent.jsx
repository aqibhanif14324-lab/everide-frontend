import React from "react";
import { useMenu } from "../../../context/MenuContext";
import OrderSearch from "./OrderSearch/OrderSearch";
import NoSalesMessage from "./NoSalesMessage/NoSaleMessage";

function TransactionsContent() {
  const { activeTab } = useMenu();

  // Content for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "My purchases":
        return (
          <div className="content-page">
          <OrderSearch />
          </div>
        );
      case "My Sales":
        return (
          <div className="content-page">
         <NoSalesMessage/>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="wardrobe-content">{renderTabContent()}</div>;
}

export default TransactionsContent;
