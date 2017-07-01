var FormField = React.createClass({
	getInitialState: function() {
        return {title: null};
    },
    changeTitle: function(event) {
        this.setState({title : event.target.value});
    },
    render: function() {
        return (
        	<div>
			<form action="#">
			    Submit request string: <input id="requestString" style="width: 80%" type="text" placeholder="Enter the URL you'd like to request" />
			    <br />
			    <input type="submit" value="Submit Request" onclick="xhttp = submitRequest(); {this.changeTitle.bind(this)};"/>
			</form>
			</div>
        )
    }
});

ReactDOM.render(
    <FormField />,
    document.getElementById("entryform")
);
