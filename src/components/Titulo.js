import React, {Fragment} from 'react'
import { Text, View } from 'react-native'
import GlobalStyles from './GlobalStyles'

export default props => {

    return (
        <Fragment>
            <Text style={GlobalStyles.textG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </Fragment>
    )


}