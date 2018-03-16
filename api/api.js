import Axios from 'axios'

const serverUrl = 'http://thai-sound-api.chaluline.com'

export const userData = (payload) => {
  return Axios({
    method: 'POST',
    url: `${serverUrl}/auth/login`,
    data: payload
  })
  .then(function (res) {
    return res.data
  })
}

export const registerData = (payload) => {
  return Axios({
    method: 'POST',
    url: `${serverUrl}/auth/register`,
    data: payload
  })
  .then(function (res) {
    return res.data
  })
}

export const getUserData = () => {
  return Axios({
    method: 'GET',
    url: `${serverUrl}/user/showall`
  })
  .then(function (res) {
    return res.data
  })
}

export const changeStatusData = (payload) => {
  return Axios({
    method: 'POST',
    url: `${serverUrl}/user/change_status`,
    data: payload
  })
  .then(function (res) {
    return res.data
  })
}

export const getSoundData = () => {
  return Axios({
    method: 'GET',
    url: `${serverUrl}/sound/showall`
  })
  .then(function (res) {
    return res.data
  })
}

export const searchSoundData = (payload) => {
  return Axios({
    method: 'POST',
    url: `${serverUrl}/sound/search_sound`,
    data: payload
  })
  .then(function (res) {
    return res.data
  })
}

export const getTypeData = () => {
  return Axios({
    method: 'GET',
    url: `${serverUrl}/type/get_type`
  })
  .then(function (res) {
    return res.data
  })
}

export const getFeelingData = (payload) => {
  return Axios({
    method: 'POST',
    url: `${serverUrl}/feeling/get_feeling`,
    data: payload
  })
  .then(function (res) {
    return res.data
  })
}

export const addSoundData = (payload) => {
  return Axios({
    method: 'POST',
    url: `${serverUrl}/sound/add_sound`,
    data: payload,
    headers: {
      'Content-Type': undefined
    }
  })
  .then(function (res) {
    return res.data
  })
}

export const updateSoundData = (payload) => {
  return Axios({
    method: 'POST',
    url: `${serverUrl}/sound/update`,
    data: payload
  })
  .then(function (res) {
    return res.data
  })
}

export const deleteSoundData = (payload) => {
  return Axios({
    method: 'POST',
    url: `${serverUrl}/sound/delete_sound`,
    data: payload
  })
  .then(function (res) {
    return res.data
  })
}

export const getSoundById = (payload) => {
  return Axios({
    method: 'POST',
    url: `${serverUrl}/sound/get_sound_id`,
    data: payload
  })
  .then(function (res) {
    return res.data
  })
}
