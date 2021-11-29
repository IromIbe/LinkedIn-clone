import { Avatar } from "@mui/material";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SendOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";

import "./Post.css";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className='post'>
      <div className='post_header'>
        <Avatar src={photoUrl}>{name && name[0].toUpperCase()}</Avatar>
        <div className='post_info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className='post_body'>
        <p>{message}</p>
      </div>
      <div className='post_buttons'>
        <InputOption
          Icon={ThumbUpOffAltOutlinedIcon}
          title='Like'
          color='gray'
        />
        <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
        <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
        <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
      </div>
    </div>
  );
});

export default Post;
