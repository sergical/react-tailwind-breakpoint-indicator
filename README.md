# React Tailwind Breakpoint Indicator

A React component that indicates the current Tailwind breakpoint in development mode.

## Installation

```bash
npm install react-tailwind-breakpoint-indicator
```

## Usage

First update your `tailwind.config.js|ts` to include the content of this package:

```ts
content: [
  ...existing content,
  "./node_modules/react-tailwind-breakpoint-indicator/**/*.{js,jsx,ts,tsx}",
],
```

Then import and use the `BreakpointIndicator` component in your app:

```tsx
import React from "react";
import BreakpointIndicator from "react-tailwind-breakpoint-indicator";

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <BreakpointIndicator />
    </div>
  );
};

export default App;
```

## Props

- `position`: The position of the breakpoint indicator. Can be `bottom-left`, `bottom-right`, `top-left`, or `top-right`. Defaults to `bottom-right`.

## License

MIT
