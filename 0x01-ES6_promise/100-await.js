import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const result = {
    photo: await uploadPhoto(),
    user: await createUser(),
  };
  return result;
}
