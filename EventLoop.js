console.log('Start of the program');

setImmediate(() => {
  console.log('Immediate Callbacks phase: Immediate callback executed!');
});

const handleClose = () => {
  console.log('Close Callbacks phase: Resource closed!');
};

setTimeout(handleClose, 3000);

setTimeout(() => {
  console.log('Timer phase: Timer callback executed!');
}, 2000);

const readFileCallback = () => {
  console.log('I/O Callbacks phase: File read operation completed!');
};

setTimeout(readFileCallback, 1000);

process.nextTick(() => {
  console.log('Next Tick phase: Next tick callback executed!');
});

console.log('End of the program');