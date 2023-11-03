import React from "react";
import sharedStyles from "../../css/shared-styles.module.css";

const Chart = () => (
	<div>
		<div className={sharedStyles.tab_header_container}>
			<h1 className={sharedStyles.tab_header}>Chart Component</h1>
		</div>
		<div>Chart Content</div>
	</div>
);

export default Chart;
