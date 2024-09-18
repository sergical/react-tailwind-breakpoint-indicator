# React Tailwind Breakpoint Indicator

A React component that indicates the current Tailwind breakpoint in development mode.

## Installation

```bash
npm install react-tailwind-breakpoint-indicator
```

## Usage

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
