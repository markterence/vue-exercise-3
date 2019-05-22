export const state = {
  termMsg: [...Array(10)].map((e, i) => `Line ${i}`)
};

export const getters = {
  GET_RAW_TERM_MESSAGES: state => state.termMsg,
  GET_TERM_MESSAGES: state => state.termMsg.join("<br>")
};

export const mutations = {
  setTermMessage(state, { message }) {
    state.termMsg.push(message);
  }
};

export const action = {};
