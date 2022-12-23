/* action = {
    type: "CREATE_EVENT",
    title: "20202東京オリンピックのお知らせ",
    body: "2020年に東京でオリンピックを開催します。つきましては・・・・・"
}
state = []
state =[
        {id: 1,
        title:タイトル1,
        body:ボディ1
    },
        {id: 2,
        title:タイトル2,
        body:ボディ2
    },
        {id: 3,
        title:タイトル3,
        body:ボディ3
    },
]

*/

const events = (state = [], action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const event = { title: action.title, body: action.body };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];

    case "DELETE_EVENT":
      return state.filter((event) => event.id !== action.id);
    case "DELETE_ALL_EVENTS":
      return [];
    default:
      return state;
  }
};

export default events;
