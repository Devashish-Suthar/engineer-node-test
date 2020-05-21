const ERROR_LITERALS = {
  USER: {
    CREATE_USER: {
      SUCCESS: 'User created successfully!',
      ALREADY_EXISTS: 'Email already exists in database!',
      FAILURE: 'Unable to create user!',
    },
    GET_ALL_USERS: {
      SUCCESS: 'Users found successfully!',
    },
  },
  QUESTION: {
    CREATE_QUESTION: {
      SUCCESS: 'Question created successfully!',
      FAILURE: 'Unable to create question!',
    },
    UPDATE_QUESTION: {
      SUCCESS: 'Question updated successfully!',
      FAILURE: 'Unable to update question!',
    },
    DELETE_QUESTION: {
      SUCCESS: 'Question deleted successfully!',
      FAILURE: 'Unable to delete question!',
    },
    GET_QUESTION: {
      SUCCESS: 'Question found successfully!',
    },
  },
  ANSWER: {
    CREATE_ANSWER_BY_QUESTION: {
      SUCCESS: 'Answer added to question successfully!',
      FAILURE: 'Unable to add answers!',
    },
    UPDATE_ANSWER_BY_QUESTION: {
      SUCCESS: 'Answer updated according to question successfully!',
      FAILURE: 'Unable to updated answers!',
    },
    GET_ANSWERS_BY_QUESTIONS: {
      SUCCESS: 'Answers found according to question!',
    },
    DELETE_ANSWER: {
      SUCCESS: 'Answer deleted successfully!',
      FAILURE: 'Unable to delete answers!',
    },
  },
  COMMENT: {
    CREATE_COMMENT: {
      SUCCESS: 'Comment added to question successfully!',
      FAILURE: 'Unable to add comment!',
    },
    UPDATE_COMMENT: {
      SUCCESS: 'Comment update to question successfully!',
      FAILURE: 'Unable to update comment!',
    },
    DELETE_COMMENT: {
      SUCCESS: 'Comment deleted successfully!',
      FAILURE: 'Unable to delete comment!',
    },
    GET_COMMENT_BY_QUESTION: {
      SUCCESS: 'Comment found according to question!',
    },
  },
  COMMON_MESSAGES: {
    NO_DATA_FOUND: 'No data found!',
    FAILURE_OPRATION: 'Failure operation!',
  },
  CATCH: {
    ERROR: 'Error occured!',
  },
};
module.exports = ERROR_LITERALS;
