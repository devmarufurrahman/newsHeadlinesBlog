import React, { Component } from "react";
import NewsItem from "../NewsItem";

class NewsList extends Component {
	render() {
		const { news } = this.props;
		return (
			<>
				<div>
					{news && news.length === 0 && <h4>There is no news</h4>}
					{news &&
						news.map((item) => <NewsItem key={item.title} item={item} />)}
				</div>
			</>
		);
	}
}

export default NewsList;
