describe('Object.fromEntries behavior', () => {
  test('should convert number keys to strings', () => {
    const input = [[6, 'number-value']];
    const result = Object.fromEntries(input);
    expect(result['6']).toBe('number-value');
    expect(result[6]).toBe('number-value'); // This should also work due to JavaScript's loose key access
  });
});
