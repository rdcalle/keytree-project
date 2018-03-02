import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import { Layout, Menu, Spin } from 'antd';
import { history } from './redux';
import InputSearch from './components/InputSearch';
import Users from './components/Users';
import Organizations from './components/Organizations';
import Repositories from './components/Repositories';
import './App.scss';
import logo from './logo.svg';

const { Header, Content, Footer } = Layout;

class App extends Component {
  activeClass = path => {
    const { location } = this.props;
    return location && location.pathname.startsWith(path) 
      ? 'ant-menu-item-selected' 
      : '';
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <Layout>
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
            >
              <Menu.Item key="users" className={this.activeClass('/users')}>
                <Link to="/users">Users</Link>
              </Menu.Item>
              <Menu.Item key="repositories" className={this.activeClass('/repos')}>
                <Link to="/repos">Repositories</Link>
              </Menu.Item>
              <Menu.Item key="organizations" className={this.activeClass('/org')}>
                <Link to="/org">Organizations</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content>
            <Spin
              spinning={this.props.fetching}
              tip="searching..."
            >
              <InputSearch />
              <Switch>
                <Redirect exact from="/" to="/users" />
                <Route path="/users" component={Users} />
                <Route path="/repos" component={Repositories} />
                <Route path="/org" component={Organizations} />
              </Switch>
            </Spin>
          </Content>
          <Footer>
            <img src={logo} alt="Keytree" className="logo"/> Project 2018 Created by Ricardo Díaz
          </Footer>
        </Layout>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = ({ fetching, router: {location} }) => ({
  fetching,
  location
});

export default connect(mapStateToProps)(App);
