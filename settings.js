require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAI6F21o4gSNShwQAAPUHAAAKAAAAY3JlZHMuanNvbpVUXZOiOBT9L3ltawQEAau6ahBRERFsRaS39iFCgChfJgHFKf*7Fnb3zFTN7GwvTyGEk3POPfd+A0WJKbJQC0bfQEVwAxnqlqytEBiBcR3HiIAeiCCDYATWlrQ+if6sdpRddZMW52q+VohZb6*mDl+eyD6t3ZsQyq5wegb3HqjqQ4bDPwCqhnVwDo3UL8*9C5nNybiOEhoZtrg9BYsiyifneUtU5ZJ3gB0ixAQXiVGlKEcEZhZqXYjJ5+hvtFzH7VG3tWzT9hPb3Uf5aWhT6B64bFMhvun7aBdTc2p*jr7NxPjk0rNix1tzcs0mFTdHUKsse9+E7Jhy1Fymp9WYavYbfYqTAkVmhAqGWftp35WxVjsHjOxV7h8MlO8PllhltyIm4sLiz3kp95dDo5nOduHniMfXi0d8T225hbHrb5Td6yykO4U5fXNYUzddamuvsW19xiU*E3fJR1ZO*8d3a*Fq81HWv2Kn2In4mtnHm5fyq744qfkKRnP+NoGxOLC8T*rOxtFyqjZ0Yx00jBzIDrfVSlHpsUyElRIh6ObziGNW31**oA9ZTf6YjiBNOeeI9VxSY0ecPl23q6FizRLOm*dRMunn1ly7qM6Yz3nrSV7ObdfwKseQFrNdEHCmoc9FZsR5+zq4CvayYINJrmnPD0Un1JoRGPH3HiAowZQRyHBZdHuCJPQAjJoNCgliD3sB4ZnymhT+y6ZdEOJWHEvhcq+suEWLtXbLi05*kp236vQQPIMeqEgZIkpRNMeUlaS1EaUwQRSM*npUqhNNUF4ytMARGAFBGsqioPCcoHJf6ZdLChmFVfWlQAz0QEzK3EZgxEiNeuDxg64bAiepA1HiprIujjVlOFYlTVEmoi5O1WknMX+7dItzRBnMKzDiZYnnRGE4VO5*90CBruwtP53qAd8DMSaUeUVdZSWMPsL18RGGYVkXbNMWod4tEAEj7sc2YgwXCe2U1QUkYYobpHc6wCiGGUXfjUYERR9a3oeHXkaP+k9ffEvX1qDj3gH94s1I+tWd7HFKUSVZ4GRVkRVhOBhJX7vt+3d6HVqEGMQZ7dwz5eopFdfSYitfkiDQsKZZmtZV7kPORzzfyq*7nFzsw2310te3F3bj19npFEPjaPqKJCMSD+NlvXoNgutvQcAIPA22ZJJcNniFEukSe*IrZ9zOXozYIRO11TQsOD*mj*phkkqNa54npco8r1HIy8TcNKfZOfUVpw4GpfJyldWJvdfOl3GX5R6IUIND9PNlGr89RsPayr1DcFr723i9L+EsCIhsV5IPj0EO5zv*KcYSqw9ZI+huc4LJAO0GqjpQt+cobYyrYAqU5MJ6c3Gt2CnGyVvjPBo3ex+Y+D3S+PEaY*SYPwXsyvefhXvj3cWLu*d+gngfaP8yFMbrjDkSPzCGXnw5KctQ9Ravi7mQmu20cdDgPHgqWvno+zN7De5dzqsMsrgkORgBWESkxBHoAVLWXV7NIi7*cJmucab+PjEySJn2owd+11bi2ymXlNUc0rTzwOWDNO4C3WpVtWGQfbQU0LrHQjy4*wNQSwECFAMUAAAICACOhdtaOIEjUocEAAD1BwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAACvBAAAAAA=',
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
