'use strict'
const Userfavorites = use('App/Models/Userfavorite')
class UserfavoriteController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Userfavorites.query().paginate(page, perPage)
  }

  async store ({ request, response }){
    const dados = request.only(['usuario_id','barber_id'])
    return await Userfavorite.create(dados) 
  } 
  
  async show ({params, request, response}) {
    return await Userfavorite.findOrFail(params.id);
  }

  async update ({params, request, response}) {

    const Userfavorite = await Userfavorite.findOrFail(params.id)

    const dados = request.only (['usuario_id', 'barber_id'])
    

    Userfavorite.merge(dados)
    Userfavorite.save()
  }

  async destroy ({ params, request, response }) {
    const userfavorite = await Userfavorite.findOrFail(params.id)
    return await userfavorite.delete();
  }

}

module.exports = UserfavoriteController
