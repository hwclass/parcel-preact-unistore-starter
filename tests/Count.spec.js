import { h } from 'preact';
import render from 'preact-render-to-string';
import htmlLooksLike from 'html-looks-like';

const Count = () => (
  <p>0</p>
);

describe('Count', () => {
  it('has count', () => {
    const actual = render(<Count />);
    const expected = `
      <p>0</p>
    `;

    htmlLooksLike(actual, expected);
  });
});