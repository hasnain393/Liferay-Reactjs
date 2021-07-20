import axios from 'axios'



class FavouriteLinksService {
    getFavouriteLinks(){
        let axiosLiferay = axios.create({
            baseURL: 'http://localhost:8080/api/jsonws/niip.favouritelinks',
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

export default new FavouriteLinksService