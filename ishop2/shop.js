var InternetShop = React.createClass({

    displayName: "InternetShop",

    propTypes: {
      shop: React.PropTypes.string.isRequired,
      products: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          code: React.PropTypes.number.isRequired,
          name: React.PropTypes.string.isRequired,
          count: React.PropTypes.number.isRequired,
          img: React.PropTypes.string.isRequired,
          price: React.PropTypes.string.isRequired,
        })
      )
    },

    getInitialState: function() {
        return {
          currentProducts: this.props.products,
          selectedProductCode: null,
        };
      },

    setSelectedRow: function(code) {
        this.setState( {selectedProductCode:code} );
    },

    deleteProduct: function(code) {
        var newArr = this.state.currentProducts.filter((el) => el.code!=code);
        this.setState( {currentProducts: newArr})
    },
  
    render: function() {
      var currentProductsArr = this.state.currentProducts.map( v =>
          React.createElement(Product, {key:v.code,
              name:v.name,
              count:v.count,
              code:v.code, 
              img:v.img,
              price:v.price,
              selectedProductCode:this.state.selectedProductCode,
              selectedRow: this.setSelectedRow,
              deletedProduct: this.deleteProduct,
          })
      );

      var theadArr = ["Описание товара", "Наименование товара", "Цена", "Количество", "Удалить товар"].map((instance) => {
        return React.DOM.td({ key: instance }, instance);
      })

      return React.DOM.table( {className: "table"}, 
        React.DOM.caption( {className:"table__caption"}, this.props.shop ),
        React.DOM.thead({ className: "table__head" },
            React.DOM.tr(null, theadArr)),
        React.DOM.tbody(null, currentProductsArr),
      );
    },
  
  });