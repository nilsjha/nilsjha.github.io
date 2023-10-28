import { createSignal } from "solid-js";

export default function Counter({ children }) {
  const [count, setCount] = createSignal(0);
  const add = () => setCount(count() + 1);
  const subtract = () => setCount(count() - 1);

  function isVinValid(input: string): boolean {}

  function toWeight(position: number): number {
    if (!(position > 0 && position < 18)) {
      return -1;
    }
    const w = new Map();
    w.set(1, 8);
    w.set(2, 7);
    w.set(3, 6);
    w.set(4, 5);
    w.set(5, 4);
    w.set(6, 3);
    w.set(7, 2);
    w.set(8, 10);
    w.set(9, 0);
    w.set(10, 9);
    w.set(11, 8);
    w.set(12, 7);
    w.set(13, 6);
    w.set(14, 5);
    w.set(15, 4);
    w.set(16, 3);
    w.set(17, 2);
    return w.get(position);
  }

  function letterToNumber(letter: string): number {
    const k = letter[0].toLowerCase();
    const map = new Map();

    map.set("a", "1");
    map.set("b", "2");
    map.set("c", "3");
    map.set("d", "4");
    map.set("e", "5");
    map.set("f", "6");
    map.set("g", "7");
    map.set("h", "8");
    map.set("j", "1");
    map.set("k", "2");
    map.set("l", "3");
    map.set("m", "4");
    map.set("n", "5");
    map.set("p", "7");
    map.set("r", "9");
    map.set("s", "2");
    map.set("t", "3");
    map.set("u", "4");
    map.set("v", "5");
    map.set("w", "6");
    map.set("x", "7");
    map.set("y", "8");
    map.set("z", "9");
    const r = map.get(k);
    if (r === undefined) {
      return -1;
    }

    return r;
  }

  return (
    <>
      <div class="counter">
        <button onClick={subtract}>-</button>
        <pre>{count()}</pre>
        <button onClick={add}>+</button>
      </div>
      <input class="bg-slate-800 text-blue-200 text-6xl"></input>
      <div class="counter-message">{children}</div>
    </>
  );
}
