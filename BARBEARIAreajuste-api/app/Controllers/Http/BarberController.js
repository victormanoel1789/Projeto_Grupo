'use strict'
const barbers = use('App/Models/barber')
class BarberController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return barbers.query().paginate(page, perPage)
  }
  async store ({ request, response }){
    const dados = request.only('name', 'avatar', 'stars', 'latitude', 'longitude')
    return await barbers.create(dados)
  } 

  async show ({params, request, response}) {
    return await Barber.findOrFail(params.id);
  }
  async update ({params, request, response}) {

    const Barber = await Barber.findOrFail(params.id)

    const dados = request.only (['name', 'avatar', 'stars', 'latitude', 'longitude'])
    

    Barber.merge(dados)
    Barber.save()
  }

  async destroy ({ params, request, response }) {
    const barber = await Barber.findOrFail(params.id)
    return await barber.delete();
  }


}

module.exports = BarberController
