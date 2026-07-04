import React, { useEffect, useState } from "react";

import LoadingPage from "./Pages/LoadingPages";
import Slide1 from "./Slides/Slide1/Slide1";
import Navbar from "./components/Navbar/Navbar";
import SlideIndicator from "./components/SlideIndicator/SlideIndicator";

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000); 

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <SlideIndicator />
      <Slide1 />
      <Navbar />
    </>
  );
};

export default App;