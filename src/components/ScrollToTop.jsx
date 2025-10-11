// // src/components/ScrollToTop.jsx

// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     // // This message will help us debug
//     // console.log("SCROLL ATTEMPTED on path:", pathname); 
    
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

// export default ScrollToTop;
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // Get the entire location object, not just the pathname
  const location = useLocation();

  useEffect(() => {
    // This effect will now run every time the location object changes
    window.scrollTo(0, 0);
  }, [location]); // 👈 The dependency is now the location object

  return null;
}

export default ScrollToTop;