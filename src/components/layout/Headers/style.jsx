import styled from 'styled-components';

const Headers = styled.div`
  .nav {
    background-color: #202020;
    padding: 0px 16px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    height: 100%;
    display: flex;
    align-items: center;

    .menu-bar-warpper {
      margin-right: 20px;

      .menu-bar {
        padding: 8px;
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
    }

    .logo-image {
      width: 70px;
      height: 20px;
      padding: 5px 0;
    }

    .logo-code {
      font-size: 5px;
      vertical-align: top;
      color: gray;
      margin-left: 2px;
    }
  }

  .search-form {
    min-width: 640px;
    display: flex;
    align-items: center;

    .nav-search-container {
      display: flex;
      background-color: #121212;

      padding: 2px 6px 2px 6px;
      width: 100%;
      border: 1px solid ${props => (props.inputFocus ? '#2650c5' : '#363636')};
      border-right: none;

      .nav-search {
        background-color: inherit;
        border: none;
        color: #979797;
        width: 100%;
        line-height: 24px;
        margin-left: 4px;
        padding: 1px 2px 1px 2px;
        max-width: 100%;
        font-size: 1rem;
        outline: none;
      }
    }

    .nav-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #363636;
      background-color: #2f2e2e;
      cursor: pointer;
      width: 75px;
      height: 32px;
    }
  }

  .nav-right {
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon-warpper {
      margin-right: 8px;
    }
    .nav-right-icon {
      box-sizing: border-box;
      width: 40px;
      padding: 8px;
      cursor: pointer;
    }
  }
`;

export default Headers;
