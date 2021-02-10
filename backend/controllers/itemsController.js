//const { request } = require("express")
const request = require('request');
async function getItems(req,res){
    try {
        var url = `https://api.mercadolibre.com/sites/MLA/search?q=:${req.query.q}`
        request(url, function(error,response,body){
            var data=JSON.parse(body)
            
            var categories = []
            if(data.results.length >=4){
                dim = 4
            }else{
                dim = data.results.length
            }
            for(var i=0;i<dim;i++){
                if(!categories.includes(data.results[i].category_id)){
                    categories.push(data.results[i].category_id)
                }
            }
            

            var json = '{"author":{"name":"Alejo","lastname":"Benedetti Ghiglia"},'
            json +='   "categories":['
            if(categories.length > 0){
                categories.forEach(element => {
                    json +='"'+element +'",'
                })
                json = json.slice(0,-1)
            }
            
            json +='],'
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
                json += '"decimals":2'
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


async function getItemById(req,res){
    try {
        var url = `https://api.mercadolibre.com/items/${req.params.id}/description`
        request(url, function(error,response,body){
            var data=JSON.parse(body)
            var descri = data.plain_text
            descri = descri.replace(/\n/g,' ')
        
            descri = descri.replace(/"/g,' ')
            var url = `https://api.mercadolibre.com/items/${req.params.id}`
            request(url, function(error,response,body){
                var data=JSON.parse(body)
                

            
                var json = '{"author":{"name":"Alejo","lastname":"Benedetti Ghiglia"},'
            
                json +='"item":{'
                    json += '"id":'+'"'+data.id+'",'
                    json += '"title":'+'"'+data.title+'",'
                    json += '"price":{'
                    json += '"currency":"'+data.currency_id+'",'
                    json += '"amount":'+data.price+','
                    json += '"decimals":2'
                    json +='},'
                    json +='"picture":"'+data.pictures[0].url+'",'
                    json +='"condition":"",'
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