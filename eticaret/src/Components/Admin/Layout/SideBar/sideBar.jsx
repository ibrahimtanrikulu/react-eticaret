import React from 'react'

import { Link } from "react-router-dom";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

function Sidebar() {
    return (
        <div style={Style.container}>
            <nav aria-label="main mailbox folders">
                <List>
                    <Link to="categori" style={{ color: "white" }}>
                        <ListItem>
                            <ListItemButton>
                                <ListItemText primary="Kategori">
                                </ListItemText>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to="kullanici" style={{ color: "white" }}>
                        <ListItem >
                            <ListItemButton>
                                <ListItemText primary="Kullanıcı"></ListItemText>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to="urunler" style={{ color: "white" }}>
                        <ListItem>
                            <ListItemButton>
                                <ListItemText primary="Ürünler"></ListItemText>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </Link>

                </List>
            </nav>
        </div>
    )
}

export default Sidebar

const Style = {
    container: {
        width: '100%',
        backgroundColor: '#1976D2',
        margin: '5%',
        borderRadius: '5px',
        color: "white"
    },
}