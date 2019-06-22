import { IpcEvent } from '..';
import { ipcRenderer } from 'electron';
import { makeId } from '~/shared/utils/string';

import { API } from '.';

// https://developer.chrome.com/extensions/webNavigation

export class WebNavigation {
  public id: string;

  constructor(_api: API) {
    this.id = _api._extension.id;
  }

  public onBeforeNavigate = new IpcEvent('webNavigation', 'onBeforeNavigate');
  public onCommitted = new IpcEvent('webNavigation', 'onCommitted');
  public onDOMContentLoaded = new IpcEvent(
    'webNavigation',
    'onDOMContentLoaded',
  );
  public onCompleted = new IpcEvent('webNavigation', 'onCompleted');
  public onCreatedNavigationTarget = new IpcEvent(
    'webNavigation',
    'onCreatedNavigationTarget',
  );
  public onReferenceFragmentUpdated = new IpcEvent(
    'webNavigation',
    'onReferenceFragmentUpdated',
  ); // TODO
  public onTabReplaced = new IpcEvent('webNavigation', 'onTabReplaced'); // TODO
  public onHistoryStateUpdated = new IpcEvent(
    'webNavigation',
    'onHistoryStateUpdated',
  ); // TODO

  public getAllFrames = ({ tabId }, responseCallback:Function) => {
    const extensionId = this.id;
    const portId = makeId(32);

    ipcRenderer.on(
      `api-webnavigation-getallframes-${portId}`,
      (e: Electron.IpcMessageEvent, res: any) => {
        responseCallback(res);
      },
    );

    ipcRenderer.send('api-webnavigation-getallframes', {
      extensionId,
      tabId,
      portId,
    });
  };
}
