import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASE_URL

//Obtiene Resultado de Items de API Endpoint de BACKEND
export async function getItemsFront(searchText){
    try {
        const response = await axios({
            url: `${baseUrl}/items?q=${searchText}`,
            method: 'GET'
        })
        return response
        
    } catch (error) {
        console.log(error)
    }
}


//Obtiene Item detail de API Endpoint de BACKEND
export async function getItemByIdFront(id){
    try {
        const response = await axios({
            url: `${baseUrl}/items/${id}`,
            method: 'GET'
        })
        return response
        
    } catch (error) {
        console.log(error)
    }
}


//Obtiene detalles de categoria de API de Mercado Libre
export async function getCategoryByIdFront(id){
    try {
        const response = await axios({
            url: `https://api.mercadolibre.com/categories/${id}`,
            method: 'GET'
        })
        return response
        
    } catch (error) {
        console.log(error)
    }
}