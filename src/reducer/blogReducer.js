export const initialState = {
  blogs: [
    {
      name: "Blog 1",
      author: "Parth",
      id: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum risus diam, quis semper dolor consectetur sed. In sodales ac est eget pretium. Maecenas volutpat convallis ex quis laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse iaculis consequat suscipit. Curabitur aliquam sapien et faucibus varius. In eget dolor vel arcu tempus cursus ac nec augue. Nunc id ligula eu massa sagittis dignissim vel sit amet nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec cursus rhoncus imperdiet. Mauris volutpat congue sem a blandit. Donec id urna efficitur ligula.",
      liked: false
    },
    {
      name: "Blog 2",
      author: "Parth",
      id: 2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum risus diam, quis semper dolor consectetur sed. In sodales ac est eget pretium. Maecenas volutpat convallis ex quis laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse iaculis consequat suscipit. Curabitur aliquam sapien et faucibus varius. In eget dolor vel arcu tempus cursus ac nec augue. Nunc id ligula eu massa sagittis dignissim vel sit amet nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec cursus rhoncus imperdiet. Mauris volutpat congue sem a blandit. Donec id urna efficitur ligula.",
      liked: false
    },
    {
      name: "Blog 3",
      author: "Parth",
      id: 3,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum risus diam, quis semper dolor consectetur sed. In sodales ac est eget pretium. Maecenas volutpat convallis ex quis laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse iaculis consequat suscipit. Curabitur aliquam sapien et faucibus varius. In eget dolor vel arcu tempus cursus ac nec augue. Nunc id ligula eu massa sagittis dignissim vel sit amet nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec cursus rhoncus imperdiet. Mauris volutpat congue sem a blandit. Donec id urna efficitur ligula.",
      liked: false
    }
  ],
  blogCount: 3
};

export const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return {
        blogs: [
          ...state.blogs,
          {
            name: action.payload.name,
            author: action.payload.author,
            content: action.payload.content,
            liked: action.payload.liked
          }
        ],
        blogCount: state.blogCount + 1
      };

    default:
      return state;
  }
};
