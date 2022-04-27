import React, { useState, useEffect } from "react";
import Card from "../UI/Card/Card";

const useLoadingScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  
 /*  useEffect(() => {
      const handleStatusLoading = (status) => {
          setIsLoading(status.isLoading);
      }
  }) */
  return isLoading
};

export default useLoadingScreen;