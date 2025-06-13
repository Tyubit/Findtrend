import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonProps = {
    children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
  
const Button = ({ children, ...props }: ButtonProps) => {
return (
    <button className='bg-green-600 px-8 py-3 rounded-full'>
        {children}
    </button>
)
}



export default Button