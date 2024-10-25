export const initialState = {
   users: [
      {
         id: 1,
         name: "Badal",
      },
      {
         id: 2,
         name: "Alam",
      },
      {
         id: 3,
         name: "Khan",
      },
      {
         id: 4,
         name: "Rahim",
      },
   ],
};

export const reducer = (state, action) => {
   switch (action.type) {
      case "ADD":
         return {
            ...state,
            users: [...state.users, action.payload],
         };
      case "DELETE":
         const filteredUser = state.users.filter(
            (user) => user.id !== action.payload
         );
         return {
            ...state,
            users: filteredUser,
         };
      case "SEARCH":
         const searchFilter = state.users.filter((user) =>
            user.name.toLowerCase().startsWith(action.payload)
         );

         return {
            ...state,
            users: searchFilter,
         };

      default:
         return state;
   }
};
