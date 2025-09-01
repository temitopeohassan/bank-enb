# Farcaster Mini App Integration

This project has been integrated with Farcaster Mini Apps to provide seamless wallet connectivity and enhanced user experience within the Farcaster ecosystem.

## Features

### 🚀 Auto Wallet Connection
- Automatically connects to the user's wallet when the app loads inside Farcaster
- No need for manual wallet selection or connection dialogs
- Uses the official Farcaster Mini App SDK and Wagmi connector

### 📱 Farcaster Mini App Support
- Detects when running inside a Farcaster client
- Automatically calls the `ready()` function to hide the splash screen
- Provides Farcaster-specific UI indicators and status badges

### 💳 Wallet Integration
- Displays truncated wallet address in the header (e.g., "0x1234...5678")
- Shows wallet connection status and chain information
- Integrates with Base network (Ethereum L2) for optimal performance

### 🎨 Enhanced UI
- Farcaster status indicator showing "Ready" or "Loading..."
- Wallet status component displaying connection details
- Responsive design optimized for mobile Mini App experience

## Technical Implementation

### Dependencies
- `@farcaster/miniapp-sdk` - Official Farcaster Mini App SDK
- `@farcaster/miniapp-wagmi-connector` - Wagmi connector for Farcaster
- `wagmi` - React hooks for Ethereum
- `viem` - Ethereum TypeScript interface

### Key Components

#### FarcasterProvider
- Manages Farcaster Mini App context
- Handles automatic wallet connection
- Provides Farcaster-specific functionality

#### WagmiAppProvider
- Configures Wagmi with Farcaster connector
- Sets up Base network support
- Manages wallet state and connections

#### WalletStatus
- Displays wallet connection information
- Shows balance and chain details
- Provides visual feedback for connection status

### Configuration

The app is configured to:
- Use Base network (Ethereum L2) for optimal gas fees
- Automatically connect to the user's preferred wallet
- Handle Farcaster Mini App lifecycle events
- Provide seamless user experience within Farcaster clients

## Usage

### For Users
1. Open the app within a Farcaster client (e.g., Warpcast)
2. The app will automatically connect to your wallet
3. Your truncated wallet address will be displayed in the header
4. Use the wallet status component to view connection details

### For Developers
1. The app automatically detects Farcaster environment
2. Wallet connection is handled transparently
3. All Farcaster-specific functionality is abstracted through hooks
4. Easy to extend with additional wallet features

## Testing

### Local Development
- Run `npm run dev` to start the development server
- The app will work in both browser and Farcaster environments
- Farcaster features will be disabled in browser mode

### Farcaster Testing
- Use the Mini App Debug Tool in Warpcast desktop
- Enter your app URL and click "Preview"
- Test wallet connection and Mini App functionality

## Benefits

- **Seamless UX**: No wallet selection dialogs or connection steps
- **Native Integration**: Feels like a native part of the Farcaster ecosystem
- **Automatic Optimization**: Automatically configured for optimal performance
- **Future-Proof**: Built on official Farcaster standards and best practices

## Support

For issues or questions about the Farcaster integration:
- Check the [Farcaster Mini Apps documentation](https://miniapps.farcaster.xyz/)
- Review the [Wagmi documentation](https://wagmi.sh/)
- Refer to the [Base network documentation](https://docs.base.org/)
