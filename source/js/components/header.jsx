import React, { PropTypes } from 'react'

const Header = React.createClass({
  render () {
    return (
        <header className='header layout-header'>
          <div className='logo'>
            <a className='logo-img' href='http://www.cascobay.org/'>
              <img id ='logo' src='http://www.cascobay.org/wp-content/uploads/2014/05/FOCB-logo_FINAL-300x78.png' alt='Friends of Casco Bay'></img>
            </a>
          </div>
          <h1 className='title'>Casco Bay Health Index</h1>
        </header>
    )
  }
})

export default Header