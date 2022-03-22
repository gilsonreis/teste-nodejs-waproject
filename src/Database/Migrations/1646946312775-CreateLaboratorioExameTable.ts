import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateLaboratorioExameTable1646946312775 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
              name: 'laboratorio_exame',
              columns: [
                  {
                      name: 'laboratorio_id',
                      type: 'uuid'
                  },
                  {
                      name: 'exame_id',
                      type: 'uuid'
                  }
              ]
          })
        )
    
        await queryRunner.createForeignKey(
          'laboratorio_exame',
          new TableForeignKey({
              columnNames: ['laboratorio_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'laboratorio',
              name: 'fk_laboratorio_exame_laboratorio',
              onDelete: 'CASCADE',
              onUpdate: 'SET NULL'
          })
        )
    
        await queryRunner.createForeignKey(
          'laboratorio_exame',
          new TableForeignKey({
              columnNames: ['exame_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'exame',
              name: 'fk_laboratorio_exame_exame',
              onDelete: 'CASCADE',
              onUpdate: 'SET NULL'
          })
        )
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
          'laboratorio_exame',
          'fk_laboratorio_exame_laboratorio'
        )
        await queryRunner.dropForeignKey(
          'laboratorio_exame',
          'fk_laboratorio_exame_exame'
        )
        
        await queryRunner.dropTable('laboratorio_exame')
    }

}
