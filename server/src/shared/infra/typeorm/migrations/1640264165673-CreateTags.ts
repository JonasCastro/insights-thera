import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTags1640264165673 implements MigrationInterface {

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO tags (name) VALUES ("TEMPORADA")`);
    await queryRunner.query(`INSERT INTO tags (name) VALUES ("HISTÓRICO")`);
    await queryRunner.query(`INSERT INTO tags (name) VALUES ("MELHOR DA PARTIDA")`);
    await queryRunner.query(`INSERT INTO tags (name) VALUES ("JOGADOR")`);
  }

  async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DELETE FROM tags`);
  }

}
