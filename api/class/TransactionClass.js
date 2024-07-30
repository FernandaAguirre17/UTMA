//Movimiento de dinero (Crear transaccion)
//Obtener transacciones 
//Obtener transacciones por usuario 

import TransaccionModel from "../models/TransactionModel.js";

class ManagerTransaccion {
    constructor(
        accountFromId,
        accountToId,
        type,
        amount,
        description
    ){
        this.accountFromId = accountFromId;
        this.accountToId = accountToId;
        this.type = type;
        this.amount = amount;
        this.description = description;     
    }

    async createTransaction(){
        try {
            const transaccion = TransaccionModel.create({
                accountFromId: this.accountFromId,
                accountToId: this.accountToId,
                type: this.type,
                amount: this.amount,
                description: this.description
            })
        } catch (error) {
            throw new Error (`Error al crear la transaccion: ${error}`);
        }
    }

    async getTransaction (id){
        try {
            const transaccion = await TransaccionModel.findById(id);
            return transaccion;
        } catch (error) {
            throw new Error (`Error al obtener la transaccion: ${error}`);
        }
    }

    async getTransactions (){
        try {
            const transaccions = await TransaccionModel.find();
            return transaccions;
        } catch (error) {
            throw new Error (`Error al obtener las transacciones: ${error}`);
        }
    }

    async getAccountTransactions (id){
        try {
            const transaccions = await TransaccionModel.find({accountFromId :id});
            return transaccions;
        } catch (error) {
            throw new Error (`Error al obtener las transacciones: ${error}`);
        }
    }
}


export default ManagerTransaccion;