import {
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {useWallet, WalletConnectButton} from "@sei-js/react";
import { useCallback } from "react";

const useStyles = makeStyles((theme) => ({
  flexTitle: {
    display: "flex",
    alignItems: "center",
    "& > div": {
      flexGrow: 1,
      marginRight: theme.spacing(4),
    },
    "& > button": {
      marginRight: theme.spacing(-1),
    },
  },
  icon: {
    height: 24,
    width: 24,
  },
}));

const WalletOptions = ({
  walletInfo,
  connect,
  isInstalled,
  onClose,
}: {
  walletInfo: string;
  connect: (wallet: any) => void;
  isInstalled: boolean;
  onClose: () => void;
}) => {
  const name = `${walletInfo.charAt(0).toUpperCase()}${walletInfo.slice(1)}`;

  const handleClick = useCallback(() => {
    connect(walletInfo);
    onClose();
  }, [connect, onClose, walletInfo]);

  return (
    <ListItem button onClick={handleClick}>
      <ListItemText>{isInstalled ? name : `Install ${name}`}</ListItemText>
    </ListItem>
  );
};

const SeiConnectWalletDialog = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const {
    connectedWallet
  } = useWallet();
  const classes = useStyles();

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        <div className={classes.flexTitle}>
          <div>Select your wallet</div>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <WalletConnectButton />
    </Dialog>
  );
};

export default SeiConnectWalletDialog;
