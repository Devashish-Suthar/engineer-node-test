const ERROR_LITERALS = {
  USER: {
    CREATE_USER: {
      SUCCESS: 'User created successfully!',
      FAILURE: 'Unable to create user!',
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
  },
  ANSWER: {
    CREATE_ANSWER: {
      SUCCESS: 'Answer added to question successfully!',
      FAILURE: 'Unable to add answers!',
    },
  },
  COMMENT: {
    CREATE_COMMENT: {
      SUCCESS: 'Comment added to question successfully!',
      FAILURE: 'Unable to add comment!',
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
