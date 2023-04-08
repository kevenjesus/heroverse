import { act, fireEvent, render, waitFor } from "@testing-library/react"
import LoginPage from "."
import '@testing-library/jest-dom'

const pushMock = jest.fn()

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: pushMock
    })
}))


describe("LoginPage", () => {
    afterEach(() => {
        sessionStorage.removeItem("isLoggin")
    })
    it("should render", () => {
        const { container } = render(<LoginPage />)
        expect(container).toMatchSnapshot()
    })

    it("should redirect to home page when user is already logged in", () => {
        sessionStorage.setItem("isLoggin", "true")
        const { container } = render(<LoginPage />)
        expect(container.firstChild).toBe(null)
    })

    it("should display a message erro with field login is empty", () => {
        const { getByRole, getByText } = render(<LoginPage />)
        const button = getByRole('button', {name: 'Entrar'})
        fireEvent.click(button)
        expect(getByText('Por favor. Informe o campo login')).toBeInTheDocument()
    })

    it("should display a message erro with field password is empty", () => {
        const { getByPlaceholderText, getByRole, getByText } = render(<LoginPage />)
        const login = getByPlaceholderText("Login")
        fireEvent.change(login, {target: {value: 'user'}})
        const button = getByRole('button', {name: 'Entrar'})
        fireEvent.click(button)
        expect(getByText('Por favor. Informe o campo senha')).toBeInTheDocument()
    })

    it("should display a message erro with login is invalid", () => {
        const { getByPlaceholderText, getByRole, getByText } = render(<LoginPage />)
        const login = getByPlaceholderText("Login")
        const password = getByPlaceholderText("Senha")

        fireEvent.change(login, {target: {value: 'user'}})
        fireEvent.change(password, {target: {value: 'pass'}})

        const button = getByRole('button', {name: 'Entrar'})
        fireEvent.click(button)
        expect(getByText('Usuário e/ou senha inválidos')).toBeInTheDocument()
    })

    it("should display a message success with login is valid", () => {
        const { getByPlaceholderText, getByRole, getByText } = render(<LoginPage />)
        const login = getByPlaceholderText("Login")
        const password = getByPlaceholderText("Senha")

        fireEvent.change(login, {target: {value: 'globalthings'}})
        fireEvent.change(password, {target: {value: 'globalthings@123'}})

        const button = getByRole('button', {name: 'Entrar'})
        fireEvent.click(button)
        waitFor(() => {
            expect(getByText('Bem-vindo(a), voce será redirecionado(a)')).toBeInTheDocument()
        })
    })

    it('should redirect to home page after successful login', () => {      
        const { getByPlaceholderText, getByText } = render(<LoginPage />);

        process.env.NEXT_PUBLIC_LOGIN="globalthings"
        process.env.NEXT_PUBLIC_PASSWORD="globalthings@123"
        
        const loginInput = getByPlaceholderText('Login');
        const passwordInput = getByPlaceholderText('Senha');
        const submitButton = getByText('Entrar');
        
        fireEvent.change(loginInput, { target: { value: 'globalthings' } });
        fireEvent.change(passwordInput, { target: { value: 'globalthings@123' } });
        
        jest.useFakeTimers();
        fireEvent.click(submitButton);

        jest.runAllTimers();
        expect(pushMock).toBeCalled()
        jest.useRealTimers();

      });
      
})