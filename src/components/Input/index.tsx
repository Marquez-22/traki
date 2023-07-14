 export type InputType ="Input1"

 export interface InputProps {
    styleTemplate?:InputType
    type?: "text" | "email" | "password"
    name: string;
    value?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;



}

export const Input =({styleTemplate="Input1", type="text", name,placeholder="",required=false, disabled=false }:InputProps)=>{
    return(<>
    <label className={`Label ${styleTemplate}`}>
       <input className="Input"
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
        />
      
    </label>
    
    
    </>)
}