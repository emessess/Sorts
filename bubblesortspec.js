describe('Bubble Sort', function(){
  beforeAll(function () {
    spyOn(swap,'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });
  it('how many swaps', function () {
    swap([2,1]);
    expect(swap.calls.count()).toEqual(1);
  });
  it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles an array of one element', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
      });
      it('handles an array of more elements', function(){
        expect( bubbleSort([1, 3, 4, 2]) ).toEqual( [1, 2, 3, 4] );
      });
  });
  
 