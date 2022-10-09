import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { statNewNote } from "../../store/journal"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  
  const dispatch= useDispatch ();

  const onClickNewNote = ()=>{
    dispatch( statNewNote() );
  }

  return (
    <JournalLayout>

{/*     <Typography variant="div">Culpa labore qui nostrud et deserunt enim sit occaecat commodo consectetur Lorem. Dolore elit non duis fugiat. Eiusmod tempor do voluptate enim laborum proident. Laborum sit minim consectetur voluptate aute. Amet ad incididunt anim ea pariatur reprehenderit eu. Commodo irure dolore excepteur adipisicing cillum. Qui mollit amet duis commodo nostrud deserunt aute ipsum.</Typography>
 */}
    <NothingSelectedView />

    <IconButton
      onClick={ onClickNewNote }
      size='large'
      sx={{
        color:'white',
        background: 'error.main',
        ':hover':{backgroundColor:'error.main',opacity:0.9},
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
    >
      <AddOutlined sx={{ fontSize:30 }} />
    </IconButton>
    </JournalLayout>
  )
}
