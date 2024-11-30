import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Twitter from "next-auth/providers/twitter";
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app";
import Nodemailer from "next-auth/providers/nodemailer"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        }),
        Twitter({
            clientId: process.env.AUTH_TWITTER_ID,
            clientSecret: process.env.AUTH_TWITTER_SECRET
        }),

        Nodemailer({
            server: {
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                    user: "tochukwuosiedo001@gmail.com",
                    pass: "kvaiviseiofnmdqk",
                },
            },
            from: "tochukwuosiedo001@gmail.com",
        }),

    ],
    adapter: FirestoreAdapter({
        credential: cert({
            projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
            clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY ? process.env.AUTH_FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n") : undefined,
        })
    }),
    pages: {
        signIn: "/auth"
    },
    callbacks: {
        session: async ({ session }) => {
            return session
        }
    }
})