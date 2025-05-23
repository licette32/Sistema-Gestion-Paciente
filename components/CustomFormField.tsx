'use client'  // Indico que este componente se ejecuta en el cliente y no en el servidor (Next.js).

// IMPORTACIONES NECESARIAS
import { E164Number } from "libphonenumber-js/core"; // Tipo de dato para números de teléfono en formato internacional.
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // Componentes reutilizables para formularios.
import { Input } from "@/components/ui/input"; // Componente de input.
import { Control } from "react-hook-form"; // Tipo Control de react-hook-form para manejar formularios.
import { FormFieldType } from "./forms/PatientForm";  // Enumeración o tipo que define los tipos de campos.
import Image from "next/image";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';


interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode,
}

const RenderField = ({field, props}: {field: any; props: CustomProps }) => {
    const {fieldType, iconSrc, iconAlt, placeholder} = props;

    switch (fieldType) {
        case FormFieldType.INPUT:
            return (
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                    {iconSrc && (
                        <Image 
                            src={iconSrc}
                            height={24}
                            width={24}
                            alt={iconAlt || 'icon'}
                            className='ml-2'
                        />
                    )}
                    <FormControl>
                        <Input 
                        placeholder={placeholder}
                        {...field}
                        className="shad-input border-0"
                        />
                    </FormControl>
                </div>
            )
            case FormFieldType.PHONE_INPUT:
                return (
                  <FormControl>
                    <PhoneInput
                      defaultCountry="AR"
                      placeholder={props.placeholder}
                      international
                      withCountryCallingCode
                      value={field.value as E164Number | undefined}
                      onChange={field.onChange}
                      className="input-phone"
                    />
                  </FormControl>
            )
        default:
            break;
    }
}

const CustomFormField = ( props : CustomProps) => {
    const {control, fieldType, name, label } = props;
    return (
        <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem className="flex-1">
                {fieldType !== FormFieldType.CHECKBOX && label && (
                    <FormLabel>{label}</FormLabel>
                )}

                <RenderField field={field} props={props} />

                <FormMessage className="shad-error"/>
            </FormItem>
        )}
      />
      
    )
}

export default CustomFormField