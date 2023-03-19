import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from '@/lib/session';
import { siweApi } from "@randombits/use-siwe/next"

export default withIronSessionApiRoute(siweApi(), sessionOptions);