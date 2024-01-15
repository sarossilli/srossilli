import { defineConfig } from "cypress";


let USER_BRANCH = process.env.USER_BRANCH

const prod = {
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
}

const devo = {
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
}

const staging = {
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
}
export default defineConfig(USER_BRANCH == "prod" ? prod : USER_BRANCH == "staging" ? staging : devo);
