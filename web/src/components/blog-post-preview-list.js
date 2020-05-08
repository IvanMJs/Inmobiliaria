import {Link} from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'
<link href='https://dl.dropboxusercontent.com/s/dcgtnlepsegtqxk/style.css' rel='stylesheet'/>

import styles from './blog-post-preview-list.module.css'

function BlogPostPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Ver mas</Link>
          <h2>Contactame</h2>
          <button type="button" ><a href="https://api.whatsapp.com/send?phone=+54 9 3492 57-3615">Whatsapp</a></button>
          <h4>hugo.d.meyer@gmail.com</h4>
        </div>
        
      )}
    </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
