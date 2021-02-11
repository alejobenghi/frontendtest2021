import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASE_URL
export async function getItemsFront(searchText){
    try {
   //     console.log(searchText)
        const response = await axios({
            url: `${baseUrl}/items?q=${searchText}`,
            method: 'GET'
        })
        console.log(response)
        return response
        
    } catch (error) {
        console.log(error)
    }
}

export async function getItemByIdFront(id){
    try {
        const response = await axios({
            url: `${baseUrl}/items/${id}`,
            method: 'GET'
        })
        console.log(response)
        return response
        
    } catch (error) {
        console.log(error)
    }
}


export async function getCategoryByIdFront(id){
    try {
        const response = await axios({
            url: `https://api.mercadolibre.com/categories/${id}`,
            method: 'GET'
        })
        console.log(response)
        return response
        
    } catch (error) {
        console.log(error)
    }
}