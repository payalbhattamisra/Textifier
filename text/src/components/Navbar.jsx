import React from 'react';
import PropTypes from 'prop-types';

export default function NavBar(props) {
  const { mode, title, sidebar, toggle } = props;

  return (
    <div>

      <nav style={{ backgroundColor: mode === 'light' ? 'rgb(26, 117, 255)' : '#343a40', color: mode === 'light' ? '#000' : '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
          <a href="#" style={{ textDecoration: 'none', color: mode === 'light' ? '#000' : '#fff' }}>{title}</a>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <ul style={{ visibility:'hidden',listStyleType: 'none', display: 'flex', margin: 0, padding: 0 }}>
              <li style={{ marginRight: '10px' }}><a href="#" style={{ textDecoration: 'none', color: mode === 'light' ? '#000' : '#fff' }}>Home</a></li>
              <li style={{ marginRight: '10px' }}><a href="#" style={{ textDecoration: 'none', color: mode === 'light' ? '#000' : '#fff' }}>Link</a></li>
              <li style={{ marginRight: '10px', position: 'relative' }}>
                <a href="#" style={{ textDecoration: 'none', color: mode === 'light' ? '#000' : '#fff' }}>Dropdown</a>
                <ul style={{ listStyleType: 'none', padding: 0, position: 'absolute', top: '100%', left: 0, display: 'none', backgroundColor: mode === 'light' ? '#fff' : '#343a40' }}>
                  <li><a href="#" style={{ textDecoration: 'none', color: mode === 'light' ? '#000' : '#fff' }}>{sidebar}</a></li>
                  <li><a href="#" style={{ textDecoration: 'none', color: mode === 'light' ? '#000' : '#fff' }}>Another action</a></li>
                  <li><hr style={{ margin: '0.5rem 0', borderColor: mode === 'light' ? '#000' : '#fff' }} /></li>
                  <li><a href="#" style={{ textDecoration: 'none', color: mode === 'light' ? '#000' : '#fff' }}>Something else here</a></li>
                </ul>
              </li>
              <li><a href="#" style={{ textDecoration: 'none', color: mode === 'light' ? '#000' : '#fff' }}>Disabled</a></li>
            </ul>
            <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" id="darkModeSwitch" onChange={toggle} />
              <label htmlFor="darkModeSwitch" style={{ marginLeft: '5px', cursor: 'pointer' }}>Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  title: PropTypes.string,
  sidebar: PropTypes.string,
  mode: PropTypes.string,
  toggle: PropTypes.func,
};

NavBar.defaultProps = {
  title: 'Set title here',
  sidebar: 'Please pass a name',
  mode: 'light',
  toggle: () => {},
};
