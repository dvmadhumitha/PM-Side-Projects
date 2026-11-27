// The exercises for each level. Every exam at that level draws from the same bank.
import a1 from '../data/level-a1.json';
import a2 from '../data/level-a2.json';
import b1 from '../data/level-b1.json';
import b2 from '../data/level-b2.json';

const BANKS = { A1: a1, A2: a2, B1: b1, B2: b2 };

export const exercisesFor = (level, skill) => (BANKS[level] && BANKS[level][skill]) || [];
