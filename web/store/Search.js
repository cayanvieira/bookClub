export const state = () => ({})

export const getters = {}

export const actions = { 
   
  fetch(_,word,type) {
    return this.$axios.get(`/search/${word}`,type
    )
    .then((response)=> response.data)
  },
}

export const mutations = {}