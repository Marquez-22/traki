import { Button } from "../Button"
import { Container } from "../Container"
import { Input } from "../Input"
import { Logo } from "../Logo"
import { Text } from "../Text"


type FormularioLoginType = "FormularioLogin"

export interface FormularioLoginProps {
    styleTemplate?: FormularioLoginType



}

export const FormularioLogin = ({ styleTemplate = "FormularioLogin" }: FormularioLoginProps) => {
    return (<>
        <div className={`FormularioLogin ${styleTemplate}`}>
            <Container styleTemplate="Container1">
               
                <form className="formulario">
                    <Text styleTemplate="text1" className="titulo">
                        Iniciar Sesion
                    </Text>
                    <Input
                        name="Email"
                        placeholder="Email"
                        type="text"
                    />
                    <Input
                        name="Contraseña"
                        placeholder="Contraseña"
                        type="password"
                    />
                    <div className="btntraki">
                        <Button styleTemplate="btn1"> Registrar</Button>
                        <Button styleTemplate="btn1"> Ingresar</Button>
                    </div>



                    <Text styleTemplate="text6" className="crearcontraseña">
                        Olvide mi contraseña
                    </Text>




                </form>
            </Container>


        </div>



    </>)
}