function theBeatlesPlay(x,y){
  var r = []
  for(let i=0; i < x.length ; i++){
    var s = x[i] + " plays " + y[i]
    r.push(s)
  }
  return r
}
function johnLennonFacts(facts){
  let x = 0 
  while (x<facts.length){
    facts[x] = facts[x] +"!!!"
    x = x + 1 
  }
  return facts
  
}
function iLoveTheBeatles(y){
  var x = []
  do {x.push("I love the Beatles!")}
  while (y<15){
    y = y + 1 ;
  }
  return x 
}