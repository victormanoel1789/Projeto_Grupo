'use strict'
const Barberavailabilitys = use('App/Models/Barberavailability')
class BarberavailabilityController {
  async index ({request}) {
    let {page, perPage} = request.all()
    return Barberavailabilitys.query().paginate(page, perPage)
  }

  async store ({ request, response }){
    const dados = request.only(['barber_id', 'weekday', 'hours'])
    return await Barberavailabilitys.create(dados)
  } 

  async show ({params, request, response}) {
    return await Barberavailabilitys.findOrFail(params.id);
  }


  async update ({params, request, response}) {

    const Barberavailability = await Barberavailability.findOrFail(params.id)

    const dados = request.only (['barber_id', 'weekday', 'hours'])
    

    Barberavailability.merge(dados)
    Barberavailability.save()
  }

  async destroy ({ params, request, response }) {
    const barberavailability = await Barberavailability.findOrFail(params.id)
    return await barberavailability.delete();

  }
}

module.exports = BarberavailabilityController
