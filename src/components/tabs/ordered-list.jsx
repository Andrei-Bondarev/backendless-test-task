import React from "react";
import sharedStyles from "../../css/shared-styles.module.css";

const OrderedList = () => {
  return (
		<div>
			<div className={sharedStyles.tab_header_container}>
				<h1 className={sharedStyles.tab_header}>Ordered list Component</h1>
			</div>
			<ol>
				<li>item</li>
				<li>item</li>
				<li>item</li>
			</ol>
		</div>
	);
};

export default OrderedList;
