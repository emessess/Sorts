describe('Bubble Sort', function() {
  // beforeAll(function () {
  //   spyOn(swap,'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  // });

  // it('how many swaps', function () {
  //   swap([2,1]);
  //   expect(swap.calls.count()).toEqual(1);
  // });

  it('handles an empty array', function() {
      expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array of one element', function() {
    expect( bubbleSort([1]) ).toEqual( [1] );
  });

  it('handles an array of more elements', function() {
    expect( bubbleSort([1, 3, 4, 2]) ).toEqual( [1, 2, 3, 4] );
  });

  it ('compares the expected number of times', function() {
    spyOn(window, 'inOrder').and.callThrough();
    bubbleSort([4, 6, 5, 1]);
    expect(inOrder.calls.count()).toEqual(10);
  });

  it ('swaps the expected number of times', function(){
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([4, 6, 5, 1]);
    expect(swap.calls.count()).toEqual(4);
  });

});
  
 