export const initialState = {count: 0,myLimit:10,arr:[{a:30}],my:{},kk:[]};
export const ACTION = [{type:"increment"},{type:"decrement"},{type:"my"}]

export function Neha(state, action) {
  switch (action.type) {
    case 'increment':
      return {...state,count: state.count + 1};
    case 'decrement':
      return {...state,count: state.count - 1};
    case 'my':
        return {...state,arr:[{a:78}]}
    default:
      throw new Error();
  }
}


export function Nehaa(state, action) {
    switch (action.type) {
      case 'increment':
        return {...state,count: state.count + 1};
      case 'decrement':
        return {...state,count: state.count - 1};
      case 'my':
          return {...state,arr:[{a:78}],kk:action.data}
      default:
        throw new Error();
    }
  }
  


