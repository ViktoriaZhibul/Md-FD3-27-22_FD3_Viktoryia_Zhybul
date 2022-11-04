var Filter = React.createClass({

    displayName: "Filter",

    getInitialState: function() {
        return { 
          isSorted: false,
          filterText: "",
          currentWordsArr: this.props.words
        };
    },

    getCurrentWordsArray: function() {
        let copyArrayWords = this.props.words.slice();
        if (this.state.filterText)
            copyArrayWords = copyArrayWords.filter(words => words.includes(this.state.filterText));
        if (this.state.isSorted)
            copyArrayWords.sort();
        this.setState({currentWordsArr: copyArrayWords})
    },

    sortChanged: function(event) {
        this.setState({isSorted: event.target.checked}, this.getCurrentWordsArray);
    },
    
    filterChanged: function(event) {
        this.setState({filterText: event.target.value}, this.getCurrentWordsArray);
    },

    reset: function() {
        this.setState({filterText: "", isSorted: false}, this.getCurrentWordsArray);
    },

    render: function() {
        return React.DOM.div({className: "filter-wrapper"}, 
            React.DOM.input({type: "checkbox",
                checked: this.state.isSorted,
                onClick: this.sortChanged,
            }),
            React.DOM.input( {type: "text",
                value: this.state.filterText,
                onChange: this.filterChanged
            }),
            React.DOM.input( {type: "button",
                value: "reset",
                className: "filter-button",
                onClick: this.reset,
            }),
            React.DOM.textarea ( {value: this.state.currentWordsArr.join("\n"), readOnly: true, className: "filter-texarea"})
        )
    },
  
  });