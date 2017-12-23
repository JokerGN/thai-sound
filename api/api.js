import Axios from 'axios'

export const userData = (payload) => {
  return Axios({
    method: 'POST',
    url: 'http://localhost:3001/auth/login',
    data: payload
  })
  .then(function (res) {
    return res.data
  })
}
