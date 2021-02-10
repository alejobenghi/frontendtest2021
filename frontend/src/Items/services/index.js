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
   //     console.log(searchText)
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