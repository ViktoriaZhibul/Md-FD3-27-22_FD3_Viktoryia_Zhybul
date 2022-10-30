var InternetShop = React.createClass({

    displayName: "InternetShop",

    getDefaultProps: function() {
        return { 
            products: [{code: 0, name: "Продукт не найден", price: "-", count: 0, img: "Фото продукта отсутствует"}]
        }
    },
  
    propTypes: {
      shop: React.PropTypes.string.isRequired,
      products: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          code: React.PropTypes.number,
          name: React.PropTypes.string,
          count: React.PropTypes.number,
          img: React.PropTypes.string,
        })
      )
    },
  
    render: function() {
  
      var products = this.props.products.map((instance) => {
            return React.DOM.tr({ key: instance.code },
                React.DOM.td({ className: "table__td" },
                    React.DOM.img({ className: "table__img", src: instance.img, alt: instance.name },)),
                React.DOM.td({className: "table__td"}, instance.name),
                React.DOM.td({className: "table__td"}, instance.price),
                React.DOM.td({className: "table__td"}, instance.count),
            );
      })

      var theadArr = ["Описание товара", "Наименование товара", "Цена", "Количество"].map((instance) => {
        return React.DOM.td({ key: instance }, instance);
      })

      return React.DOM.table( {className: "table"}, 
        React.DOM.caption( {className:"table__caption"}, this.props.shop ),
        React.DOM.thead({ className: "table__head" },
            React.DOM.tr(null, theadArr)),
        React.DOM.tbody(null, products),
      );
    },
  
  });