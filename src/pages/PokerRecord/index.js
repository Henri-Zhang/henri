import React, { useState } from 'react';
import { Paper, Chip, Popper, Button } from '@material-ui/core';
import { TagFaces, ThreeSixtyRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import pokers from './pokers.json';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(1)
  },
  chip: {
    margin: theme.spacing(1)
  },
  'button-container': {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px'
  }
}));

const PokerRecord = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [restPokers, setRestPokers] = useState({ ...pokers });

  const handleClick = ({ e, poker }) => {
    // setAnchorEl(e.currentTarget);
    // setOpen(true);
    restPokers[poker] = restPokers[poker] > 0 ? restPokers[poker] - 1 : 0;
    setRestPokers({ ...restPokers });
  };

  const reset = () => {
    setRestPokers({ ...pokers });
  };

  return (
    <>
      <Popper open={open} placement="bottom" anchorEl={anchorEl} transition>
        弹出
      </Popper>
      <Paper className={classes.paper}>
        {Object.keys(pokers).map(key => (
          <Chip
            key={key}
            className={classes.chip}
            icon={<TagFaces />}
            label={`${key}>>${restPokers[key]}`}
            onClick={e => handleClick({ e, poker: key })}
          />
        ))}
      </Paper>
      <div className={classes['button-container']}>
        <Button variant="outlined" color="primary" onClick={reset}>
          重开一局
          <ThreeSixtyRounded />
        </Button>
      </div>
    </>
  );
};

export default PokerRecord;
