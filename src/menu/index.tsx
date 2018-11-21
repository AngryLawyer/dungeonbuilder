import * as React from 'react';
import { Menu as FoundationMenu, MenuItem, MenuText, Row, TopBar, TopBarLeft }  from 'react-foundation';

export default class Menu extends React.PureComponent {
  public render () {
    return (
      <TopBar>
        <Row>
          <TopBarLeft>
            <FoundationMenu>
              <MenuItem>
                <MenuText>
                  Dungeonbuilder
                </MenuText>
              </MenuItem>
              <MenuItem>
                <a>
                  New
                </a>
              </MenuItem>
            </FoundationMenu>
          </TopBarLeft>
        </Row>
      </TopBar>
    );
  }
}
