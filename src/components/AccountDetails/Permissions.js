import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import PermissionsList from './PermissionsList';

const styles = theme => ({
  textStyle: {
    color: theme.palette.secondary.contrastText,
    textAlign: 'left',
  },
  ulStyle: {
    // listStyleType: 'none'
    color: theme.palette.secondary.contrastText,
  },
  permNameStyle: {
    marginRight: '10px'
  },
});

class Permissions extends Component {

    componentDidMount() {
      // console.log('Permissions mounted')
    }

    render() {
        //const { }
        const { classes, accountInfo } = this.props;

        let permissions = accountInfo.permissions
        var permissionsHierarchy = 0

        var permissionsComponent = 0

        // console.log(accountInfo.permissions)
        if(accountInfo.permissions) { 

          // var items = [
          //   {"Id": "1", "perm_name": "owner",      "parent": ""},
          //   {"Id": "2", "perm_name": "active",     "parent": "owner"},
          //   {"Id": "3", "perm_name": "newaccount", "parent": "chestnut"},
          //   {"Id": "4", "perm_name": "chestnut",   "parent": "owner"},
          // ];
        
          function buildHierarchy(arry) {
          
              var roots = [], children = {};
          
              // find the top level nodes and hash the children based on parent
              for (var i = 0, len = arry.length; i < len; ++i) {
                  var item = arry[i],
                      p = item.parent,
                      target = !p ? roots : (children[p] || (children[p] = []));
          
                  target.push({ value: item });
              }
          
              // function to recursively build the tree
              var findChildren = function(parent) {
                  if (children[parent.value.perm_name]) {
                      parent.children = children[parent.value.perm_name];
                      for (var j = 0, len = parent.children.length; j < len; ++j) {
                          findChildren(parent.children[j]);
                      }
                  }
              };
          
              // enumerate through to handle the case where there are multiple roots
              for (var k = 0, rootlen = roots.length; k < rootlen; ++k) {
                  findChildren(roots[k]);
              }
          
              return roots;
          }
          
          permissionsHierarchy = buildHierarchy(accountInfo.permissions)
          // console.log(permissionsHierarchy)

          permissions = permissionsHierarchy
        }

        // console.log(permissions[0].value)
        if (permissionsHierarchy) {
          permissionsComponent = 
    
          <PermissionsList options={permissions}/>

        } else {
          permissionsComponent = 
            <Typography className={classes.textStyle}>
              permissions loading
            </Typography>
        }

        
        return (
          <div>
            { permissionsComponent }
          </div>
        )
    }
}


export default withStyles(styles)(Permissions);