import { DocumentData, QueryDocumentSnapshot, SnapshotOptions, Timestamp } from 'firebase/firestore'
import { ReactNode } from 'react'
export interface MenuItems {
  title: string
  domLocation: string
}

export interface banner {
  bannerText: string
}

export interface CardProps {
  cardTitle: string
  cardSubheading: string
}

export interface featureItem {
  itemColor: string
  itemText: string
  svgPath: string
  svgColor: string
  viewBox: string
  textColor: string
  additionalClasses: string
}

export type userCredentials = string | null

export interface Props {
  children?: React.ReactNode
}

export interface UITextFieldType {
  labelTitle?: string
  fieldType?: string
  fieldPlaceholder?: string
  handleOnChange: React.ChangeEventHandler<HTMLInputElement>
  svgElement?: React.ReactNode
}

export interface alertBanner {
  alertTitle: string
  alertMessage: string
}

export interface PrivateRouteProps {
  element: ReactNode
}

export interface UIModalProps {
  isOpen: boolean
  onClose: Function
  title: string
  body: JSX.Element
  buttonText: string
  handleModalClick: React.MouseEventHandler<HTMLButtonElement>
}

export interface textBubbleProps {
  message: string
}

export interface receiveTextBubbleProps {
  message: string
  avatarUrl: string
  senderName: string
}

export interface textMessagesProps {
  avatarUrl: string
  createdAt: Timestamp
  room: string
  text: string
  user: string
  userDisplayName: string
}

interface textMessagesPropsRead {
  avatarUrl?: string
  createdAt?: Timestamp
  room?: string
  text?: string
  user?: string
  userDisplayName?: string
}

export type snapshotMessageProps = textMessagesProps & { id: string }
