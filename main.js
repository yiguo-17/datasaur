/********************
 * HELPER FUNCTIONS *
 ********************/
const makeDino = function(name,time,meat,live){
  const newOne = {
    species:name,
    period:time,
    carnivore:meat,
    extinct:live,
  };
  if(!live){newOne.extinct = false}
  return newOne
}

const makeSingular = function(dinos){
  const dino ={
    species:dinos.species,
    period:dinos.period,
    carnivore:dinos.carnivore,
    extinct:dinos.extinct,
  };
  if(dinos.species.slice(-2)==='us'){dino.species = dinos.species.slice(0,-2)}
  return dino
}

const truncateSpecies = function(longDino){
  const dino = {
    species:longDino.species,
    period:longDino.period,
    carnivore:longDino.carnivore,
    extinct:longDino.extinct,
  }
  if(longDino.species.length>=10){dino.species = longDino.species.slice(0,7)+'...'}
  return dino
}

const makeExtinct = function(dino){
  return{
    species:dino.species,
    period:dino.period,
    carnivore:dino.carnivore,
    extinct:true
  }
}

const isCarnivore = function(dino){
  return dino.carnivore;
}
const grass = function(dino){
  return !dino.carnivore;
}
const isExtinct = function(dino){
  return dino.extinct;
}

const keepBreed = function(dino){
  return !dino.extinct
}

const isTriassic = function(dino){
  return dino.period === 'Triassic';
}

const nextEra = function(dino){
  return dino.period !== 'Triassic';
}

const isJurassic = function(dino){
  return dino.period === 'Jurassic';
}

const isCretaceous = function(dino){
  return dino.period === 'Cretaceous';
}

/***********************
 * ITERATION FUNCTIONS *
 **********************/
const singularizeDinos = function(dinos){
  return dinos.map(makeSingular)
}

const truncateDinos = function(dinos){
  return dinos.map(truncateSpecies)
}

const makeAllExtinct = function(dinos){
  return dinos.map(makeExtinct)
}

const carnivoresOnly = function(dinos){
  return dinos.filter(isCarnivore)
}

const herbivoresOnly = function(dinos){
  return dinos.filter(grass)
}

const extinctOnly = function(dinos){
  return dinos.filter(isExtinct)
}

const notExtinct = function(dinos){
  return dinos.filter(keepBreed)
}

const triassicOnly = function(dinos){
  return dinos.filter(isTriassic)
}

const notTriassic = function(dinos){
  return dinos.filter(nextEra)
}
/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
    isFirstAlphabeticallyBySpecies = undefined
  }

  if (typeof extinctIsLast === 'undefined') {
    extinctIsLast = undefined
  }

  if (typeof carnivoreIsFirst === 'undefined') {
    carnivoreIsFirst = undefined
  }

  if (typeof isInPeriodOrder === 'undefined') {
    isInPeriodOrder = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
