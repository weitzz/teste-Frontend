
interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    type?: "button" | "submit" | "reset"
}

const Button = ({ children, onClick, type }: ButtonProps) => {
    return (
        <button onClick={onClick} type={type} className='text-base cursor-pointer border-0 rounded-md bg-yellow-500 text-yellow-800 px-3 py-2 '>{children}</button>
    )
}

export default Button