'use strict'
const Userappointments = use('App/Models/Userappointment')
class UserappointmentController {

  async index ({request}) {
    let {page, perPage} = request.all()
    return Userappointments.query().paginate(page, perPage)
  }

  async store ({ request, response }){
    const dados = request.only(['usuario_id', 'barber_id', 'ap_datetime'])
    return await Userappointments.create(dados)
  } 

  async show ({params, request, response}) {
    return await Userappointments.findOrFail(params.id);
  }

  async update ({params, request, response}) {

    const Userappointment = await Userappointment.findOrFail(params.id)

    const dados = request.only (['usuario_id', 'barber_id', 'ap_datetime'])
    

    Userappointment.merge(dados)
    Userappointment.save()
  }

  async destroy ({ params, request, response }) {
    const userappointment = await Userappointment.findOrFail(params.id)
    return await userappointment.delete();
  }

}
module.exports = UserappointmentController
