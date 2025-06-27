require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID ||'CYPHER-X:~UEsDBBQAAAgIAMqG21rdTDh8VAQAAG4HAAAKAAAAY3JlZHMuanNvbpVUyZKjOBD9F13taLMYGzuiIhpTrMb7QpmJPshIYAEGLAlj3OF*n6CWrj7M9NRwEilF5st87+VPkBeE4SluwPgnKCm5Qo7bI29KDMZgUkURpqALEOQQjEFqW5PB1JjKRWgfF4vpJFsm95f4cBUvbk*uLHtpfZvbThYZxRN4dEFZHTMS*iHhdN4b+UQbbMJcuNgLfWaZKCcz7bI5rqOtPlutNjMn1sIkDZ*Ao80ICSV5bJQnfMYUZlPcLCGhX4PfnykvN7MQUOFXFBlXu3HuQa*YRla4DsXRppqY1PFNU5XTr8HfwzWWcn1NmkNDoOTrZ2HpL5OsLmdI2axkNOm74RnTo6+9wWckzjFyEM454c2X576zJmljXvab0jQCWffnrEPwKinMnM09ndeKjU248ka2KXwNuKwxtVD2+9Ul4PozCoSTcEpeFnQVG6w+ilqN1+EKnetwkv4OfEk*tJL+n7lD4zA4FA71Rda75XKnl20YUvV1x*Z0cp8rvhV39KE7sPdflE0aYM3eZ9lxksgbkvuzZRjjG2uiu7E+d4r7cdIzp2lzuafGJ3zIK*onlFubXophnw*TTmWcYsV3kVGnbnVgqa27QeDViiBb5X3*fPPJvt*cVFUauMxJneeq0OXLoL476k7WRtedty0mggQDPdGeXjtKceMgMBYfXUBxTBinkJMib2OSrHYBRNcNDinmr+MFaS4t1mu262FP8bZby9CUTeT5xlKRhwZ2LsOwkC8sOxirwxPogpIWIWYMI5swXtBmhhmDMWZg*NePLsjxjb8R15aTxS6ICGV8l1dlVkD0werHJQzDosr5pslDvT1gCsbCZxhzTvKYtXOsckjDE7li*QQ5A+MIZgz*6hBTjMCY0wr*cq1eoHbwnquo2qA*AF1wfiWEIDAGkjIYSkN5JMvCaCx+Z9*qNissy2855qALsrdXqjTs94WhpEiSKIzF72348Qtemw1hDknGwBjo3nVyP2i2Me0EHdWxLM2INT3WwGc7H7p4m7s8GS23eTT38xpdluamShdNR7KSjqhpB9lC*GacDlgWYrJ7+ockYAxUGq59Wdx5brnZ7XfHOpsG3rM185TjZYRGifXiy+JoPj1lUn4t+iSTwn4aK4MMmbIkBbx3NQNanlfn2HIW6xfxoF1DrX5qqyF8JSH+vVjfGQpHcrYji6nDuzYIkK4sZHJPV3Fy3z+7UtAZoCjx9fR6Dtxbcd*dRu4q1D1L15yrIpYq6gu2tbOSF2J7axbQapLUb4p9dUz2vqnIq5ZaotrfiOBX4+ewpe8*iXvD3cpLeHR*S*G+Sf7FjRNUR1tBke*7UrVhctvR8pld+ano8ZVmzW*5MVw7vs1HjpOBx+NHF5QZ5FFBz+3CyREtCAJdQIuq1auTR8UfiunaztHfrZpBxrVPD2zJGTMOzyUYi0NFFPqypIhvr5a0KG3ITq1w4uXOTVtBN1pZbjjkH5YCWvu5zgo8*gZQSwECFAMUAAAICADKhtta3Uw4fFQEAABuBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB8BAAAAAA=',
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'yatte1a',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) ||'kaitesi1212' ,
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
