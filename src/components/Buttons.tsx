import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonProps = {
    children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
  
const Button = ({ children, className = '', ...props }: ButtonProps) => {
return (
    <button className={`bg-green-600 px-6 py-3 rounded-full flex justify-center font-bold`}>
        {children}
    </button>
)
}



export default Button