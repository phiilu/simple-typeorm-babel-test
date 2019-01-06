import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn
} from "typeorm";
import { Account } from "./Account";

@Entity("domains")
export class Domain {
  @PrimaryGeneratedColumn()
  id = undefined;

  @Column("varchar")
  domain = "";

  @OneToMany(type => Account, account => account.domain)
  @JoinColumn({ name: "domain", referencedColumnName: "domain" })
  accounts = undefined;
}
