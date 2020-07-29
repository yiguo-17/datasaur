const {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
} = require('./main.js')

const dinos = require('./dinos.js');

let originalDinos = [];

beforeEach(() => {
  originalDinos = [
    {
      species: 'Archaeopteryx',
      period: 'Jurassic',
      carnivore: true,
      extinct: false
    },
    {
      species: 'Eoraptor',
      period: 'Triassic',
      carnivore: true,
      extinct: false
    },
    {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    },
    {
      species: 'Herrerasaurus',
      period: 'Triassic',
      carnivore: false,
      extinct: false
    },
    {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    },
    {
      species: 'Styracosaurus',
      period: 'Cretaceous',
      carnivore: false,
      extinct: true
    },
  ]
})


describe('makeDino', () => {
  it(`given a species name, a period, and a diet, returns a dinosaur object with those values, as well as a default status of 'not extinct'`, () => {
    const expectedDino = {
      species: 'Eoraptor',
      period: 'Triassic',
      carnivore: true,
      extinct: false
    }

    expect(makeDino('Eoraptor', 'Triassic', true)).toEqual(expectedDino)
  });

  it(`allows us to create a dinosaur with status extinct`, () => {
    const expectedDino = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    }

    expect(makeDino('Brachiosaurus', 'Jurassic', false, true)).toEqual(expectedDino)
  })
})

describe('makeSingular', () => {
  it(`given a dinosaur object, returns a new dinosaur object with the "us" suffix removed from its species`, () => {
    const dino = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };

    const expectedDino = {
      species: 'Brachiosaur',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };

    expect(makeSingular(dino)).toEqual(expectedDino)
  })

  it(`returns the dinosaur species intact if it does not end with 'us'`, () => {
    const dino = {
      species: 'Eoraptor',
      period: 'Triassic',
      carnivore: true,
      extinct: false
    }

    expect(makeSingular(dino)).toEqual(dino)
  })

  it(`does not mutate the original dinosaur object`, () => {
    const dinoTemplate = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };

    const dino = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };

    makeSingular(dino);
    expect(dino).toEqual(dinoTemplate);
  })
})

describe('truncateSpecies', () => {
  it(`returns a new dinosaur with its species truncated to 7 characters`, () => {
    const dino = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };

    const truncatedDino = {
      species: 'Brachio...',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };
    expect(truncateSpecies(dino)).toEqual(truncatedDino);
  })

  it(`returns the dinosaur unchanged if its species name length is 10 or less`, () => {
    const dino = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    expect(truncateSpecies(dino)).toEqual(dino);
  })

  it(`does not mutate the original object`, () => {
    const dinoTemplate = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    const dino = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    truncateSpecies(dino)

    expect(dino).toEqual(dinoTemplate);
  })
})

describe('makeExtinct', () => {
  it(`returns a new dinosaur with its extinct set to true`, () => {
    const dino = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: false
    };

    const extinctDino = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    };
    expect(makeExtinct(dino)).toEqual(extinctDino);
  })

  it(`does not mutate the original object`, () => {
    const dinoTemplate = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    const dino = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    makeExtinct(dino)

    expect(dino).toEqual(dinoTemplate);
  })
})

describe('isCarnivore', () => {
  it(`returns whether the given dinosaur is a carnivore`, () => {
    const dino1 = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    const dino2 = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: false
    };

    expect(isCarnivore(dino1)).toBe(true)
    expect(isCarnivore(dino2)).toBe(false);
  })
})

describe('isExtinct', () => {
  it(`returns whether the given dinosaur is extinct`, () => {
    const dino1 = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    const dino2 = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: false
    };

    expect(isExtinct(dino1)).toBe(true)
    expect(isExtinct(dino2)).toBe(false);
  })
})

describe('isTriassic', () => {
  it(`returns whether the given dinosaur is from the Triassic period`, () => {
    const dino1 = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    const dino2 = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: false
    };

    const dino3 = {
      species: 'Eoraptor',
      period: 'Triassic',
      carnivore: true,
      extinct: false
    }

    expect(isTriassic(dino1)).toBe(false)
    expect(isTriassic(dino2)).toBe(false);
    expect(isTriassic(dino3)).toBe(true);
  })
})

