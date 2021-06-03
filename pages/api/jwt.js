// This is an example of how to read a JSON Web Token from an API route
import jwt from 'next-auth/jwt';

const secret = process.env.SECRET;
const signingKey = process.env.JWT_SIGNING_KEY;
const encryptionKey = process.env.JWT_ENCRYPTION_KEY;
const encryption = process.env.ENCRYPTION;

export default async (req, res) => {
  const token = await jwt.getToken({ req, secret, signingKey, encryption,})
  if (token) {
      res.send(JSON.stringify(token.accessToken, null, 2))
  } else {
      res.send({ error: 'You must be sign in to view the protected content on this page.' })
  }
}
