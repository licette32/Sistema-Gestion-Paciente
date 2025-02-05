import Image from "next/image"
import { Button } from "@/components/ui/button";


interface ButtonProps {
    isLoading: boolean,
    className?: string,
    children: React.ReactNode,
}

const SubmiButton = ({isLoading, className, children}: ButtonProps) => {
    return (
        <Button 
            type="submit" 
            disabled={isLoading} 
            className={`${className || "bg-[#BFA2DB] text-black hover:bg-[#A285C7] w-full"}`}
        >
            {isLoading ? (
                <div className='flex items-center gap-4'>
                    <Image 
                        src="/assets/icons/loader.svg"
                        alt="loader"
                        width={24}
                        height={24}
                        className="animate-spin"
                    />
                    Cargando ...
                </div>
            ) : (children)}
        </Button>
    );
};


export default SubmiButton;