describe('isJurassic', () => {
  it(`returns whether the given dinosaur is from the Jurassic period`, () => {
    const dino1 = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    const dino2 = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: false
    };

    const dino3 = {
      species: 'Eoraptor',
      period: 'Triassic',
      carnivore: true,
      extinct: false
    }

    expect(isJurassic(dino1)).toBe(false)
    expect(isJurassic(dino2)).toBe(true);
    expect(isJurassic(dino3)).toBe(false);
  })
})

describe('isCretaceous', () => {
  it(`returns whether the given dinosaur is from the Cretaceous period`, () => {
    const dino1 = {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    };

    const dino2 = {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: false
    };

    const dino3 = {
      species: 'Eoraptor',
      period: 'Triassic',
      carnivore: true,
      extinct: false
    }

    expect(isCretaceous(dino1)).toBe(true)
    expect(isCretaceous(dino2)).toBe(false);
    expect(isCretaceous(dino3)).toBe(false);
  })
})

describe('singularizeDinos',() => {
  it(`returns an array of all dinos where the dinos have had their names made singular`, () => {
    const singularDinos = [
      {
        species: 'Archaeopteryx',
        period: 'Jurassic',
        carnivore: true,
        extinct: false
      },
      {
        species: 'Eoraptor',
        period: 'Triassic',
        carnivore: true,
        extinct: false
      },
      {
        species: 'Brachiosaur',
        period: 'Jurassic',
        carnivore: false,
        extinct: true
      },
      {
        species: 'Herrerasaur',
        period: 'Triassic',
        carnivore: false,
        extinct: false
      },
      {
        species: 'T-Rex',
        period: 'Cretaceous',
        carnivore: true,
        extinct: true
      },
      {
        species: 'Styracosaur',
        period: 'Cretaceous',
        carnivore: false,
        extinct: true
      },
    ]

    expect(singularizeDinos(dinos)).toEqual(singularDinos);
  })

  it(`doesn't mutate the original array`, () => {
    singularizeDinos(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})

describe('truncateDinos',() => {
  it(`returns an array of all dinos where the dinos have had their names truncated`, () => {
    const truncatedDinos = [
      {
        species: 'Archaeo...',
        period: 'Jurassic',
        carnivore: true,
        extinct: false
      },
      {
        species: 'Eoraptor',
        period: 'Triassic',
        carnivore: true,
        extinct: false
      },
      {
        species: 'Brachio...',
        period: 'Jurassic',
        carnivore: false,
        extinct: true
      },
      {
        species: 'Herrera...',
        period: 'Triassic',
        carnivore: false,
        extinct: false
      },
      {
        species: 'T-Rex',
        period: 'Cretaceous',
        carnivore: true,
        extinct: true
      },
      {
        species: 'Styraco...',
        period: 'Cretaceous',
        carnivore: false,
        extinct: true
      },
    ]

    expect(truncateDinos(dinos)).toEqual(truncatedDinos);
  })

  it(`doesn't mutate the original array`, () => {
    truncateDinos(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})

describe('makeAllExtinct',() => {
  it(`returns an array of all dinos where the dinos have all been made extinct`, () => {
    const extinctDinos = [
    {
      species: 'Archaeopteryx',
      period: 'Jurassic',
      carnivore: true,
      extinct: true
    },
    {
      species: 'Eoraptor',
      period: 'Triassic',
      carnivore: true,
      extinct: true
    },
    {
      species: 'Brachiosaurus',
      period: 'Jurassic',
      carnivore: false,
      extinct: true
    },
    {
      species: 'Herrerasaurus',
      period: 'Triassic',
      carnivore: false,
      extinct: true
    },
    {
      species: 'T-Rex',
      period: 'Cretaceous',
      carnivore: true,
      extinct: true
    },
    {
      species: 'Styracosaurus',
      period: 'Cretaceous',
      carnivore: false,
      extinct: true
    },
  ]

    expect(makeAllExtinct(dinos)).toEqual(extinctDinos);
  })

  it(`doesn't mutate the original array`, () => {
    makeAllExtinct(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})

describe('carnivoresOnly',() => {
  it(`returns an array of only the carnivorous `, () => {
    const carnivores = [
  {
    species: 'Archaeopteryx',
    period: 'Jurassic',
    carnivore: true,
    extinct: false
  },
  {
    species: 'Eoraptor',
    period: 'Triassic',
    carnivore: true,
    extinct: false
  },
  {
    species: 'T-Rex',
    period: 'Cretaceous',
    carnivore: true,
    extinct: true
  },
]

    expect(carnivoresOnly(dinos)).toEqual(carnivores);
  })

  it(`doesn't mutate the original array`, () => {
    carnivoresOnly(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})

describe('herbivoresOnly',() => {
  it(`returns an array of only the herbivorous`, () => {
    const herbivores = [
      {
        species: 'Brachiosaurus',
        period: 'Jurassic',
        carnivore: false,
        extinct: true
      },
      {
        species: 'Herrerasaurus',
        period: 'Triassic',
        carnivore: false,
        extinct: false
      },
      {
        species: 'Styracosaurus',
        period: 'Cretaceous',
        carnivore: false,
        extinct: true
      },
    ]

    expect(herbivoresOnly(dinos)).toEqual(herbivores);
  })

  it(`doesn't mutate the original array`, () => {
    herbivoresOnly(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})

describe('extinctOnly',() => {
  it(`returns an array of only extinct dinosaurs`, () => {
    const extinct = [
      {
        species: 'Brachiosaurus',
        period: 'Jurassic',
        carnivore: false,
        extinct: true
      },
      {
        species: 'T-Rex',
        period: 'Cretaceous',
        carnivore: true,
        extinct: true
      },
      {
        species: 'Styracosaurus',
        period: 'Cretaceous',
        carnivore: false,
        extinct: true
      },
    ]

    expect(extinctOnly(dinos)).toEqual(extinct);
  })

  it(`doesn't mutate the original array`, () => {
    extinctOnly(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})

describe('notExtinct',() => {
  it(`returns an array of only extinct dinosaurs`, () => {
    const stillAlive = [
      {
        species: 'Archaeopteryx',
        period: 'Jurassic',
        carnivore: true,
        extinct: false
      },
      {
        species: 'Eoraptor',
        period: 'Triassic',
        carnivore: true,
        extinct: false
      },
      {
        species: 'Herrerasaurus',
        period: 'Triassic',
        carnivore: false,
        extinct: false
      },
    ]

    expect(notExtinct(dinos)).toEqual(stillAlive);
  })

  it(`doesn't mutate the original array`, () => {
    notExtinct(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})

describe('triassicOnly',() => {
  it(`returns an array of only Triassic dinosaurs`, () => {
    const triassic = [
      {
        species: 'Eoraptor',
        period: 'Triassic',
        carnivore: true,
        extinct: false
      },
      {
        species: 'Herrerasaurus',
        period: 'Triassic',
        carnivore: false,
        extinct: false
      },
    ]

    expect(triassicOnly(dinos)).toEqual(triassic);
  })

  it(`doesn't mutate the original array`, () => {
    triassicOnly(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})

describe('notTriassic',() => {
  it(`returns an array of only extinct dinosaurs`, () => {
    const jurassicOrCretaceous = [
      {
        species: 'Archaeopteryx',
        period: 'Jurassic',
        carnivore: true,
        extinct: false
      },
      {
        species: 'Brachiosaurus',
        period: 'Jurassic',
        carnivore: false,
        extinct: true
      },
      {
        species: 'T-Rex',
        period: 'Cretaceous',
        carnivore: true,
        extinct: true
      },
      {
        species: 'Styracosaurus',
        period: 'Cretaceous',
        carnivore: false,
        extinct: true
      },
    ]

    expect(notTriassic(dinos)).toEqual(jurassicOrCretaceous);
  })

  it(`doesn't mutate the original array`, () => {
    notTriassic(dinos);
    expect(dinos).toEqual(originalDinos);
  })
})
