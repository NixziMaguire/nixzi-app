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
            return <img src={images['Joanna ('+ number +').jpg']} alt={"Hey"} />;
          })

        return (
            <div>
                <h1>Joanna is the best girlfriend ever!!!</h1>
                <iframe title="Mad Murloc Discord" src="https://discordapp.com/widget?id=332863577121619968&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
            </div>
        );
    }
}


export default Joanna;
