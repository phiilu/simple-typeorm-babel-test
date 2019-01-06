import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { Domain } from "./Domain";

@Entity("accounts")
export class Account {
  @PrimaryGeneratedColumn()
  id = undefined;

  @Column("varchar")
  username = "";

  @Column("varchar")
  password = "";

  @Column("int")
  quota = 0;

  @Column("bool")
  enabled = true;

  @Column("bool")
  sendonly = false;

  @ManyToOne(type => Domain, domain => domain.accounts)
  @JoinColumn({ name: "domain", referencedColumnName: "domain" })
  domain = undefined;
}
