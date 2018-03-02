import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { getRepositories, searchUser } from '../../actions';
const Search = Input.Search;

class InputSearch extends Component {
  state = {
    value: ''
  }

  fetchData = value => {
    const { getRepositories, searchUser } = this.props;
    searchUser(value);
    getRepositories(value);
  }

  render() {
    return (
      <Search
        enterButton
        onChange={({ target: {value} }) => this.setState({ value })}
        onSearch={this.fetchData}
        placeholder={`type a user name`}
        value={this.state.value}
      />
    );
  }
}

InputSearch.propTypes = {
  getRepositories: PropTypes.func.isRequired,
  searchUser: PropTypes.func.isRequired
}

export default connect(
  null,
  { getRepositories, searchUser }
)(InputSearch);
