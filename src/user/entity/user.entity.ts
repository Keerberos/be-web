import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user', { schema: 'public'})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true})
    username: string;

    @Column({ unique: true})
    email: string;

    @Column()
    password: string;

    @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}