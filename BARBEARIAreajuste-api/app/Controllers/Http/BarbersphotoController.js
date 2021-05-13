'use strict'
const Barbersphotos = use('App/Models/Barbersphoto')
class BarbersphotoController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Barbersphotos.query().paginate(page, perPage)
  }

  async store ({ request, response }){
    const dados = request.only(['barber_id', 'url'])
    return await Barbersphotos.create(dados)
  } 

  async show ({params, request, response}) {
    return await Barbersphoto.findOrFail(params.id);
  }
  async update ({params, request, response}) {

    const Barbersphoto = await Barbersphoto.findOrFail(params.id)

    const dados = request.only (['barber_id', 'url'])
    

    Barbersphoto.merge(dados)
    Barbersphoto.save()
  }

  async destroy ({ params, request, response }) {
    const barbersphoto = await Barbersphoto.findOrFail(params.id)
    return await barbersphoto.delete();
  }

}

module.exports = BarbersphotoController
