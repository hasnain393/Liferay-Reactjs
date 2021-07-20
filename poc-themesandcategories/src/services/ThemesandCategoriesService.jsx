import axios from 'axios'

const THEMES_CATEGORIES_BASE_URL = "http://localhost:3000/themes";

class ThemesAndCategoryService {
    getThemesAndCategorys(){
        let axiosLiferay = axios.create({
            baseURL: 'http://localhost:8080/o/themesandcategoreis',
            timeout: 15000,
            auth: {
                username: 'test',	//'service.user@liferay.com',
                password: 'test'
            },
            //headers: {'Content-Type': 'application/json'}
        });

        return axiosLiferay;



     //   return axios.get(THEMES_CATEGORIES_BASE_URL);
    }
}

export default new ThemesAndCategoryService