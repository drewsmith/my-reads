import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

const styles = {
  loading: {
    width: '100%',
    padding: '40px',
    margin: '0 auto',
    textAlign: 'center'
  }
}

const Loading = () => <div style={styles.loading}><CircularProgress /></div>

export default Loading
