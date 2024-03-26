import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({drawerWidth = 240}) => {
    return (
        <Box 
            component={"nav"}
            sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
        >
            <Drawer
                variant="permanent"
                open
                sx={{
                    display: {xs: "block"},
                    "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth},
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component={"div"}>
                        Waldo Prepucio
                    </Typography>
                </Toolbar>
                <Divider/>

                <List>
                    {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'Fugiat quis sit labore deserunt id culpa esse tempor occaecat aliquip occaecat.'} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    )
}
