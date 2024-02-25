import { useState } from "react";
import ItemList from "./ItemList";

const Restuarantcategory = ({ data, showItems, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  }

  const itemCards = [
    {
      Item: "Pulao",
      Rs: 100,
      description : "Special Pulao"
    },
    {
      Item: "Biryani",
      Rs: 150,
      description : "Special Pulao"
    },
    {
      Item: "Paratha",
      Rs: 50,
      description : "Special Pulao"
    },
    {
      Item: "Kulcha",
      Rs: 35,
      description : "Special Pulao"
    }
  ];


  return (
    <div>
      <div className="w-6/12 m-auto bg-gray-50 shadow-lg p-4 my-4">
        <div className="justify-between flex cursor-pointer"
          onClick={handleClick}
        >
            <span className="font-bold text-lg"> {data} ({ data.length }) </span>
            <span>🔽</span>
        </div>

        {
          showItems && <ItemList data={itemCards} />
        }

      </div>
    </div>
  );
}

export default Restuarantcategory;
