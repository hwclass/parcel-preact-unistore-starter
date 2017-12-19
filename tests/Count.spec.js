import { h } from 'preact';
import render from 'preact-render-to-string';
import htmlLooksLike from 'html-looks-like';

const Counter = () => <p>0</p>;

describe('Counter', () => {
  it('has count prop', () => {
    const actual = render(<Counter />);
    const expected = `<p>0</p>`;

    htmlLooksLike(actual, expected);
  });
});