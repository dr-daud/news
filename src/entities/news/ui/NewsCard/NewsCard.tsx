import { ReactNode } from "react";
import { formatTimeAgo } from "../../../../shared/helpers/fomatTimeAgo";
import Image from "../../../../shared/ui/Image/Image";
import { INews } from "../../model/types";

import styles from "./styles.module.css";

interface Props {
	item: INews;
	type: "banner" | "item";
	viewNewsSLot?: (news: INews) => ReactNode;
}

const NewsCard = ({ item, type = "item", viewNewsSLot }: Props) => {
	return (
		<li className={`${styles.card} ${type === "banner" && styles.banner}`}>
			{type === "banner" ? (
				<Image image={item?.image} />
			) : (
				<div
					className={styles.wrapper}
					style={{ backgroundImage: `url(${item.image})` }}
				></div>
			)}
			<div className={styles.info}>
				<h3 className={styles.title}>{item.title}</h3>
				<p className={styles.extra}>
					{formatTimeAgo(item.published)} by {item.author}
				</p>
			</div>
			{viewNewsSLot ? viewNewsSLot(item) : null}
		</li>
	);
};

export default NewsCard;
