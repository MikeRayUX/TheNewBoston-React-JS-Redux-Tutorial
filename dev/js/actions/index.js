// action creator
export const selectUser = user => {
  console.log(user.first);
  return {
    // type is the action
    type: "USER_SELECTED",
    payload: user
  };
};
