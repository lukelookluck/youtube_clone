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

    .menu-bar {
      padding: 8px;
      margin-right: 20px;
      font-size: 20px;
      cursor: pointer;
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

    .nav-search {
      background-color: #121212;
      color: #979797;
      border: 1px solid #363636;
      border-right: none;
      line-height: 26px;
      width: 100%;
      padding: 3px 8px 3px 10px;
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

    .nav-right-icon {
      box-sizing: border-box;
      width: 40px;
      padding: 8px;
      margin-right: 8px;
      cursor: pointer;
    }
  }
`;

export default Headers;
