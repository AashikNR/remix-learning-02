export function loader() {
 return DUMMY_DATA
}


const DUMMY_DATA = [
  {
    id: "e1",
    title: "First expense",
    amount: 11.11,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "Second expense",
    amount: 11.11,
    date: new Date().toISOString(),
  },
];
