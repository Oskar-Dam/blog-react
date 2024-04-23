/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionList(props) {
    const {data, title} = props;

  return (
    <div>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            {title}
            </AccordionSummary>
            {data.length > 0 ? 
                data.map((item, index) => <AccordionDetails key={index}>{item}</AccordionDetails> )
            : 
                <AccordionDetails>No data</AccordionDetails>
            }
            
                     
        </Accordion> 
    </div>
  )
}

export default AccordionList