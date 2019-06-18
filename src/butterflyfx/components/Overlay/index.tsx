import { observer } from 'mobx-react';
import * as React from 'react';

import store from '~/renderer/app/store';

const app = require('electron').remote.app;
import { resolve, join } from 'path';

import {
  StyledOverlay,
  HeaderText,
  HeaderArrow,
  Scrollable,
  Content,
  Container,
  Handle,
} from '~/renderer/app/components/Overlay/style';
import { SearchBox } from '~/renderer/app/components/SearchBox';
import { TabGroups } from '~/renderer/app/components/TabGroups';
import { Dial } from '~/renderer/app/components/Dial';
import { QuickMenu } from '~/renderer/app/components/QuickMenu';

import { Logo, Title, Icon } from './style';

import logo from '~/butterflyfx/assets/images/logo.png';
import icon from '~/butterflyfx/assets/images/icon.png';
// const logo = resolve(app.getAppPath(), 'src/butterflyfx/assets/images/logo.png')
console.log(`Logo: ${logo}`);

export const Header = ({ children, clickable }: any) => {
  return (
    <HeaderText clickable={clickable}>
      {children}
      {clickable && <HeaderArrow />}
    </HeaderText>
  );
};

const onClick = () => {
  if (store.tabGroups.currentGroup.tabs.length > 0) {
    store.overlay.visible = false;
  }
  store.overlay.dialTypeMenuVisible = false;
};

export const preventHiding = (e: any) => {
  e.stopPropagation();
  store.overlay.dialTypeMenuVisible = false;
};

export const Overlay = observer(() => {
  return (
    <StyledOverlay visible={store.overlay.visible} onClick={onClick}>
      <Handle visible={store.overlay.visible} />
      <Container
        visible={
          store.overlay.currentContent === 'default' && store.overlay.visible
        }
      >
        <Scrollable ref={store.overlay.scrollRef}>
          <Content>
            <Logo src={logo} />
            <Title>Welcome to ButterflyFX</Title>
            <Content>
              To start, enter the URL for a website below.
            </Content>
            <SearchBox />
            <Content>
            When you're ready, click the <Icon src={icon} /> icon in the top right to see recording options.
            </Content>
            <Content>
            Once you select one of these options, the app will now record any interactions you might make within that tab.
            When you’re finished, right click the webpage to access the menu and save the recording.
            </Content>
            <img src="https://www.butterflyfx.io/assets/images/automatic-automation2.gif" />
          </Content>
        </Scrollable>
      </Container>

    </StyledOverlay>
  );
});
