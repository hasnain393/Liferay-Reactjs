import React, { Component } from 'react';
import {data} from '../data/db.js'

import ThemesAndCategoriesService from "../services/ThemesandCategoriesService.jsx";

class ThemesAndCategories extends Component {
    constructor() {
        super();
        this.state = {
          themes: [],
        };
      }
    componentDidMount(){
        ThemesAndCategoriesService.getThemesAndCategorys()
        .get('/getallfiles').then((response) => {
            this.setState({
              themes: response.data,
            });
          });
    }
    render() {
        return (
            <div>
                {console.log(this.state.themes)}
               { this.state.themes.map((image, i) => {
                    return ( 
                    <>
                               <h1>hello {i}</h1>
                                <img key={"http://localhost:8080/"+image.filePath} src={"http://localhost:8080/"+image.filePath} alt={image.filePath} aria-label={"http://localhost:8080/"+image.filePath} title={"http://localhost:8080/"+image.filePath}/>
                        
                            </>
                    )
                })
                }

            </div>
        
        );
    }
}

export default ThemesAndCategories;