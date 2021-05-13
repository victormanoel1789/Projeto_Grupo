'use strict'
const Barberreviews = use('App/Models/Barberreview')
class BarberreviewController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Barberreviews.query().paginate(page, perPage)
  }
  async store ({ request, response }){
    const dados = request.only(['barber_id', 'rate'])
    return await Barberreviews.create(dados)
  } 

  async show ({params, request, response}) {
    return await Barberreviews.findOrFail(params.id);
  }
  async update ({params, request, response}) {

    const Barberreview = await Barberreview.findOrFail(params.id)

    const dados = request.only (['barber_id', 'rate'])
    

    Barberreview.merge(dados)
    Barberreview.save()
  }

  async destroy ({ params, request, response }) {
    const barberreview = await Barberreview.findOrFail(params.id)
    return await barberreview.delete();
  }

}

module.exports = BarberreviewController
