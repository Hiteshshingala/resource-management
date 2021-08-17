import React, { useEffect, useState } from "react";
import AddRestaurantName from "../../components/restaurant/addRestaurantName";
import RestaurantLayout from "../../components/restaurant/restaurantLayout";
import SideBar from "../../components/sidebar";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./dashbord.css";
function Dashboard() {
  const [isCompanyNameExist, setIsCompanyNameExist] = useState(false);
  useEffect(() => {
    const compExist = checkCompanyNameExist();
    setIsCompanyNameExist(compExist);
  }, []);

  const checkCompanyNameExist = () => {
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : user;
    if (user && user.restaurantName) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
            {!isCompanyNameExist ? (
              <>
                <AddRestaurantName />
              </>
            ) : (
              <>
                <RestaurantLayout />
                <div>this is Dashboard page</div>
              </>
            )}
    </>
  );
}

export default Dashboard;