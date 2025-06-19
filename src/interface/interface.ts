interface ImageUrlInterface {
  link: string;
  name: string;
  isDefault?: boolean;
  type?: string;
}
interface SocialInterface {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  website?: string;
  tiktok?: string;
}

interface UserInterface {
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
  __v: number;
  firstName: string;
  lastName: string;
  displayName: string;
  phoneNumber: string;
  phoneNumberVerified: boolean;
  shopId: string;
  imageUrl: ImageUrlInterface;
  uid: string;
  userId: string;
  address: string;
  region: string;
  country: string;
  isVendor: boolean;
  disabled: boolean;
  isAdmin: boolean;
  superAdmin: boolean;
  social?: SocialInterface;
}

interface BlogPostInterface {
  _id: string;
  blogPostId: string;
  title: string;
  content: string;
  image: ImageUrlInterface;
  tags: string[];
  author: UserInterface;
  status: "draft" | "published" | "archived";
  createdAt: Date;
}
interface BlogPostCommentInterface {
  _id: string;
  comment: string;
  fullName: string;
  email: string;
  createdAt: Date;
  blogPostId: string;
  parentComment: BlogPostCommentInterface | null;
  childrenComments: BlogPostCommentInterface[];
}

export type { UserInterface, BlogPostInterface, BlogPostCommentInterface };
