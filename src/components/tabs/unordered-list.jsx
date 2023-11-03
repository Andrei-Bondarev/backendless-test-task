import React from "react";
import sharedStyles from "../../css/shared-styles.module.css";
const UnorderedList = () => {
	return (
		<div>
			<div className={sharedStyles.tab_header_container}>
				<h1 className={sharedStyles.tab_header}>
					Unordered list Component
				</h1>
			</div>
			<div>
				<ul>
					<li>item</li>
					<li>item</li>
					<li>item</li>
				</ul>
			</div>
		</div>
	);
};

export default UnorderedList;
