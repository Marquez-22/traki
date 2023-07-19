import { Button } from "../Button"
import { Container } from "../Container"
import { Input } from "../Input"
import { InputCheckbox } from "../InputCheckbox"
import { Logo } from "../Logo"
import { Text } from "../Text"


type FormularioRegisterType = "FormularioRegister"

export interface FormularioRegisterProps {
    styleTemplate?: FormularioRegisterType



}

export const FormularioRegister = ({ styleTemplate = "FormularioRegister" }: FormularioRegisterProps) => {
    return (<>
        <div className={`FormularioRegister ${styleTemplate}`}>
            <Container styleTemplate="Container1">

                <form className="formulario">
                    <Text styleTemplate="text1" className="datosPersonales">
                        Datos Personales
                    </Text>
                    <Input
                        name="Nombre y Apellido"
                        placeholder="Nombre y Apellido"
                        type="text"
                    />

                    <Input
                        name="Direccion de correo electronico"
                        placeholder="Direccion de  correo electronico"
                        type="text"
                    />
                    <Input
                        name="Tienda de Preferencia"
                        placeholder="Tienda de Preferencia"
                        type="text"
                    />

                    <Input
                        name=" Telefono"
                        placeholder="Telefono"
                        type="text"
                    />
                    <Input
                        name=" Contraseña"
                        placeholder="Contraseña"
                        type="password"

                    />
                    <InputCheckbox>
                        He leido terminos y Condiciones
                    </InputCheckbox>



                    <div className="contentBtn">
                        <Button styleTemplate="btn1"> Crear Cuenta</Button>

                    </div>
                </form>
            </Container>


        </div>



    </>)
}