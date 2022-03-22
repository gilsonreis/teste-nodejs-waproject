import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn, DeleteDateColumn,
  Entity, JoinTable, ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import {Laboratorio} from "../Entities/Laboratorio";

export enum ExameTipo {
  ANALISE_CLINICA = 'analise',
  IMAGEM = 'imagem'
}

@Entity("exame")
export class Exame {
  @PrimaryGeneratedColumn('uuid')
  public id: string | number;
  
  @Column()
  public nome: string;
  
  @Column({
    type: 'enum',
    enum: ExameTipo
  })
  public tipo: ExameTipo;
  
  @Column()
  public status: number;
  
  @ManyToMany(type => Laboratorio, laboratorios => laboratorios.exames)
  @JoinTable({
    name: "laboratorio_exame",
    joinColumn:  {
      name: "exame_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "laboratorio_id",
      referencedColumnName: "id"
    }
  })
  public laboratorios: Laboratorio[]
  
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
