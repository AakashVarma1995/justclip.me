import React from 'react'
import {createUseStyles} from 'react-jss';
import theme from './theme'
import Swal from 'sweetalert2'
import config from './config';
// props.match.params.clipid

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
        // display:'grid',
        maxWidth:'1920px',
        margin:'0 auto',
        height:'100%',
        padding:'32px'
    },
    input:{
        height:'calc(100% - 48px)',
        '& textarea':{
            height:'100%',
            width:'100%',
            padding:'16px',
            border:'none',
            outline:'none',
        },
        boxShadow:'2px 2px 33px -12px grey',
        borderRadius:'4px'

    },
    actionButtons:{
        display:'flex',
        justifyContent:'space-between',
        padding:'16px 0px',
        '& button':{
            height:'32px',
            padding:'0px 16px',
            outline:'none',
            border:'none',
            color:theme.color.primary,
            background:'white',
            borderRadius:'4px',
            fontWeight:500,
            cursor:'pointer',
            transition:'0.3s all',
            '&:hover':{
                background:theme.color.primary,
                color:'white'
            }
        }
    },
    clippedView:{
        display:'grid',
        height:'100%',
        placeItems:'center',
    },
    clippedMessageBox:{
        display:'grid',
        gridRowGap:'16px',
        maxWidth:'400px',
        width:"calc(100% - 64px)",
        placeItems:'center',
        textAlign:'center',
        background:'white',
        padding:'32px',
        fontSize:'1.1rem',
        boxShadow:'2px 2px 32px -3px grey',
        lineHeight:'32px',
        borderRadius:'4px',
        
        '& span':{
            color:theme.color.black
        },
        '& a':{
            color:theme.color.primary,
            cursor:'pointer',
            textDecoration:'none'
        },
    },
  
    '@media screen and (orientation:portrait)':{
        background:{
            height:'100vw',
            width:'100vw'
            
        }
    },
    '@media screen and (max-width: 600px)': {
        content:{
            padding:'16px'
        },
        root:{
            // height:'auto',
            // paddingBottom:'32px'
        },
        background:{
            width:'100vw',
            height:'100vw'
        },
        content:{
            // gridTemplateColumns:'1fr'
        }
      },

  })

export default function Clipboard(props) {
    const classes = useStyles()
    const [isClipped, setIsClipped] = React.useState(false)
    const [clipData, setClipData] = React.useState("")
    const [hasGotData, setHasGotData] = React.useState(false)

    React.useEffect(()=>{
        fetch(config.api_endpoint+'/clip?id='+props.match.params.clipid)
        .then(response=>response.json())
        .then(data=>{
            if(data.data)
            {
                setClipData(data.data)
                setHasGotData(true)
            }
        })
    },[])

    function handleClip(){
        if(clipData!=""){
            fetch(config.api_endpoint+'/clip',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                clipboard:props.match.params.clipid,
                data:clipData
            })
        }).then(()=>{
            setIsClipped(true)
        })
        .catch(e=>{
            alert("There seems to be some issue at our servers...")
        })
        }
    }

    function copyClip(){
        navigator.clipboard.writeText(clipData).then(function() {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Text Copied!',
                showConfirmButton: false,
                timer: 1500
              })
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          });
    }

    return (
        <div className={classes.root}>
            <div className={classes.background}>
            </div>
                {
                    !isClipped?
                    <React.Fragment>
                        <div className={classes.content}>
                            <div className={classes.input}>
                                <textarea placeholder="Type/Paste here..." onChange={e=>setClipData(e.target.value)} value={clipData}></textarea>
                            </div>
                            <div className={classes.actionButtons}>
                                <span>CLIP : {props.match.params.clipid}</span>
                                {
                                    hasGotData?<button onClick={copyClip}>COPY</button>:<button onClick={handleClip}>CLIP IT!</button>
                                }
                            </div>
                        </div>
                    </React.Fragment>:
                    <React.Fragment>
                        <div className={classes.clippedView}>
                            <div className={classes.clippedMessageBox}>
                                <img src={'/assets/clipboard.svg'} style={{width:'100%', maxWidth:'267px'}}/>
                                <span>
                                    Your content is now clipped!<br/>
                                    now open <a href={"/"+props.match.params.clipid} target="_blank">https://justclip.me/{props.match.params.clipid}</a> in the other device/browser.
                                </span>
                            </div>
                        </div>
                        
                    </React.Fragment>
                }
                    
            
            
        </div>
    )
}
