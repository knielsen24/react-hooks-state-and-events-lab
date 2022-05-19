import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

	const [selectedCategory, setSelectedCategory] = useState("All")
	//console.log(items)

	const filterList = items.filter((item) => {
		// if (selectedCategory !== "All") {
		// 	return item.category.includes(selectedCategory)
		// } else if (selectedCategory === "All"){
		// 	return true
		// }
		return selectedCategory !== "All" ? item.category.includes(selectedCategory) : true
	})
	
	const handleFilter = (e) => {
		setSelectedCategory(e.target.value)
	}

	return (
		<div className="ShoppingList">
			<div className="Filter">
				<select onChange={handleFilter} name="filter">
					<option value="All">Filter by category</option>
					<option value="Produce">Produce</option>
					<option value="Dairy">Dairy</option>
					<option value="Dessert">Dessert</option>
				</select>
			</div>
			<ul className="Items">
				{filterList.map((item) => (
					<Item key={item.id} name={item.name} category={item.category} />
				))}
			</ul>
		</div>
	);
}

export default ShoppingList;
