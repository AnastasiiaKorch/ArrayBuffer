import { Magician, Daemon } from '../app';

it('false', () => {
  const magic = new Magician('magic', 'Magician');
  magic.stoned = false;
  expect(magic.attack).toBe(9);
});

it('true', () => {
  const demon = new Daemon('demon', 'Daemon');
  demon.stoned = true;
  expect(demon.attack).toBe(8);
});

it('Character', () => {
  function checkType() {
    return new Magician('magic', 15);
  }
  expect(checkType).toThrow();
});