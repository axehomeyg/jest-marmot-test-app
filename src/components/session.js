import React from 'react'
import PropTypes from 'prop-types'
import connectComponent from '../connectComponent'

const submit = ref => props => event => {
  event.preventDefault()
  props
    .actions
    .signup(ref.current.value)

  props.actions.gotoWelcome()

  return false
}

const Session = ({actions}) => {
  const nameRef = React.createRef()
  return <form action="/"
    onSubmit={submit(nameRef)({actions})}>
    <h2>Login</h2>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" ref={nameRef} />
    <input type="submit" value="submit" name="submit" data-testid="submit" />
  </form>
}

Session.propTypes = {
  actions: PropTypes.object
}

export default connectComponent(Session)
