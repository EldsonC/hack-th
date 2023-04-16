import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("users")
export class Users {
    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_At: Date

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}