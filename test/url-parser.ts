import Url from '../ts/interfaces/url'
import filter from '../ts/url-parser'

describe('url parsing', () => {
  it('parses a simple request', () => {
    // we can expect that the return is of the Url type
    const parsed = filter('http://www.foo.com/bar');
    console.log(parsed)
    expect(parsed).toBeTruthy();
    // some of the attrs...
    expect(parsed.path).toBe('/bar')
    expect(parsed.protocol).toBe('http')
    expect(parsed.host).toBe('www.foo.com')
  })
})
