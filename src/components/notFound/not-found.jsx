import React from "react";
import styles from "../../css/not-found.module.css";
import sharedStyles from "../../css/shared-styles.module.css";
import { Link } from "react-router-dom";
const NotFound = () => {
	return (
		<div>
			<div className={sharedStyles.tab_header_container}>
				<h1 className={styles.header}>
					No Such Page or Tab, please check the url or return to the home page
				</h1>
			</div>
			<Link to="/" className={sharedStyles.link}>
				<div className={styles.return_button}>Return</div>
			</Link>
		</div>
	);
};

export default NotFound;
