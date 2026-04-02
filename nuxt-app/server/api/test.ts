let counter = 0;
export default (): { counter: number } => {
  counter++;
  return { counter };
};