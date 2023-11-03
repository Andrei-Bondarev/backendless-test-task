import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TabContext } from "../../context/tabContext";
import styles from "../../css/root.module.css";
import sharedStyles from "../../css/shared-styles.module.css";
const Root = () => {
	const tabs = useContext(TabContext);
	return (
		<div className={styles.container}>
			{tabs
				.sort((a, b) => a.order - b.order)
				.map((tab) => (
					<Link
						key={tab.id}
						className={sharedStyles.link}
						to={`/tab/${tab.id}`}
					>
						<div className={styles.tab}>{tab.title}</div>
					</Link>
				))}
		</div>
	);
};

export default Root;
