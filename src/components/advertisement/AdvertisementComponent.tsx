// - Import react components
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'
import moment from 'moment/moment'
import Linkify from 'react-linkify'
import copy from 'copy-to-clipboard'
import { getTranslate, getActiveLanguage } from 'react-localize-redux'
import { Map } from 'immutable'

// - Material UI
import Card, { CardActions, CardHeader, CardMedia, CardContent } from 'material-ui/Card'

// - Import actions
import {IAdvertisementComponentProps} from './IAdvertisementComponentProps'
import {IAdvertisementComponentState} from './IAdvertisementComponentState'

// - Create component class
export class AdvertisementComponent extends Component<IAdvertisementComponentProps, IAdvertisementComponentState> {

  /**
   * Component constructor
   * @param  {object} props is an object properties of component
   */
  constructor (props: IAdvertisementComponentProps) {
    super(props)
    this.state = {
      /**
       * Not done yet
       */
    }
  }

  /**
   * Reneder component DOM
   * @return {react element} return the DOM which rendered by component
   */
  render () {
    return(
        <Card>
          <CardHeader title='Sponsored'>
          </CardHeader>
          <CardContent>
            <img src='https://loremflickr.com/470/240' />
          </CardContent>
        </Card>
    )
  }
}

export default AdvertisementComponent as any
