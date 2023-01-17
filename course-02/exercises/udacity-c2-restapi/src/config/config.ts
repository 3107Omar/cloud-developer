export const config = {
  "dev": {
    "username": "udagramdevdb",
    "password": "123123amramr",
    "database": "postgres",
    "host": "udagramdevdb.c7gpqxpsunm3.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": "udagramamrdev"
  },
  "jwt": {
          "secret": "helloworld"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
