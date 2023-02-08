import styles from './PostModal.module.scss';
import clsx from 'clsx'
import { useContext, useState } from 'react';
import { AuthContext } from "../../Context/AuthProvider";


function PostModal(props) {

    const data= useContext(AuthContext)

    const [inputValue,setInputValue] =useState('');

    const reset =(e) => {
        setInputValue('');
        props.handleClick(e);
    }

    return (
         <>
             { props.showModal === 'open' &&
                (<div className={clsx(styles.wrapper)}>
                    <div className={clsx(styles.content)}>
                    <header className={clsx(styles.header)}> 
                        <h2>Create a post</h2>
                        <button onClick={(event) => reset(event)} >
                            <img src='/images/close-icon.svg' alt='close'/>
                        </button>
                    </header>
                    <div className={clsx(styles.share_box)}>
                        <div className={clsx(styles.user_info)}>
                            <img src={data.photoURL} alt='' />
                            <span>{data.displayName}</span>
                        </div>
                        <div className={clsx(styles.input_box)}>
                            <textarea  
                                value={inputValue}
                                autoFocus={true}
                                placeholder='What do you want to talk about ?' 
                                onChange={e => setInputValue(e.target.value)}
                            />
                        </div>

                        <div className={clsx(styles.action)}>
                           <div className={clsx(styles.assets)}>
                                <button>
                                    <img  src='/images/image-icon.svg'/>
                                </button>
                                <button>
                                    <img  src='/images/youtube-icon.svg'/>
                                </button>
                                <button>
                                    <img  src='/images/document-icon.svg'/>
                                </button>
                                <button>
                                    <img  src='/images/job-icon.svg'/>
                                </button>
                                <button>
                                    <img  src='/images/occation-icon.svg'/>
                                </button>
                                <button>
                                    <img  src='/images/poll-icon.svg'/>
                                </button>
                                <button>
                                    <img  src='/images/more-icon.svg'/>
                                </button>
                           </div>
                           <div className={clsx(styles.share_state)}>
                               <button>
                                    <img src='/images/share_state-icon.svg' alt='' />
                                    <span>Anyone</span>
                               </button>
                           </div>
                           <button className={clsx(styles.post)}   disabled={!inputValue ? true :false}>Post</button>
                        </div>
                    </div>
                </div>
            </div>)}
         </>
         );
}

export default PostModal;