import React, { useState } from "react";

function Item({ name, category }) {

	const [cart, setCart] = useState(true)

	function handleCartClick() {
		setCart((prevCart) => prevCart === cart ? !cart : cart)
	}

	const inCartClass = cart ? "" : "in-cart";

	return (
		<li className={inCartClass}>
			<span>{name}</span>
			<span className="category">{category}</span>
			<button
				onClick={handleCartClick}
				className={cart === true ? "add" : "remove"}>
				{cart === true ? "Add to Cart" : "Remove From Cart"}
			</button>
		</li>
	);
}

export default Item;
