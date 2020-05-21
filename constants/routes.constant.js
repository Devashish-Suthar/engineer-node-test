const ROUTES = {
  USER: {
    CREATE_USER: {
      URL: '/users',
    },
    GET_ALL_USERS: {
      URL: '/users',
    },
  },
  QUESTION: {
    CREATE_QUESTION: {
      URL: '/questions',
    },
    UPDATE_QUESTION: {
      URL: '/questions/:questionId',
    },
    DELETE_QUESTION: {
      URL: '/questions/:questionId',
    },
    GET_ALL_QUESTIONS: {
      URL: '/questions',
    },
    GET_QUESTION: {
      URL: '/questions/:questionId',
    },
  },
  ANSWER: {
    CREATE_ANSWER_BY_QUESTION: {
      URL: '/answers',
    },
    UPDATE_ANSWER_BY_QUESTION: {
      URL: '/answers/:answerId',
    },
    DELETE_ANSWER: {
      URL: '/answers/:answerId',
    },
    GET_ANSWERS_BY_QUESTION: {
      URL: '/questions/:questionId/answers',
    },
  },
  COMMENT: {
    CREATE_COMMENT: {
      URL: '/comments',
    },
    UPDATE_COMMENT: {
      URL: '/comments/:commentId',
    },
    DELETE_COMMENT: {
      URL: '/comments/:commentId',
    },
    GET_COMMENTS_BY_QUESTION: {
      URL: '/questions/:questionId/comments',
    },
  },
};
module.exports = ROUTES;
