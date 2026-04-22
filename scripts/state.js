const state = {
  hospitals: [],
  emergencyType: null
};

function setState(key, value) {
  state[key] = value;
}

function getState(key) {
  return state[key];
}