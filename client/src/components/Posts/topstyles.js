import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  h1: {
    textAlign: 'center',
    color: '#ffdd94',
    fontSize: '2rem',
    marginTop: '1rem',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    maxWidth: '300px',
    backgroundColor: '#CCABDB',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    fontWeight: 'bold',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
    fontWeight: 'bold',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    fontWeight: 'bold',
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
});

export default useStyles;
