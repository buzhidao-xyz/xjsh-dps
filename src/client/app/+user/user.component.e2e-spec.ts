describe('User', () => {

  beforeEach( () => {
    browser.get('/user');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-user h2')).getText()).toEqual('Features');
  });

});
