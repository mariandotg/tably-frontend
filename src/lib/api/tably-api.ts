import api from './config/axios-config'

export const TablyAPI = {
  login: async function (email: string, password: string) {
    const response = await api.post(`/auth/login`, {
      email,
      password,
    })

    // returning the product returned by the API
    return response
  },
  getTabGroups: async function (token: string) {
    const response = await api.get(`/tab-groups`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    // returning the product returned by the API
    return response
  },
}
