import React from "react"


class ShowMovie extends React.Component {
	render() {
		return (
			<div className="MovieCard">
				<img
					className="MovieImage"
					src={this.props.posterurl}
					alt={this.props.title}
				/>
				<div className="MovieInfos">
					<p className="title">{this.props.title}</p>
					<p className="director">{this.props.director}</p>
					<p className="year">{this.props.year}</p>
				</div>
			</div>
		)
	}
}

export default ShowMovie