import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn, DeleteDateColumn,
  Entity, JoinTable, ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import {Exame} from "../Entities/Exame";

@Entity("laboratorio")
export class Laboratorio {
  @PrimaryGeneratedColumn('uuid')
  public id: string | number;
  
  @Column()
  public nome: string;
  
  @Column()
  public endereco: string;
  
  @Column()
  public status: number;
  
  
  @ManyToMany(type => Exame)
  @JoinTable({
    name: "laboratorio_exame",
    joinColumn:  {
      name: "laboratorio_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "exame_id",
      referencedColumnName: "id"
    }
  })
  public exames: Exame[];
  
  @CreateDateColumn()
  public created_at: Date;
  
  @UpdateDateColumn()
  public updated_at: Date;
  
  @DeleteDateColumn()
  public deleted_at: Date;
  
  @BeforeInsert()
  public createdAt () {
    this.created_at = new Date()
  }
  
  @BeforeUpdate()
  public updatedAt () {
    this.updated_at = new Date()
  }
  
}
