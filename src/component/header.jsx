import React, { Component } from 'react';
import "../css/header.css";


class Header extends Component {

     generateCarouselItem =  () => {
         let items = []
         for (let i = 1; i < 4; i++) {
             items.push(
            <div className={i === 1 ? 'carousel-item active' : 'carousel-item'}>
                <img id={`img${i}`} />
                <div className="img-text">
                    <h1>Alex Library</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                        minus minima similique error ad inventore quia perferendis
                        corrupti, eligendi doloribus.
                    </p>
                </div>
                </div>
             )
         }
         return items;
     } 

     

       
    render() {
        return (
            <React.Fragment>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    {this.generateCarouselItem()}
                 
                </div>
                {/* next and previous buttons  */}
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" />
                </button>

            </div>
            </React.Fragment>
        );
    }

}

export default Header;