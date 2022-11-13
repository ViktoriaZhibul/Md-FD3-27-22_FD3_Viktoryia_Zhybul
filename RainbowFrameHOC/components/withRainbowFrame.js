import React from 'react';

function withRainbowFrame(colors) {
    return function(Comp) {
      return (props) => {
        const getReduce = (children, current) => {
          return (
              <div style={{ border: "solid 10px " + current, padding: "5px" }}>
                  {children}
              </div>
          );
      }
  
      const rainbowFrame = colors.reduce(getReduce, <Comp {...props} />);
  
      return (
          <div style={{ textAlign: 'center', margin: '20px auto' }}>
              {rainbowFrame}
          </div>
      )
    };
}};


export { withRainbowFrame }
