import ApiService from '../../services/api';

const abortController = new AbortController();
const abortSignal = abortController.signal;

const imagesContext = require.context('../../assets/images/', true);
const images = [
    {
        src: imagesContext('./curiosity.jpg').default,
        name: 'curiosity'
    },
    {
        src: imagesContext('./earth.jpg').default,
        name: 'earth'
    },
    {
        src: imagesContext('./keytar.jpg').default,
        name: 'keytar'
    },
    {
        src: imagesContext('./stupid.jpg').default,
        name: 'stupid'
    }
]

const getName = () => "Gadjit";
const getImages = () => images;
const getWeather = async() => ApiService.get("https://api.weather.gov/alerts/active?area=NY", abortSignal);

export default{
    getName: () => getName(),
    getImages: () => getImages(),
    getWeather: async() => getWeather(),
    imagesContext: imagesContext
}