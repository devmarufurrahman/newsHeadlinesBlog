import React, { Component } from "react";
import { NewsCategories } from "../News/Categories";

class Header extends Component {
	state = {
		searchTerm: "",
	};

	handleChange=e=>{

	}
	render() {
		const {categorise}=this.props
		return (
			<>
				<div className="my-4">
					<h1 className="mb-4 font-bold">News Headline</h1>
					<input
						type="search"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Type Anything & Press Enter TO Search"
						value={this.state.searchTerm}
						onChange={this.handleChange}
					/>
					<div className="my-4">
						{
							NewsCategories && Object.keys(NewsCategories).map(item=>{
								if(categorise === NewsCategories[item]){
									//
								}
							})
						}
					</div>
				</div>
			</>
		);
	}
}

export default Header;
