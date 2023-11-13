import ItemList from "./ItemList";

function RestaurantCategory({data, showItems, setShowIndex}) {

  const handleClick = () => {
    setShowIndex(showItems);
  }
  return (
    <div>
        <div className="w-6/12 rounded-md mx-auto my-4 p-4 bg-gray-200 shadow-lg py">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            {showItems && <ItemList items = {data.itemCards}  />}
        </div>
        
    </div>
  )
}

export default RestaurantCategory;