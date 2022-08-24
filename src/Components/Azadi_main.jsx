import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
// import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./Azadi_main.css";
import axios from "axios";
import { useEffect, useState } from "react";

const drawerWidth = 240;

function Azadi({ setaddcart }) {
  const { window } = setaddcart;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [list, setlist] = useState();

  const getApi = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      // console.log("result", res.data);
      setlist(res.data);
    } catch (e) {
      console.log("Error", e);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  useEffect(() => {
    getApi();
  });
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["CATEGORY", "DESIGN", "COLOR FAMILY", "VOLUME"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["COLLECTION", "FABRIC", "PRODUCT CATEGORY", "SIZE"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
       >
        
      </AppBar> */}
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <div className="container">
            <h4 className="text-center pb-5">AZADI COLLECTION</h4>
            <div className="row hover01">
              {/* <div className="col-md-1"></div> */}

              {list?.map((items, index) => {
                return (
                  <>
                    <div className="col-md-4">
                      <div
                        class="card mb-5"
                        style={{ width: "20rem", height: "32rem" }}
                      >
                        <img
                          src={items?.image}
                          style={{ width: "19rem", height: "20rem" }}
                        />
                        <div class="card-body">
                          <span>{items?.title}</span>
                          <h5 class="card-title">PKR {items?.price}</h5>

                          <button
                            href="#"
                            class="btttn"
                            onClick={() => setaddcart(index)}
                          >
                            ADD TO BAG
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default Azadi;

// <h2 id="demo01">1. Zoom In #1</h2>
// <div class="hover01 column">
//   <div>
//     <figure><img src="https://picsum.photos/300/200?image=244" /></figure>
//     <span>Hover</span>
//   </div>
//   <div>
//     <figure><img src="https://picsum.photos/300/200?image=1024" /></figure>
//     <span>Hover</span>
//   </div>
//   <div>
//     <figure><img src="https://picsum.photos/300/200?image=611" /></figure>
//     <span>Hover</span>
//   </div>
// </div>
