const state = () => ({
    items: [],
    checkoutStatus: null
})

const getters = {

}
const actions = {
    attact: (souce, dest) => {
        souce.affect(dest);
    },
    use: (source, dest) => {
        source.affect(dest);
    }

}
const mutations = {

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}