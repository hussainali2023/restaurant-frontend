import Cover from "../../components/Cover/Cover";
import orderCover from "../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();

  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  console.log(category);

  const dessert = menu?.filter((item) => item.category === "dessert");
  const soup = menu?.filter((item) => item.category === "soup");
  const salad = menu?.filter((item) => item.category === "salad");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const drinks = menu?.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro | Order Food</title>
      </Helmet>
      <Cover
        heading={"Order"}
        subHeading={"Order delicious Food from here"}
        img={orderCover}
      />

      <div className=" lg:mx-[250px] my-12">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            {/* Salad content  */} <FoodCard items={salad} />{" "}
          </TabPanel>
          <TabPanel>
            {/* Pizza content  */} <FoodCard items={pizza} />
          </TabPanel>
          <TabPanel>
            {/* Soup content  */} <FoodCard items={soup} />
          </TabPanel>
          <TabPanel>
            {/* Dessert content  */} <FoodCard items={dessert} />
          </TabPanel>
          <TabPanel>
            {/* Drinks content  */}
            <FoodCard items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
