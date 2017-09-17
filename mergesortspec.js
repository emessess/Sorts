describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]])
  });
  it('is able to split an odd-length array into two halves', function() {
      expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]])
    });
});

describe('Merge Function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
      expect(merge([1,2],[3,4,5])).toEqual([1,2,3,4,5])
  });
});

describe('Mergesort Function', function(){
  it('is able to sort an array', function(){
      expect( mergeSort([3, 1, 7, 2, 9, 6, 11, 8]) ).toEqual([1, 2, 3, 6, 7, 8, 9, 11])
  });
});