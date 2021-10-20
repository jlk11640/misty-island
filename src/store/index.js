import { createStore } from 'vuex'

export default createStore({
    state: {
        userInfo: {
            userName: '',
            score: 0,
            date: ''
        },
        userName: "无名之人",
        score: 0,
        stage: 1,
        level: 1,
        mapInfo: {

        },
        charcter: {
            id: '',
            name: '',
            life: 0,
            currLife: 0,
            cost: 0,
            money: 0,
            deck: [],
            items: []
        }
    },
    getters: {
        getCurrentLife(state) {
            return state.charcter.currLife;
        },
        getUserName: (state) => { return state.charcter.userName },
        getLife: (state) => { return state.charcter.life },
        getMoney: (state) => { state.charcter.money },
        getLevel: (state) => { return state.level; }
    },
    mutations: {
        changeCharcter(state, paylod) {
            state.charcter.id = paylod.id;
            state.charcter.name = paylod.name;
            state.charcter.life = paylod.life;
            state.charcter.cost = paylod.cost;
            state.charcter.money = paylod.money;
            state.charcter.deck = paylod.deck;
            state.charcter.items = paylod.items;
            state.charcter.currLife = paylod.currLife;
        },
        chageUserName(state, userName) {
            state.userName = userName;
        },
        changeScore(state, score) {
            if (score > state.score) {
                state.score = score;
            }
        },
        changeCurrentLief(state, currLife) {
            state.charcter.currLife = currLife;
        }
    },
    actions: {

    },
    modules: {
    }
})
