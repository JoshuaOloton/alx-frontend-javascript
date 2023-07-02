import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promisesArr = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const arr = [];
  return Promise.allSettled(promisesArr)
    .then((results) => {
      for (const result of results) {
        arr.push({
          status: result.status,
          value: result.status === 'fulfilled' ? result.value : result.status,
        });
      }
      return arr;
    });
}
