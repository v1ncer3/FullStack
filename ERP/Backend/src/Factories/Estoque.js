import { config, db } from '../Config/Connection.js';

export class Estoque {
    constructor(cdlancest = null, cdproduto = null, qtprodest = null, vrcompra = null, vrvenda = null, dtlancamento = null) {
        if(cdlancest != null){
            this.cdlancest = cdlancest;
        }
        if(cdproduto != null){
            this.cdproduto = cdproduto;
        }
        if(qtprodest != null){
            this.qtprodest = qtprodest;
        }
        if(vrcompra != null){
            this.vrcompra = vrcompra;
        }
        if(vrvenda != null){
            this.vrvenda = vrvenda;
        }
        if(dtlancamento != null){
            this.dtlancamento = dtlancamento;
        }
    }

    // Getter e Setter para cdlancest
    getcdlancest() {
        return this.cdlancest;
    }

    setcdlancest(value) {
        this.cdlancest = value;
    }

    // Getter e Setter para cdproduto
    getcdproduto() {
        return this.cdproduto;
    }

    setcdproduto(value) {
        this.cdproduto = value;
    }

    // Getter e Setter para qtprodest
    getqtprodest() {
        return this.qtprodest;
    }

    setqtprodest(value) {
        this.qtprodest = value;
    }

    // Getter e Setter para vrcompra
    getvrcompra() {
        return this.vrcompra;
    }

    setvrcompra(value) {
        this.vrcompra = value;
    }

    // Getter e Setter para vrvenda
    getvrvenda() {
        return this.vrvenda;
    }

    setvrvenda(value) {
        this.vrvenda = value;
    }

    // Getter e Setter para dtlancamento
    getdtlancamento() {
        return this.dtlancamento;
    }

    setdtlancamento(value) {
        this.dtlancamento = value;
    }

    async salvar(){
        const connection = await db.createConnection(config);
        await connection.execute(`INSERT INTO ESTOQUE (CDPRODUTO, QTPRODEST, VRCOMPRA, VRVENDA) 
                                                VALUES (?, ?, ?, ?)`,
                                [this.getcdproduto(), this.getqtprodest(), this.getvrcompra(), this.getvrvenda()]);
        connection.end();
    }

    async excluir(){
        const connection = await db.createConnection(config);
        await connection.execute(`DELETE FROM ESTOQUE
                                  WHERE CDPRODUTO = ?`,
                                [this.getcdproduto().toString()]);
        connection.end();
    }

    atualizar(){

    }

    async findAll(){
        const connection = await db.createConnection(config);
        const [rows] = await connection.execute(`SELECT 
                                                    EST.CDLANCEST AS estoque,
                                                    EST.CDPRODUTO AS id, 
                                                    PT.NMPRODUTO AS nome, 
                                                    EST.QTPRODEST AS quantidade,
                                                    ROUND(EST.VRCOMPRA, 2) AS valorCompra,
                                                    ROUND(EST.VRVENDA, 2) AS valorVenda,
                                                    DATE_FORMAT(EST.DTLANCAMENTO, '%d/%m/%Y') AS dataLancamento
                                                FROM ESTOQUE EST, PRODUTO PT
                                                WHERE EST.CDPRODUTO = PT.CDPRODUTO
                                                ORDER BY EST.CDPRODUTO ASC`);
        connection.end();
        return rows;
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

    async findCdlancest(){
        const connection = await db.createConnection(config);
        const prod = await connection.execute(`SELECT 
                                                    *
                                                FROM ESTOQUE EST, PRODUTO PT
                                                WHERE EST.CDPRODUTO = PT.CDPRODUTO
                                                AND EST.CDLANCEST = ?`,
                                                [this.getcdlancest()]);
        connection.end();
        return prod;
    }
}