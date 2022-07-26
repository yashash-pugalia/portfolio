import { readable } from "svelte/store";

export let date = readable(Date.now(), (set) => {
  const interval = setInterval(() => set(Date.now()), 100);
  return () => clearInterval(interval);
});
