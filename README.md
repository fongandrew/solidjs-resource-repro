# SolidJS Resource Collision

This reproduces a SolidJS SSR bug where calling `renderToStringAsync` with `NoHydration` and nested `createResource` / `Suspense` boundaries results in the return value for a resource returned for another. \

## How to Run

```bash
npm install
npm run repro
```

This will render `src/App` with `NoHydration` and without.

## Expected vs Actual

**Expected**: See the hydration case, where we get `<span data-hk=00002001>User: <!--$-->alice<!--/--> </span>`

**Actual**: See the `NoHydration` case, where we get `<span>User: <!--$-->post1<!--/--> </span>` (that is, the resource return from the post fetching is triggered)