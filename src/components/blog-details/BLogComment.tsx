import BlogCommentForm from '@/form/blog-comment-form';
import React from 'react';

const BLogComment = () => {
  
    return (
        <div className="blog__comment">
        <h3>Leave a Comment</h3>
        <BlogCommentForm/>
      </div>
    );
};

export default BLogComment;