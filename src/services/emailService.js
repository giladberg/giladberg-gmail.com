import HttpService from './httpService'

export default {
    sendEmail
}

function sendEmail(email) {
    return HttpService.post('email',email)
}