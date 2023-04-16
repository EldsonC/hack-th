"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User1681647611212 = void 0;
const typeorm_1 = require("typeorm");
class User1681647611212 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "username",
                    type: "varchar",
                    isUnique: true
                },
                {
                    name: "password",
                    type: "varchar"
                },
                {
                    name: "created_At",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.User1681647611212 = User1681647611212;
