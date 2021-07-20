import React, { Component } from 'react';


import FavouriteLinksService from "../services/FavouriteLinksService.jsx";

class FavouriteLinks extends Component {
    constructor() {
        super();
        this.state = {
          favourites: [],
        };
      }
    componentDidMount(){
        FavouriteLinksService.getFavouriteLinks()
        .get('/find-all-favourite-links').then((response) => {
            this.setState({
              favourites: response.data,
            });
          });
    }
    render() {
        return (
            <div>
                {console.log(this.state.themes)}
               { this.state.favourites.map((items, i) => {
                    return ( 
                    <>
                               
							   <p>{items.title}</p>
							  <p>{items.url}</p>
                             
                            </>
                    )
                })
                }

            </div>
        
        );
    }
}

export default FavouriteLinks;