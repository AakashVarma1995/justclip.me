import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    root:{
        height:'55px',
        position:'relative',
        zIndex:1000,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        boxShadow:'0px -12px 9px 10px grey'
    },
    logo:{
        marginLeft:'16px'
    },
    git:{
        background:'#530BBD',
        padding:'4px',
        borderRadius:'4px',
        marginRight:'16px',
        transition:'.3s all',
        '&:hover':{
            background:'#F31489'
        }
    }
  })

export default function Navbar(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.logo}>
                <a href="/"><img src={'/assets/logo.svg'} style={{height:'32px'}} alt="JustClipMe Logo"/></a>
            </div>
            <div className={classes.git}>
                <a href="https://github.com/AakashVarma1995/justclip.me" target="_blank" rel="noreferrer"><img src={'/assets/github.svg'} style={{height:'32px'}} alt="GitHub Repo Link"/></a>
            </div>
        </div>
    )
} 
