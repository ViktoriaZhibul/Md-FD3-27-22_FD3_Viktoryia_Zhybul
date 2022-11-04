var Product = React.createClass({

    displayName: "Product",

    propTypes: {
        code: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        count: React.PropTypes.number.isRequired,
        img: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        selectedProductCode: React.PropTypes.number,
        selectedRow:React.PropTypes.func.isRequired,
        deletedProduct:React.PropTypes.func.isRequired,
    },

    getSelectedRow: function(event) {
        this.props.selectedRow(this.props.code);
    },

    deleteRow: function(event) {
        event.stopPropagation()
        var isDeleteConfirm = window.confirm("Вы действительно хотите удалить этот продукт?");
        if (isDeleteConfirm)
            this.props.deletedProduct(this.props.code);
    },
  
    render: function() {
        return React.DOM.tr( {className: this.props.selectedProductCode==this.props.code ? "selected__row" : null,
            key: this.props.code,
            onClick:this.getSelectedRow },
            React.DOM.td({ className: "table__td" },
                React.DOM.img({ className: "table__img", src: this.props.img, alt: this.props.name })
            ),
            React.DOM.td({className: "table__td"}, this.props.name),
            React.DOM.td({className: "table__td"}, this.props.price),
            React.DOM.td({className: "table__td"}, this.props.count),
            React.DOM.td({className: "table__td"}, 
                React.DOM.input({ className: "table__btn", type:"button", value: "Delete", onClick: this.deleteRow })
            ),
        );
    },
  
  });