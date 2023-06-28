import { observable, action } from "mobx";
import type { AuthDataProps, FeedbackProps, Store } from "../types/types";

const initialState: Partial<Store> = {
  texts: {},
  meta: {},
  blocks: {
    authPage: {},
    homePage: {},
  },
  feedbacks: [],
};

class MyStore {
  @observable data = initialState;

  @action setCurrentPage(page: string) {
    this.data.meta = { currentPage: page };
  }

  @action setLanguage(lang: string) {
    this.data.meta = { language: lang };
  }

  @action setAuthData(data: AuthDataProps) {
    this.data.blocks = { authPage: { ...this.data.blocks?.authPage, data } };
  }

  @action setAuthMockedData(mockedData: AuthDataProps) {
    this.data.blocks = {
      authPage: { ...this.data.blocks?.authPage, mockedData },
    };
  }

  @action addFeedback(feedback: FeedbackProps) {
    const feedbacks: FeedbackProps[] = [];
    feedbacks.push(feedback);
    this.data.feedbacks = [...(this.data.feedbacks || []), ...feedbacks];
  }
}

const store = new MyStore();
export default store;
