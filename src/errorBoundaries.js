import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {error: false}
  }

  componentDidCatch(error, errorInfo) {
    this.setState({error: true})
  }

  render() {
    if(this.state.error) {
      return [
        <h2 key="uniq1">Error boundaries</h2>,
        <p key="uniq2">You can use componentDidCatch for handling errors thrown in children component.</p>,
        <p key="uniq3">componentDidCatch can be used only for class based components.</p>,
      ]
    }
    return this.props.children
  }
}

const RenderError = () => {
  return (
    <ErrorBoundary>
      <ErrorComponent/>
    </ErrorBoundary>
  )
}

const ErrorComponent = () => {
  throw Error('Error happens...')
}

export default RenderError