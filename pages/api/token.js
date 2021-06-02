// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession } from 'next-auth/client';
import { getToken } from 'next-auth/jwt';

const secret = process.env.SECRET;
let accessToken;

export default async (req, res) => {
  const token = await getToken({ req, secret });

  if (token) {
    accessToken = token.accessToken;
    res.status(200).json(accessToken);
  } else {
    res.send({ error: 'You must be sign in to view the protected content on this page.' })
  }
}