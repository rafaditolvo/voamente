import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Você pode fazer o registro de erros aqui
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      // Renderize um componente de fallback de erro aqui
      return <div>Algo deu errado.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
