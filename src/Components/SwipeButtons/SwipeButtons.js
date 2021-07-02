import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';
import './SwipeButtons.css';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton  className="repeat_btn">
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton  className="close_btn">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton  className="star_btn">
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton  className="fav_btn">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton  className="fav_btn">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
