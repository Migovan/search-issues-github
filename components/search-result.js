import React, { Fragment } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Div = styled.div`
    padding: 10px;
    border-radius: 5px;
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin: 10px 0;
    }
    li > a {
      color: #24292e; 
      text-decoration: none;    
    }
    li > a:hover {
      text-decoration: underline;    
    }
`;

const SearchResult = ({ result }) => {
  return (
    <Fragment>
      {result.length > 0 
        &&  <Div>
              <ul>
                {result.flat().map(item => {
                  return (
                    <li key={item.id}>
                      <Link href={item.html_url}>
                        <a target="_blank">{item.title}</a>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </Div>}
    </Fragment>    
  )
}


Div.propTypes = {
  result: PropTypes.array
}

export default SearchResult
