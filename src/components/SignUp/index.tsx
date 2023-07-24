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
  FormInputArea,
  FormMessage,
  FormSubmit,
  SignIn,
} from './styles'
import { Close } from '../../assets/Svg/Close'

export const SignUp = ({ children }: PropsWithChildren) => {
  const [isPasswordShown, setIsPasswordShown] = useState('password')
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] =
    useState('password')

  const handleShowPassword = () => {
    isPasswordShown === 'password'
      ? setIsPasswordShown('type')
      : setIsPasswordShown('password')
  }

  const handleShowConfirmPassword = () => {
    isConfirmPasswordShown === 'password'
      ? setIsConfirmPasswordShown('type')
      : setIsConfirmPasswordShown('password')
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
            Sign up to <span className='coin'>Coin</span>
            <span className='synch'>Synch</span>
          </DialogTitle>

          <FormContainer>
            <FormField name='name'>
              <FormInputArea>
                <Letter />

                <FormControl asChild>
                  <input type='text' placeholder='Name' required />
                </FormControl>
              </FormInputArea>

              <FormMessage name='name' match='valueMissing'>
                Enter your name
              </FormMessage>
              <FormMessage
                match={(value: string, formData: FormData) =>
                  value !== formData.get('password')
                }
              >
                Please provide a valid name
              </FormMessage>
            </FormField>

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
                  <input
                    type={isPasswordShown}
                    placeholder='Password'
                    required
                  />
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

            <FormField name='confirmPassword'>
              <FormInputArea>
                <Lock />

                <FormControl asChild>
                  <input
                    type={isConfirmPasswordShown}
                    placeholder='Confirm Password'
                    required
                  />
                </FormControl>

                <button type='button' onClick={handleShowConfirmPassword}>
                  <Eye isPasswordShown={isConfirmPasswordShown} />
                </button>
              </FormInputArea>

              <FormMessage match='valueMissing'>
                Enter your password confirm
              </FormMessage>
              <FormMessage match='typeMismatch'>
                Please provide a valid password
              </FormMessage>
              <FormMessage
                match={(value: string, formData: FormData) =>
                  value !== formData.get('password')
                }
              >
                Password confirmation does not match
              </FormMessage>
            </FormField>

            <FormSubmit asChild>
              <button>Sign up</button>
            </FormSubmit>
          </FormContainer>

          <SignIn>
            Already have an account?{' '}
            <button type='button'>
              Sign in to <span className='coin'>Coin</span>
              <span className='synch'>Synch</span>
            </button>
          </SignIn>
        </DialogContent>
      </DialogPortal>
    </DialogContainer>
  )
}
