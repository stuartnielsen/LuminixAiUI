import { AppBar, Button, Menu, MenuItem, Toolbar } from '@mui/material'
import { GridArrowDownwardIcon } from '@mui/x-data-grid'
import { useState } from 'react'

export default function PageHeader() {
  //   const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const [actionAnchor, setActionAnchor] = useState(null)
  const profileMenuOpen = Boolean(actionAnchor)

  function userProfileClick(event) {
    setActionAnchor(event.currentTarget)
    // setProfileMenuOpen(true)
  }
  const handleActionClose = () => {
    setActionAnchor(null)
  }
  return (
    <>
      <AppBar position='fixed' sx={{ zIndex: theme => theme.zIndex.drawer + 1, backgroundColor: '#3dc9e1' }}>
        <Toolbar>
          <div style={{ display: 'flex', flex: '1', height: '50px' }}>
            <>
              <h2 style={{ cursor: 'pointer', height: '40px', margin: '10px' }}>Luminix</h2>
              {/* <img
                alt={'Wavetronix'}
                src={Luminix}
                // onClick={goToWavetronix}
                style={{ cursor: 'pointer', height: '40px' }}
              /> */}
              {/* <div
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'left',
                  borderLeft: '1px solid white',
                  height: '20px',
                  marginTop: 'auto',
                  marginBottom: 'auto'
                }}> */}
              {/* <img
              alt={appHeader}
              src={`${getResourceUrl(env.runMode)}/images/logos/nexus-logo-green.svg`}
              onClick={goToHub}
              style={{ cursor: 'pointer', height: '17px', marginLeft: '20px', marginTop: 'auto', marginBottom: 'auto' }}
            /> */}
              {/* </div> */}
            </>
          </div>
          <Button
            color='inherit'
            style={{
              textTransform: 'none',
              float: 'right'
            }}
            onClick={userProfileClick}>
            <h2 style={{ margin: '0px' }}>John Doe</h2>
            <GridArrowDownwardIcon />
          </Button>
          <Menu anchorEl={actionAnchor} open={profileMenuOpen} onClose={handleActionClose} disableScrollLock={true}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Toolbar />

      {/* <FeatureRequestModal
    setFeatureRequestModalOpen={setFeatureRequestModalOpen}
    featureRequestModalOpen={featureRequestModalOpen}
    env={env}
  /> */}
    </>
  )
}
