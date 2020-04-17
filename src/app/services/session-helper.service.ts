import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

//256 Bit security level encryption. 
const STORAGEKEY = '5v8y/B?E(H+KbPeShVmYq3t6w9z$C&F)';

@Injectable({
  providedIn: 'root'
})

export class SessionHelperService {

  public TokenKey : string = 'token'; 

  constructor(@Inject(LOCAL_STORAGE) private _SessionStorage: StorageService) { }

  /**
   * SetSessionStorage
  key: string, value: string   */
  public SetSessionStorage(key: string, value: string) {
    this._SessionStorage.set(key, value);
  }

  /**
   * GetSessionStorage
  key: string, value: string   */
  public GetSessionStorage(key: string) {
    this._SessionStorage.get(key);
  }
}
