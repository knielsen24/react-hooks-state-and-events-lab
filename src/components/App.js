import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

	const [isDark, setIsDark] = useState(false)
	
	function handleToggleMode() {
		setIsDark((mode) => mode === isDark ? !isDark : isDark)
	}

	const appClass = isDark ? "App dark" : "App light"

	return (
		<div className={appClass}>
			<header>
				<h2>Shopster</h2>
				<button onClick={handleToggleMode}>
					{isDark === true ? "Dark Mode" : "Light Mode"}
				</button>
			</header>
			<ShoppingList items={itemData} />
		</div>
	);
}

export default App;
