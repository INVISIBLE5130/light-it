export interface AuthDataProps {
  fullName?: string;
  email: string;
  password: string;
}

export interface FeedbackProps {
  name: string;
  email: string;
  message: string;
}

export interface Store {
  texts: {};
  meta: {
    currentPage?: string;
    language?: string;
  };
  blocks: {
    authPage?: {
      data?: AuthDataProps;
      mockedData?: AuthDataProps;
    };
    homePage?: {};
  };
  feedbacks: FeedbackProps[];
}

export interface TextProps {
  textKey: string;
  common?: boolean;
}
