// export default function() {
//   return [
//     {title: "test1"},
//     {title: "test2"},
//     {title: "text3"}
//   ]
// }

export default function(state = [], action) {
  switch(action.type) {
    case 'FETCH_VIDEO':
      return action.payload;
  }
  return state
}
