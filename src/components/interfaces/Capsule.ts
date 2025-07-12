export interface Capsule {
  id: number;
  title: string;
  description: string;
  isShared?: boolean;
  isPrivate?: boolean;
  owner?: string;
  createAt?: Date;
  closeDate?: Date;
  CapsuleAvatar?: string;
}