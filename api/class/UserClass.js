//Registrar ususarios
//Iniciar sesion 
//Cerrar sesion 
//Obtener informacion del usuario
//Crear transacciones
//Pedir prestamos
//Borrar cuenta 
//Actualizar 

import UserModel from "../models/UserModel.js";
import ManagerAccount from "./AcountClass";
import ManagerCard from "./CardClass.js";

class ManagerUser {
    constructor(
        email,
        phone,
        name,
        lastaName,
        isInSesion,
        isAdmin,
        password
    ) {
        this.email = email;
        this.phone = phone;
        this.name = name;
        this.lastaName = lastaName;
        this.isInSesion = isInSesion;
        this.isAdmin = isAdmin;
        this.password = password;
    }

    async registrer() {
        try {
            const user = await UserModel.creat({
                email: this.email,
                phone: this.phone,
                name: this.name,
                lastaName: this.lastaName,
                isInSesion: this.isInSesion,
                isAdmin: this.isAdmin,
                password: this.password,
            })
            const MA = new ManagerAccount(user._id, 12345, "Ahorro", 10000)
            const currentAccount = await MA.createAccount();
            const MC = new ManagerCard(user._id, currentAccount._id, "16 digitos al azar", "debito", "De la fecha actual sumar 3 años", "Generar codigo de 3 cifras", "active");
            await MC.CreateCard();
            return user;

        } catch (error) {
            throw new Error(`Error al registrar al usuario: ${error}`);
        }
    }

    async Login(email, password) {
        try {
            const user = await UserModel.findOne({ email })
            if (!user) {
                throw new Error(`Usuario no registrado: ${error}`);
            }
            if (user.password !== password) {
                throw new Error(`Contraseña incorrecta: ${error}`);
            }
            return "Succeeded";
        } catch (error) {
            throw new Error(`Error al iniciar sesion: ${error}`);
        }
    }

    async getUserInfo(id) {
        try {
            const user = await UserModel.findById(id);
            return user;
        } catch (error) {
            throw new Error(`Error al obtener informacion del usuario: ${error}`);
        }
    }

    async updateEmail(id, email) {
        try {
            if (!email) {
                throw new Error(`Correo invalido: ${error}`);
            }
            await UserModel.findByIdAndUpdate(id, {
                $set: { email }
            })
            return "ok";
        } catch (error) {
            throw new Error(`Error al actualizar el correo: ${error}`);
        }

    }

    async updatePhone(id, phone) {
        try {
            if (!phone) {
                throw new Error(`Telefono invalido: ${error}`);
            }
            await UserModel.findByIdAndUpdate(id, {
                $set: { phone }
            })
            return "ok";
        } catch (error) {
            throw new Error(`Error al actualizar el telefono: ${error}`);
        }

    }

    async updatePassword(id, password) {
        try {
            if (!password) {
                throw new Error(`Contraseña invalida: ${error}`);
            }
            await UserModel.findByIdAndUpdate(id, {
                $set: { password }
            })
            return "ok";
        } catch (error) {
            throw new Error(`Error al actualizar la contraseña: ${error}`);
        }
    }

    //Pendiente eliminar usuario
}

export default ManagerUser;









