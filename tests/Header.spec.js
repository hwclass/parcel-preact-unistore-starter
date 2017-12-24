import { h } from 'preact';
import render from 'preact-render-to-string';
import htmlLooksLike from 'html-looks-like';
import Header from '../src/components/Header/'

describe('Header', () => {
  it('has the DOM tree correctly', () => {
    const actual = render(<Header />);
    const expected = `<header>
      <a class="logo" href="https://parceljs.org/">
        <img class="parcel" src="https://parceljs.org/assets/parcel.png" srcset="https://parceljs.org/assets/parcel@2x.png 2x, https://parceljs.org/assets/parcel@3x.png 3x" height="30"/>
        <img class="type" src="https://parceljs.org/assets/logo.svg" alt="Parcel"/>
      </a>
      <a class="logo" href="https://parceljs.org/">
        <img class="preact" src="https://camo.githubusercontent.com/31415a8c001234dbf4875c2c5a44b646fb9338b4/68747470733a2f2f63646e2e7261776769742e636f6d2f646576656c6f7069742f62343431366435633932623734336462616563316536386263346332376364612f7261772f333233356463353038663765623833346562663438343138616561323132613035646631336462312f7072656163742d6c6f676f2d7472616e732e737667" srcset="https://camo.githubusercontent.com/31415a8c001234dbf4875c2c5a44b646fb9338b4/68747470733a2f2f63646e2e7261776769742e636f6d2f646576656c6f7069742f62343431366435633932623734336462616563316536386263346332376364612f7261772f333233356463353038663765623833346562663438343138616561323132613035646631336462312f7072656163742d6c6f676f2d7472616e732e737667 2x, https://camo.githubusercontent.com/31415a8c001234dbf4875c2c5a44b646fb9338b4/68747470733a2f2f63646e2e7261776769742e636f6d2f646576656c6f7069742f62343431366435633932623734336462616563316536386263346332376364612f7261772f333233356463353038663765623833346562663438343138616561323132613035646631336462312f7072656163742d6c6f676f2d7472616e732e737667 3x" height="30"/>
      </a>
      <div class="links">
        <a href="https://github.com/parcel-bundler/parcel" target="_blank">GitHub</a>
      </div>
    </header>`;

    htmlLooksLike(actual, expected);
  });
});