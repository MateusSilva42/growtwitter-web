import React, { createContext, useContext, useReducer } from 'react';

const TweetContext = createContext();

const initialState = {
  tweets: [],
};

function tweetReducer(state, action) {
  switch (action.type) {
    case 'ADD_TWEET':
      return { ...state, tweets: [...state.tweets, action.payload] };
    default:
      return state;
  }
}

export function TweetProvider({ children }) {
  const [state, dispatch] = useReducer(tweetReducer, initialState);

  return (
    <TweetContext.Provider value={{ state, dispatch }}>
      {children}
    </TweetContext.Provider>
  );
}

export function useTweet() {
  return useContext(TweetContext);
}
