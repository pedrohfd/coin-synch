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
  FormCheckbox,
  FormContainer,
  FormControl,
  FormField,
  FormInputArea,
  FormMessage,
  FormSubmit,
  SignIn,
} from './styles'
import { Close } from '../../assets/Svg/Close'
import { People } from '../../assets/Svg/People'
import { Check } from '../../assets/Svg/Check'
import { useSignUpController } from './controller'
import { SignUpProps } from '../../types/types'

export const SignUp = ({ children }: SignUpProps) => {
  const {
    handleOpenSignInModal,
    handleCloseSignUpModal,
    isOpenSignUpModal,
    handleShowPassword,
    handleShowConfirmPassword,
    isPasswordShown,
    isConfirmPasswordShown,
  } = useSignUpController()

  return (
    <DialogContainer open={isOpenSignUpModal}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogPortal>
        <DialogOverlay onClick={handleCloseSignUpModal} />
        <DialogContent>
          <DialogClose onClick={handleCloseSignUpModal}>
            <Close />
          </DialogClose>

          <DialogTitle>
            Sign up to <span className='coin'>Coin</span>
            <span className='synch'>Synch</span>
          </DialogTitle>

          <FormContainer>
            <FormField name='name'>
              <FormInputArea>
                <People />

                <FormControl asChild>
                  <input
                    type='text'
                    placeholder='Name'
                    required
                    pattern="[A-Za-zÀ-ÿ\s']+"
                  />
                </FormControl>
              </FormInputArea>

              <FormMessage match='valueMissing'>Enter your name</FormMessage>
              <FormMessage match='patternMismatch'>
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

            <FormField name='checkbox'>
              <div className='checkbox'>
                <FormControl asChild>
                  <FormCheckbox className='container'>
                    <input type='checkbox' required />
                    <Check />

                    <p>
                      I have read and accept the <span>Privacy Policy</span> and{' '}
                      <span>Terms of User Sign up.</span>
                    </p>
                  </FormCheckbox>
                </FormControl>
              </div>

              <FormMessage match='valueMissing'>
                You must accept the terms and conditions
              </FormMessage>
            </FormField>

            <FormSubmit asChild>
              <button>Sign up</button>
            </FormSubmit>
          </FormContainer>

          <SignIn>
            Already have an account?{' '}
            <button type='button' onClick={handleOpenSignInModal}>
              Sign in to <span className='coin'>Coin</span>
              <span className='synch'>Synch</span>
            </button>
          </SignIn>
        </DialogContent>
      </DialogPortal>
    </DialogContainer>
  )
}
