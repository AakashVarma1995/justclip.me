import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    root:{
        height:'55px',
        position:'relative',
        zIndex:1000,
        display:'flex',
        alignItems:'center',
        boxShadow:'0px -12px 9px 10px grey'
    },
    logo:{
        marginLeft:'16px'
    }
  })

export default function Navbar(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.logo}>
                <img src={'/assets/logo.svg'} style={{height:'32px'}}/>
            </div>
        </div>
    )
} 
