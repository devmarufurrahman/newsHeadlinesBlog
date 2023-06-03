import React, { Component } from "react";
import { NewsCategories } from "../../../utils/Categories";

class Header extends Component {
	state = {
		searchTerm: "",
	};

	handleChange = (e) => {
		this.setState({
			searchTerm: e.target.value,
		});
	};
	render() {
		const { category } = this.props;
		return (
			<>
				<div className="my-4 text-center">
					<h1 className="mb-4 font-bold">News Headline</h1>
					<input
						type="search"
						className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Type Anything & Press Enter TO Search"
						value={this.state.searchTerm}
						onChange={this.handleChange}
					/>
					<div className="my-4">
						{NewsCategories &&
							Object.keys(NewsCategories).map((item) => {
								if (category === NewsCategories[item]) {
									return (
										<button
											key={NewsCategories[item]}
											className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2"
											type="button">
											{`#${NewsCategories[item]}`}
										</button>
									);
								}
								return (
									<button
										key={NewsCategories[item]}
										className="bg-gray-200 font-bold py-2 px-4 rounded focus:outline-none mx-2 focus:shadow-outline"
										type="button">
										{`#${NewsCategories[item]}`}
									</button>
								);
							})}
					</div>
				</div>
			</>
		);
	}
}

export default Header;
