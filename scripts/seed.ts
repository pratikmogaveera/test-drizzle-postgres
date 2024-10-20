import { NewUser, insertUser } from "../lib/db";

async function main() {
  const newUser: NewUser = {
    email: 'mogaveera@gmail.com',
    image: "image link",
    name: "Mogaveera",
  }

  const res = await insertUser(newUser)
  console.log(res)
  process.exit()
}

main()