import { createConnection } from "typeorm";
import { Domain } from "./entity/Domain";
import { Account } from "./entity/Account";

createConnection()
  .then(async connection => {
    const domainRepository = connection.getRepository(Domain);
    let domains = await domainRepository.find({ relations: ["accounts"] });
    console.log(domains);

    const accountRepository = connection.getRepository(Account);
    let accounts = await accountRepository.find({
      relations: ["domain", "domain"]
    });
    console.log(accounts);
  })
  .catch(error => console.log("Error: ", error));
