import styled, { keyframes } from 'styled-components'
import {
  Root as DialogRoot,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Close,
} from '@radix-ui/react-dialog'

import {
  Root as FormRoot,
  Field,
  Message,
  Control,
  Submit,
} from '@radix-ui/react-form'

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.89;
  }
`

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

export const DialogContainer = styled(DialogRoot)``

export const DialogTrigger = styled(Trigger)``

export const DialogPortal = styled(Portal)``

export const DialogOverlay = styled(Overlay)`
  background-color: ${({ theme }) => theme.textBase};
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
`

export const DialogClose = styled(Close)`
  border: none;
  outline: none;
  background: none;

  color: ${({ theme }) => theme.secondary[500]};

  position: absolute;
  top: 1rem;
  right: 1rem;

  transition: color 0.2s;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary[500]};
  }
`

export const DialogContent = styled(Content)`
  width: 28rem;

  background-color: ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus {
    outline: none;
  }
`

export const DialogTitle = styled(Title)`
  color: ${({ theme }) => theme.textBase};

  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
  text-align: center;

  .coin {
    color: ${({ theme }) => theme.primary[500]};
    font-weight: 700;
  }

  .synch {
    color: ${({ theme }) => theme.secondary[500]};
    font-weight: 700;
  }
`

export const FormContainer = styled(FormRoot)``

export const FormField = styled(Field)`
  margin-top: 1.5rem;
`

export const FormMessage = styled(Message)`
  position: absolute;

  font-size: 0.7rem;
  line-height: 0.875rem;

  color: ${({ theme }) => theme.quaternary[500]};

  padding-left: 0.1rem;
  margin-top: 0.1rem;
`

export const FormInputArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  border-radius: 0.375rem;
  border: 1px solid ${({ theme }) => theme.secondary[300]};

  padding: 0 1rem;

  color: ${({ theme }) => theme.secondary[300]};

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    outline: none;
    background: none;

    color: ${({ theme }) => theme.secondary[300]};
  }
`

export const FormControl = styled(Control)`
  outline: none;
  border: none;
  background: none;

  width: 100%;

  margin: 0 1rem 0 0.5rem;
  padding: 1rem 0;

  font-size: 1rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.textBase};
  opacity: 0.55;
`

export const FormForgetPassword = styled.a`
  display: block;

  text-align: right;

  font-size: 0.75rem;
  line-height: 0.875rem;
  color: ${({ theme }) => theme.secondary[500]};

  margin-top: 0.5rem;

  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.primary[500]};
  }
`

export const FormSubmit = styled(Submit)`
  background-color: ${({ theme }) => theme.primary[500]};
  color: ${({ theme }) => theme.white};

  width: 100%;

  border-radius: 10rem;
  border: none;

  padding: 0.88rem 1.5rem;
  margin-top: 1.5rem;

  font-size: 1rem;
  line-height: 1.5rem;

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.primary[600]};
  }
`

export const SignUp = styled.div`
  text-align: center;

  margin-top: 1.5rem;

  font-size: 0.875rem;

  color: ${({ theme }) => theme.textBase};

  button {
    border: none;
    outline: none;
    background: none;

    color: ${({ theme }) => theme.textBase};
    font-weight: 700;

    cursor: pointer;

    transition: color 0.2s;

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.secondary[500]};
    }
  }

  .coin {
    color: ${({ theme }) => theme.primary[500]};
    font-weight: 700;
  }

  .synch {
    color: ${({ theme }) => theme.secondary[500]};
    font-weight: 700;
  }
`
