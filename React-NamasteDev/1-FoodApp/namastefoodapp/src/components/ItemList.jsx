

const ItemList = ({ data }) => {

  return (
    <div>
        {
          data.map((item,index) => {
            return (
              <div key={index} className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                  <div className="py-4">
                    <span className="text-black text-xl">{item.Item}</span>
                    <span> - Rs: {item.Rs}</span>
                  </div>
                  <div>
                    <p className="text-xs">{item.description}</p>
                  </div>
                </div>
                <div className="w-3/12 p-4">
                  <div className="absolute">
                    <button className="p-2 mx-16 rounded-lg text-sm bg-black shadow-lg text-white">
                      Add +
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }
    </div>
  );
}

export default ItemList;
