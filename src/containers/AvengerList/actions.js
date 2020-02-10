import { LIST_AVENGERS, GET_AVENGER } from './constants';

export function listAvenger() {
  return {
    type: LIST_AVENGERS,
  }
}

export function getAvenger(avengerId) {
  return {
    type: GET_AVENGER,
    payload: { avengerId },
  }
}
