import { Column, createConnection, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column(() => BanInfo)
    ban: BanInfo;
}

export class BanInfo {
    @Column({nullable: true}) reason: string;

    @ManyToOne(() => UserEntity, {nullable: true}) user: UserEntity;
}

createConnection().then(async () => {}).catch(error => console.log(error));
