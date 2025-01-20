# ElimuChain - Secure Academic Credential Verification

Welcome to **ElimuChain**!

ElimuChain is an innovative platform aimed at transforming academic credential verification in Kenya. By harnessing the power of both the **Lisk blockchain** for scalable sidechain functionality and **Solidity** for smart contract execution on the Ethereum Virtual Machine (EVM), we are dedicated to combating educational fraud, streamlining verification processes, and fostering trust in academic qualifications.

## Project Overview

**Purpose**: ElimuChain provides a secure, transparent, and immutable system for issuing, managing, and verifying academic credentials. By integrating blockchain technology, we ensure the authenticity of educational certificates, reducing fraud and enhancing verification efficiency for educational institutions, students, and employers.

**Technology Stack**:

- **Front-end**: TBD (e.g., React, Vue.js)
- **Backend**: Solidity (Smart Contracts) on Ethereum/Lisk's EVM
- **Blockchain**: Lisk for sidechain scalability; Ethereum for smart contract functionality

**Target Audience**:

- Educational Institutions (Universities, Colleges, Schools)
- Students and Graduates
- Employers
- Government Bodies
- International Educational Partners

## Functionality

ElimuChain offers key functionalities:

- **Credential Issuance**: Institutions can issue digital certificates via Solidity smart contracts, recorded on the blockchain.
- **Verification**: Employers or authorized parties can verify credentials instantly using smart contract functions with unique certificate IDs.
- **Data Privacy**: Users maintain control over their data through blockchain's cryptographic methods.
- **Interoperability**: Designed for seamless integration with existing educational systems.

## Unique Features

- **Hybrid Blockchain Approach**: Combines Lisk's scalability with Ethereum's Solidity for robust and secure backend operations.
- **User Empowerment**: Students have direct control over their educational data, managing access permissions through smart contracts.
- **Cultural Adaptation**: Specifically tailored to meet the needs of the Kenyan educational context.
- **Anti-Fraud Mechanism**: The immutable nature of blockchain ensures the integrity of issued credentials.

## Installation

### Prerequisites:

- Node.js (version 14 or higher)
- Lisk SDK (version 5.x)
- Truffle Suite for Solidity development
- Git
- An Ethereum-compatible development environment (e.g., Ganache for local testing)

### Steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Adamur-Tribe/elimuchain
   cd elimuchain
   ```

2. **Install Node Dependencies**:

   ```bash
   npm install
   ```

3. **Install Solidity Dependencies**:

   - Ensure Truffle is installed globally:

   ```bash
   npm install -g truffle
   ```

   - Install project-specific Solidity dependencies:

   ```bash
   truffle compile
   ```

4. **Configure Lisk Node & Ethereum Environment**:

   - Edit `config.json` for Lisk node settings.
   - Set up your local Ethereum network or use an existing testnet.

5. **Start the Node**:
   ```bash
   npm run start
   ```

For development mode:

```bash
npm run dev
```

## Usage

### For Educational Institutions:

Deploy and interact with the `CertificateIssuer` contract:

```solidity
contract CertificateIssuer {
    function issueCertificate(address student, string memory course, string memory institution) public;
    // Additional functions...
}
```

### For Employers or Verifiers:

Verify credentials using the `CertificateVerifier` contract:

```solidity
contract CertificateVerifier {
    function verifyCertificate(uint certificateId) public view returns (bool);
}
```

### For Students:

Access your certificates through the frontend or directly interact with contracts.

## Contributing

We welcome contributions to enhance ElimuChain! Here’s how you can help:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add AmazingFeature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a pull request.

Please ensure your code adheres to our standards and passes all tests. Refer to our [Contribution Guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.
