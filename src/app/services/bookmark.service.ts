import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'bookmarkNews';

@Injectable()
export class BookmarkService {

  constructor( public storage: Storage ) { }

  isBookmark(newsId) {
    return this.getAllBookmarkNews().then(result => {
      return result && result.indexOf(newsId) !== -1;
    });
  }

  bookmarkNews(newsId) {
    return this.getAllBookmarkNews().then(result => {
      if (result) {
        result.push(newsId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [newsId]);
      }
    });
  }

  unbookmarkNews(newsId) {
    return this.getAllBookmarkNews().then(result => {
      if (result) {
        var index = result.indexOf(newsId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }

  getAllBookmarkNews() {
    return this.storage.get(STORAGE_KEY);
  }

}
