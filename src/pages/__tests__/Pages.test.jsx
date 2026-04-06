import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';
import HomePage from '../HomePage';
import FrontendPage from '../FrontendPage';
import BackendPage from '../BackendPage';
import DevOpsPage from '../DevOpsPage';
import GamedevPage from '../GamedevPage';

const renderWithProviders = (component) => {
  return render(
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </I18nextProvider>
  );
};

describe('Pages', () => {
  describe('HomePage', () => {
    it('renders hero section with status', () => {
      renderWithProviders(<HomePage />);
      expect(screen.getByText(/System Status: Optimal|Статус системы: Оптимальный/i)).toBeInTheDocument();
    });

    it('renders main heading', () => {
      renderWithProviders(<HomePage />);
      expect(screen.getByText(/ENGINEERING ELASTIC|СОЗДАНИЕ ЭЛАСТИЧНОЙ/i)).toBeInTheDocument();
    });

    it('renders navigation cards for all domains', () => {
      renderWithProviders(<HomePage />);
      expect(screen.getByText(/Frontend/i)).toBeInTheDocument();
      expect(screen.getByText(/Backend/i)).toBeInTheDocument();
      expect(screen.getByText(/DevOps/i)).toBeInTheDocument();
      expect(screen.getByText(/Gamedev/i)).toBeInTheDocument();
    });
  });

  describe('FrontendPage', () => {
    it('renders frontend hero section', () => {
      renderWithProviders(<FrontendPage />);
      expect(screen.getByText(/FRONTEND/i)).toBeInTheDocument();
      expect(screen.getByText(/ARCHITECTURE|АРХИТЕКТУРА/i)).toBeInTheDocument();
    });

    it('renders technology stack', () => {
      renderWithProviders(<FrontendPage />);
      expect(screen.getByText(/React 19/i)).toBeInTheDocument();
      expect(screen.getByText(/TypeScript/i)).toBeInTheDocument();
    });
  });

  describe('BackendPage', () => {
    it('renders backend hero section', () => {
      renderWithProviders(<BackendPage />);
      expect(screen.getByText(/BACKEND/i)).toBeInTheDocument();
      expect(screen.getByText(/SYSTEMS|СИСТЕМЫ/i)).toBeInTheDocument();
    });

    it('renders scalability section', () => {
      renderWithProviders(<BackendPage />);
      expect(screen.getByText(/SCALABILITY|МАСШТАБИРУЕМОСТЬ/i)).toBeInTheDocument();
    });
  });

  describe('DevOpsPage', () => {
    it('renders devops hero section', () => {
      renderWithProviders(<DevOpsPage />);
      expect(screen.getByText(/DEVOPS/i)).toBeInTheDocument();
    });

    it('renders infrastructure as code card', () => {
      renderWithProviders(<DevOpsPage />);
      expect(screen.getByText(/Infrastructure as Code|Инфраструктура как код/i)).toBeInTheDocument();
    });

    it('renders technology stack', () => {
      renderWithProviders(<DevOpsPage />);
      expect(screen.getByText(/Kubernetes/i)).toBeInTheDocument();
      expect(screen.getByText(/Terraform/i)).toBeInTheDocument();
    });
  });

  describe('GamedevPage', () => {
    it('renders gamedev hero section', () => {
      renderWithProviders(<GamedevPage />);
      expect(screen.getByText(/GAMEDEV/i)).toBeInTheDocument();
      expect(screen.getByText(/INTERACTIVE|ИНТЕРАКТИВ/i)).toBeInTheDocument();
    });

    it('renders game systems section', () => {
      renderWithProviders(<GamedevPage />);
      expect(screen.getByText(/GAME SYSTEMS|ИГРОВЫЕ СИСТЕМЫ/i)).toBeInTheDocument();
    });
  });
});
