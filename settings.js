require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID ||'CYPHER-X:~UEsDBBQAAAgIANCr21pVPmEUUwQAAG4HAAAKAAAAY3JlZHMuanNvbpVU27KiOBT9l7xitVxEkKpT1YCoiBdAUHSqHyIEjCJgCCB2+e9TePp098NMzxmewk5q75V1yXeQ5bhEFmqB8h0UBNeQom5J2wIBBWhVHCMCeiCCFAIFyCYZr9mqLnaimrPbJApW9fxsuYPzCDeJ1k6LgJl6Rybhkjfw7IGiOqY4*FNDS9*Vm+1ish+tVjAYjYo9Xw1LXu3n*GIiNOk2K8jmoDWO*waeXUeICc4SozihKyIwtVBrQ0w+Bz9ZjKbucj6WvLgkTNNmQdUc89Rzp7fLnFy1xuBaetxG00nzOfi+oLGHg+EHnMZc6k0h5KZ+nsQR247l49Bfw+boS+2Ki2fGO*wSJxmKzAhlFNP207wbtr1uLwPZGZ13HrGW7Q2dA2uSJuv6ikVXWh3GxpJfMKbhfw74yCo1a13P2mS8CY34fu6n26TinCaUD1P+zB4EqsmZYPD6*nfgNvnwyuX*8I4XntD3fIHBd+E2c5qVdHdFa8Y+9M1iNjyM4cxmp9bQjgX5c*DnWj6pgiHXlx45k0dJNahnW+O8Grs7Ml2vliOmDNyVNWNn5i*4kFbkTyhdl1L+QAImaQbTu30hj8Gt0CO6my92JTxHtDK86rRoxXE*iyukp9aunasDuJJqKjgGjdtANW+X+eNc1pDghdWYqua8vW50Qa0ZAYV79gBBCS4pgRTn2avG8z0Ao3qDQoLoi15wdFu*bshjYjMMx7qDNGRu2BMEqkLHWvh3IV436Lhd+qnzBnqgIHmIyhJFM1zSnLRLVJYwQSVQ*vrWAxm603fhunFDrgdiTErqZ1WR5jD6UPVjE4ZhXmV002ah3i0QAQr7q4woxVlSdjxWGSThCddIP0FaAiWGaYl+3hARFAGFkgr9TK2eRx3xoqRuZGckgx64vgTBEVAALw6lAS9zLD9iFelr+aXpusKi+JIhCnogfZ2SR6LEs9JIlmR+KCjS1678*Amv6xYhCnFaAgXoplQwp4EjF0Rukv1e01XVUtWOso*rfPjinXd9x0pZEHqF29e9hj44J71cYmiczZ0sSojEw3hRrQ77*f0fmwAFBCg9Ttj0vjyY2mnAwHF8Pbgc77vlemjgzYS9XmaiE3tb3eZS17hIzg1vpqvGpAdctEFuztVJvhy4UyJyy349rMV6q6tv3bQI1ThEvw8biqKb6MmUu6qwRJC*h6pjB0fZT4z5MWfchWpjRzxJLMv4+HbxPKmaZ6fHWav6OoFps1hXEbHxknXNaipw+d4q3XHy7thXYtIfLxV+eakTqvuNMXoFP4OdfP8p3Dvuzl7ss*dbix8vyb+kUXNSuhY5wRj6cXORF+HInx*mM*5ktpN6jYSbwGStdN7tpksHPJ*feqBIIY1zcgUKgFlEchyBHiB51fnVzOL8D8N0lTVfLD97IIUlVX9lwMNXVFJ4LYDCSSLHiiNZ4N5P2SQvZrA8dRzY3P4Ud4Zu1aLYUEg*IgXU7rOQAJ5*A1BLAQIUAxQAAAgIANCr21pVPmEUUwQAAG4HAAAKAAAAAAAAAAAAAACkgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHsEAAAAAA==',
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
