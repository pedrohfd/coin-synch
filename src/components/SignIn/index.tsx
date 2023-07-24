import { PropsWithChildren, useState } from 'react'
import { Eye } from '../../assets/Svg/Eye'
import { Letter } from '../../assets/Svg/Letter'
import { Lock } from '../../assets/Svg/Lock'
import {
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  FormContainer,
  FormControl,
  FormField,
  FormForgetPassword,
  FormInputArea,
  FormMessage,
  FormSubmit,
  SignUp,
} from './styles'
import { Close } from '../../assets/Svg/Close'

export const SignIn = ({ children }: PropsWithChildren) => {
  const [isPasswordShown, setIsPasswordShown] = useState(true)

  const handleShowPassword = () => {
    setIsPasswordShown(!isPasswordShown)
  }

  return (
    <DialogContainer>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <Close />
          </DialogClose>

          <DialogTitle>
            Sign in to <span className='coin'>Coin</span>
            <span className='synch'>Synch</span>
          </DialogTitle>

          <FormContainer>
            <FormField name='email'>
              <FormInputArea>
                <Letter />

                <FormControl asChild>
                  <input type='email' placeholder='Email' required />
                </FormControl>
              </FormInputArea>

              <FormMessage match='valueMissing'>Enter your email</FormMessage>
              <FormMessage match='typeMismatch'>
                Please provide a valid email
              </FormMessage>
            </FormField>

            <FormField name='password'>
              <FormInputArea>
                <Lock />

                <FormControl asChild>
                  <input type='password' placeholder='Password' required />
                </FormControl>

                <button type='button' onClick={handleShowPassword}>
                  <Eye isPasswordShown={isPasswordShown} />
                </button>
              </FormInputArea>

              <FormMessage match='valueMissing'>
                Enter your password
              </FormMessage>
              <FormMessage match='typeMismatch'>
                Please provide a valid password
              </FormMessage>
            </FormField>

            <FormForgetPassword>Forgot password?</FormForgetPassword>

            <FormSubmit asChild>
              <button>Sign in</button>
            </FormSubmit>
          </FormContainer>

          <SignUp>
            Don't have an account?{' '}
            <button type='button'>
              Sign up to <span className='coin'>Coin</span>
              <span className='synch'>Synch</span>
            </button>
          </SignUp>
        </DialogContent>
      </DialogPortal>
    </DialogContainer>
  )
}
