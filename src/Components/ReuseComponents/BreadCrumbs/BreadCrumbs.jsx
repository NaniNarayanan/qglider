import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';




export default function BreadCrumbs(props) {

    function isLast(index){
        return index === props.crumbs.length -1;
    }

  return (
    <>
    <nav className="row justify-content-center mt-4">
        <Breadcrumbs >
            {props.crumbs?.map((crumb, ci) => {
            const disabled = isLast(ci);

            return (
                <Link
                key={ci}
                to={disabled ? null : props.paths[ci]}
                className={` ${disabled ? 'disabled' : ''}`}
                color={disabled ? 'inherit' : 'primary'}
                onClick={() => props.selected(crumb)}
                underline={disabled ? 'none' : 'hover'}
                style={{textDecoration:"none", color: disabled ? '#0B5EE3' : '#676666', fontSize:"12px", fontWeight:"700"}}
                >
                {crumb}
                </Link>
            );
            })}
        </Breadcrumbs>
        </nav>
    </>
  )
}
