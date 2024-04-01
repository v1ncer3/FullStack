import { config, db } from '../Config/Connection.js';

export class Produto {
    constructor(cdproduto, nmproduto, idativo) {
        this.cdproduto = cdproduto;
        this.nmproduto = nmproduto;
        this.idativo = idativo;
    }

    // Getter e Setter para cdproduto
    getcdproduto() {
        return this.cdproduto;
    }

    setcdproduto(value) {
        this.cdproduto = value;
    }

    // Getter e Setter para nmproduto
    getnmproduto() {
        return this.nmproduto;
    }

    setnmproduto(value) {
        this.nmproduto = value;
    }

    // Getter e Setter para idativo
    getidativo() {
        return this.idativo;
    }

    setidativo(value) {
        this.idativo = value;
    }

    async salvar(){
        const connection = await db.createConnection(config);
        await connection.execute(`INSERT INTO PRODUTO (CDPRODUTO, NMPRODUTO, IDATIVO) 
                                                VALUES (?, ?, ?)`,
                                [this.getcdproduto().toString(), this.getnmproduto().toString(), this.getidativo().toString()]);
        connection.end();
    }

    async excluir(){
        const connection = await db.createConnection(config);
        await connection.execute(`DELETE FROM PRODUTO
                                  WHERE CDPRODUTO = ?`,
                                [this.getcdproduto().toString()]);
        connection.end();
    }

    atualizar(){

    }

    findQuery(){

    }

    async findCdproduto(){
        const connection = await db.createConnection(config);
        const prod = await connection.execute(`SELECT 
                                                    *
                                                FROM ESTOQUE EST, PRODUTO PT
                                                WHERE EST.CDPRODUTO = PT.CDPRODUTO
                                                AND EST.CDPRODUTO = ?
                                                AND PT.CDPRODUTO = ?`,
                                                [this.getcdproduto(),
                                                this.getcdproduto()]);
        connection.end();
        return prod;
    }
}