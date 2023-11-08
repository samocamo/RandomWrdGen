


/* there are all sorts of different nouns and verbs i found. THe easiest way to solve this was to simply categorize them and create lists full of them to input into the qoute*/
const indefinitePronouns = ["anything", "anybody", "anyone", "something", "somebody", "someone", "nothing", "nobody"]
const actionVerb = ["read","open","dance","eat","sleep","pull","push","fight","give","stop","discover"]
const concreteNouns = ["firework", "candle","flower","phone","city","army","brother","sister","computer","father","mother","couch"]
const verbs = ["accept","bake","discover","grab","gaurd","hope","stop","waste"]
const nouns = ["courage","ambition","inspiration","wisdom","respect","motivation"]
const object = ["big","immense","puny","attractive","gorgeous","clean","calm","embarassed","angry"]

/* list of random inspiring qoutes i found */
const listOfQoutes = [ `${nouns[Math.floor(Math.random()*5)]} ${actionVerb[Math.floor(Math.random()*8)]} more dreams than ${nouns[Math.floor(Math.random()*5)]} ever will.`,`I care about ${nouns[Math.floor(Math.random()*5)]} and ${nouns[Math.floor(Math.random()*5)]} and ${nouns[Math.floor(Math.random()*5)]}. ${nouns[Math.floor(Math.random()*5)]} today is an act of rebellion.`,`Try to be a ${concreteNouns[Math.floor(Math.random()*11)]} in ${indefinitePronouns[Math.floor(Math.random()*7)]}s ${concreteNouns[Math.floor(Math.random()*11)]}.`]
/* this array is for the function below. We push a randomly slected qoute into it and then return that array */
let chosenQoute = []
/* chooseQoute works by using the math.floor and math.random methods but inside of the array we choose(in this case listofQoutes).
Therfore it should randmoly select a number and that numebr is associated with an index or place insdie that array. */
const chooseQoute = () => {
    chosenQoute.push(listOfQoutes[Math.floor(Math.random()*3)])
    return chosenQoute
}
console.log(chooseQoute())
/* a very simple human powered method to solving the problem. If i had more time i would create a method that checks the qoutes for nous, verbs, and objects
and determines if it fits into a certain type or category, then pushes a random word from that category into that spot. Kinda like AI lol */