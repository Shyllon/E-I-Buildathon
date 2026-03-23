export const getHealth = async () => {
  const res = await fetch("/api");
  return res.json();
};