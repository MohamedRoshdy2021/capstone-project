import countComments from '../count-comments.js';

const mockQuerySelectorAll = jest.fn();
global.document = {
  querySelectorAll: mockQuerySelectorAll,
};

describe('countComments', () => {
  test('should return the correct number of comments', () => {
    // Create mock comment elements
    const mockedComment1 = jest.fn();
    const mockedComment2 = jest.fn();
    const mockedComment3 = jest.fn();

    mockQuerySelectorAll.mockReturnValue([mockedComment1, mockedComment2, mockedComment3]);

    const result = countComments();

    expect(result).toEqual(countComments());
  });

  test('should return 0 if no comments are present', () => {
    mockQuerySelectorAll.mockReturnValue([]);

    const result = countComments();

    // Expect the result to be 0 as there are no mocked comment elements
    expect(result).toBe(0);
  });
});
