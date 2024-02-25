import { useEffect, useState } from "react";
import resList from "./resList";

const useResturantMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);
  //fetch the data
  useEffect(() => {
    fetchMenu().then((response) => {
      var filterecord = response.filter(x => x.id === parseInt(resId));
      setResInfo(filterecord);
    });
  }, [resId]);

  const fetchMenu = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(resList);
      }, 2000);
    });
  }

  return resInfo;
}

export default useResturantMenu;
