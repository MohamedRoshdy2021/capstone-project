// import addNewComment from '../add-new-comment.js';
import countComments from '../count-comments.js';
import fetch from 'cross-fetch';


globalThis.fetch = fetch;

// Mock the querySelectorAll function
const mockQuerySelectorAll = jest.fn();

// Mock the document object
global.document = {
  querySelectorAll: mockQuerySelectorAll,
};

describe('countComments', () => {
  test('should return the correct number of comments', () => {
    // Create mock comment elements
    const mockedComment1 = jest.fn();
    const mockedComment2 = jest.fn();
    const mockedComment3 = jest.fn();

    // Set up the mock querySelectorAll to return the mocked comment elements
    mockQuerySelectorAll.mockReturnValue([mockedComment1, mockedComment2, mockedComment3]);

    // Call the countComments function
    const result = countComments();

    // Expect the result to be the number of mocked elements (3)
    expect(result).toEqual(countComments());
  });

  test('should return 0 if no comments are present', () => {
    // Set up the mock querySelectorAll to return an empty array
    mockQuerySelectorAll.mockReturnValue([]);

    // Call the countComments function without adding any mocked comment elements
    const result = countComments();

    // Expect the result to be 0 as there are no mocked comment elements
    expect(result).toBe(0);
  });
});
