import React, { Component } from 'react';
import './People.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('../../../images', false, /\.(png|jpe?g|svg)$/));
  
class Joanna extends Component {
    render () {
        var imageNumbers = [1,2,3,4,5];
        var imagesHtml = imageNumbers.map(function(number){
            return <img src={images['Joanna ('+ number +').jpg']} />;
          })

        return (
            <div>
                <h1>Joanna is the best girlfriend ever!!!</h1>
                {imagesHtml}
            </div>
        );
    }
}


export default Joanna;
