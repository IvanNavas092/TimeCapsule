export interface Capsule {
  id: string;
  title: string;
  description: string;
  isShared?: boolean;
  isPrivate?: boolean;
  owner?: string;
  createAt?: Date;
  closeDate?: Date;
  CapsuleAvatar?: string;
}

export interface CapsuleDto {
  title: string;
  description: string;
  isShared?: boolean;
  isPrivate?: boolean;
  closeDate?: string;
  CapsuleAvatar?: string;
}