import { getAuthority } from './authority';

describe('getAuthority should be strong', () => {
  // Admin Access Right
  it('empty', () => {
    expect(getAuthority(null)).toEqual(['admin']); // default value
  });
  // Authority Guest added
  it('empty', () => {
    expect(getAuthority(null)).toEqual(['guest']); // default value
  });
  it('string', () => {
    expect(getAuthority('admin')).toEqual(['admin']);
  });
  it('array with double quotes', () => {
    expect(getAuthority('"admin"')).toEqual(['admin']);
  });
  it('array with single item', () => {
    expect(getAuthority('["admin"]')).toEqual(['admin']);
  });
  // Access Rights of the system
  it('array with multiple items', () => {
    expect(getAuthority('["admin", "guest"]')).toEqual(['admin', 'guest']);
  });
});
