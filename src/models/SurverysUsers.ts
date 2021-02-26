import {
  JoinColumn,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";
import { Survery } from "./Survery";

@Entity("surverys_users")
class SurverysUsers {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  survey_id: string;

  @ManyToOne(() => Survery)
  @JoinColumn({ name: "survey_id" })
  survey: Survery;
  @Column()
  value: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { SurverysUsers };
