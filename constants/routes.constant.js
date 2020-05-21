const ROUTES = {
  USER: {
    GET_ALL_USERS: {
      URL: '/users',
    },
  },
  QUESTION: {
    CREATE_QUESTION: {
      URL: '/questions',
    },
    UPDATE_QUESTION: {
      URL: '/questions',
    },
    GET_ALL_QUESTIONS: {
      URL: '/questions',
    },
  },
  ANSWER: {
    GET_ANSWERS_BY_QUESTION: {
      URL: '/questions/:questionId/answers',
    },
  },
};
module.exports = ROUTES;
