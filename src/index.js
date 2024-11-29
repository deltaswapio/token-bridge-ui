import {CssBaseline} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";
import {SnackbarProvider} from "notistack";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary";
import {AlgorandContextProvider} from "./contexts/AlgorandWalletContext";
import AptosWalletProvider from "./contexts/AptosWalletContext";
import {EthereumProviderProvider} from "./contexts/EthereumProviderContext";
import {SolanaWalletProvider} from "./contexts/SolanaWalletContext.tsx";
import SuiWalletProvider from "./contexts/SuiWalletContext";
import {TerraWalletProvider} from "./contexts/TerraWalletContext.tsx";
import XplaWalletProvider from "./contexts/XplaWalletContext";
import {theme} from "./muiTheme";
import {store} from "./store";
import Disclaimer from "./components/Disclaimer";

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary>
          <SnackbarProvider maxSnack={3}>
            <SolanaWalletProvider>
              <EthereumProviderProvider>
                <TerraWalletProvider>
                  <AlgorandContextProvider>
                    <XplaWalletProvider>
                      <AptosWalletProvider>
                              <SuiWalletProvider>
                                <HashRouter>
                                  <Disclaimer />
                                  <App />
                                </HashRouter>
                              </SuiWalletProvider>
                      </AptosWalletProvider>
                    </XplaWalletProvider>
                  </AlgorandContextProvider>
                </TerraWalletProvider>
              </EthereumProviderProvider>
            </SolanaWalletProvider>
          </SnackbarProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  </ErrorBoundary>,
  document.getElementById("root")
);
