import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Initial check
    setIsMobile(mediaQuery.matches);

    // Event listener for changes in the media query
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add event listener
    mediaQuery.addEventListener("change", handleMediaChange);

    // Cleanup on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return { isMobile };
};

export default useIsMobile;
