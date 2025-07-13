import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
const handler=NextAuth({
         providers:[
            CredentialsProvider({
                name:"Email",
                credentials:{
                    username:{label:'email',type:'text',placeholder:'email'},
                    password:{label:'password',type:'text',placeholder:'password'}
                },
               async authorize(credentials:any, req) {
                  return   {
                    id:"user1",
                    name:credentials.username
                  }
               }
            }),
            GitHubProvider({
             clientId: process.env.GITHUB_ID||"",
             clientSecret: process.env.GITHUB_SECRET||""
             }),
         ],  
         secret:process.env.NEXTAUTH_SECRET||"",
         pages:{
            signIn:"/signin"
         }
});

export {handler as GET , handler as POST};