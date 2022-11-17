const numbers = process.argv.slice(2);
for (let i of numbers){
  if ( /^[0-9]+$/.test(i) && i > 0){
    setTimeout(() => process.stdout.write('\x07'), Number(i*1000) )
  }
}