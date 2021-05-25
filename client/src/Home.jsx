import React from 'react'
import {createUseStyles} from 'react-jss';
import theme from './theme'

const useStyles = createUseStyles({
    root:{
     height:'calc(100vh - 55px)',
     position:'relative'
    },
    background:{
        backgroundImage:'url("/assets/bg.svg")',
        height:'100%',
        width:'100vh',
        position:'absolute',
        right:0,
        bottom:0,
        backgroundSize:'cover',
        backgroundPosition:'right center',
        zIndex:-1
    },
    content:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        maxWidth:'1920px',
        margin:'0 auto',
        height:'100%'
    },
    left:{
        display:'grid',
        placeItems:'center',
        height:'100%',
        padding:'32px'
    },
    leftMatter:{
        '& h1':{
            color:theme.color.black,
            marginBottom:'12px',
            lineHeight:"40px"
        },
        '& h2':{
            color:theme.color.primary,
            marginBottom:'10px'
        },
        '& ul':{
            color:theme.color.black,
            lineHeight:'30px',
            fontSize:"1.1rem"
        },
        '& a':{
            cursor:'pointer',
            textDecoration:'none',
            color:theme.color.primary,
            fontWeight:500
        }
    },
    right:{
        display:'grid',
        placeItems:'center'
    },
    containerBox:{
        boxShadow:'5px 5px 36px -5px grey',
        background:'white',
        padding:'32px',
        borderRadius:'4px',
        display:'grid',
        gridRowGap:'16px',
        '& input':{
            textAlign:'center',
            outline:'none',
            border:'2px solid lightgrey',
            padding:'8px 20px',
            borderRadius:'4px'
        },
        '& button':{
            textAlign:'center',
            outline:'none',
            border:'none',
            background:theme.color.primary,
            color:'white',
            padding:'10px 20px',
            borderRadius:'4px',
            transition:'.3s all',
            '&:hover':{
                background:theme.color.primaryHover,
                cursor:'pointer'
            }

        }
    },
    '@media screen and (orientation:portrait)':{
        background:{
            height:'100vw',
            width:'100vw'
            
        }
    },
    '@media screen and (max-width: 600px)': {
        root:{
            height:'auto',
            paddingBottom:'32px'
        },
        background:{
            width:'100vw',
            height:'100vw'
        },
        content:{
            gridTemplateColumns:'1fr'
        }
      },

  })

export default function Home() {
    const classes = useStyles()
    const [clipName, setClipName] = React.useState("");

    function openClip(e){
        e.preventDefault();
        if(clipName!=="")
            window.location.href=clipName


    }

    return (
        <div className={classes.root}>
            <div className={classes.background}>
            </div>
            <div className={classes.content}>
                    <div className={classes.left}>
                        <div className={classes.leftMatter}>
                            <h1>
                                Welcome to <span style={{color:theme.color.primary}}>justclip.me</span> - The Online Clipboard
                            </h1>
                            <h2>
                            Instructions:
                            </h2>
                            <ul>
                                <li>Open any URL that starts with justclip.me. e.g. <a href="https://justclip.me/aakash">https://justclip.me/aakash</a></li>
                                <li>Paste in anything you want.</li>
                                <li>Open the same URL on the another device and get your stuff.</li>
                                <li>That's it. Enjoy!</li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.containerBox}>
                            <img src={'/assets/clipboard.svg'} alt="ClipBoard Icon"/>
                            <form style={{
                                display:'grid',
                                gridRowGap:'16px'
                            }} onSubmit={e=>openClip(e)}>
                            <input type='text' placeholder="Enter Clipboard Name" onChange={(e)=>setClipName(e.target.value)}/>
                            <button>GO!</button>
                            </form>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}
