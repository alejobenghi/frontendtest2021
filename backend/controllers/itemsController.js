//const { request } = require("express")
const request = require('request');

//Consulta API de mercado libre de resultados de busqueda y arma API segun formato solicitado
async function getItems(req,res){
    try {
        var url = `https://api.mercadolibre.com/sites/MLA/search?q=:${req.query.q}`
        request(url, function(error,response,body){
            var data=JSON.parse(body)
            
            

            //Si la cantidad de resultados de busqueda es mayor a 4 se limita a 4,
            // sino se muestran la cantidad de resultados original ej: 1, 2 o 3
            if(data.results.length >=4){
                dim = 4
            }else{
                dim = data.results.length
            }

            //se arma el array con todas las categorias incluidas en el resultado de busqueda
            //no se incluyen aquellas que ya se encuentran en el array
            var categories = []
            for(var i=0;i<dim;i++){
                if(!categories.includes(data.results[i].category_id)){
                    categories.push(data.results[i].category_id)
                }
            }
            

            var json = '{"author":{"name":"Alejo","lastname":"Benedetti Ghiglia"},'
            json +='   "categories":[{'
            if(categories.length > 0){
                categories.forEach(element => {
                    json +='"category_id":"'+element +'",'
                })
                json = json.slice(0,-1)
            }
            
            json +='}],'
            json +='"items":['
            for(var i=0;i<dim;i++){
                var currency_id
                var amount
                if (typeof data.results[i].prices.prices !== 'undefined') {
                    currency_id =data.results[i].prices.prices[0].currency_id
                    amount ="$  " + data.results[i].prices.prices[0].amount
                }else{
                    currency_id = ''
                    amount = ''
                    
                }
                json +='{'
                json += '"id":'+'"'+data.results[i].id+'",'
                json += '"title":'+'"'+data.results[i].title+'",'
                json += '"price":{'
                json += '"currency":"'+currency_id+'",'
                json += '"amount":"'+amount+'",'
                json += '"decimals":"00"'
                json +='},'
                json +='"picture":"'+data.results[i].thumbnail+'",'
                json +='"condition":"",'
                json +='"free_shipping":'+data.results[i].shipping.free_shipping
                json +='},'
                
            }
            if(dim>=1){
                json = json.slice(0,-1)
            }
            json +=']'
            json +='}'
            res.status(200).send(JSON.parse(json))
            //res.status(200).send(data)
            
        })
        
    } catch (e) {
        res.status(500).send({message:e.message})
    }
}


//Consulta API de mercado libre de detalle de producto y arma API segun formato solicitado
async function getItemById(req,res){
    try {
        //en primer lugar consulta api con descripcion del producto
        var url = `https://api.mercadolibre.com/items/${req.params.id}/description`
        request(url, function(error,response,body){
            var data=JSON.parse(body)
            var descri = data.plain_text
            descri = descri.replace(/\n/g,' ')
            descri = descri.replace(/º/g,'')
        
            descri = descri.replace(/\r/g,'')
            descri = descri.replace(/"/g,' ')
            
            //luego consulta api de detalle de producto
            var url = `https://api.mercadolibre.com/items/${req.params.id}`
            request(url, function(error,response,body){
                var data=JSON.parse(body)
                var condition
                if(data.condition==="new"){
                    condition = "Nuevo"
                }else{
                    condition = "Usado"
                }
            
               
                var json = '{"author":{"name":"Alejo","lastname":"Benedetti Ghiglia"},'
            
                json +='"item":{'
                    json += '"id":'+'"'+data.id+'",'
                    json += '"title":'+'"'+data.title+'",'
                    json += '"category_id":'+'"'+data.category_id+'",'
                    json += '"price":{'
                    json += '"currency":"'+data.currency_id+'",'
                    json += '"amount":"'+data.price.toLocaleString()+'",'
                    json += '"decimals":"00"'
                    json +='},'
                    json +='"picture":"'+data.pictures[0].url+'",'
                    json +='"condition":"'+condition+'",'
                    json +='"free_shipping":'+data.shipping.free_shipping+','
                    json += '"sold_quantity":'+data.sold_quantity+','
                    json += '"description":"'+ descri+'"'
                    json +='}'
            
                json +='}'
                res.status(200).send(JSON.parse(json))
                //res.status(200).send(data)

            })
        })

        
        
    } catch (e) {
        res.status(500).send({message:e.message})
    }
}

module.exports = {
    getItems, getItemById
}