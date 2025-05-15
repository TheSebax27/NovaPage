import { useEffect, useState } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  minimumTime?: number;
  onComplete?: () => void;
}

const LoadingScreen = ({
  minimumTime = 1000,
  onComplete
}: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    // Cambiamos NodeJS.Timeout por ReturnType<typeof setInterval>
    const progressInterval: ReturnType<typeof setInterval> = setInterval(() => {
      setProgress(prevProgress => {
        // Ralentizar a medida que nos acercamos al 100%
        const increment = (100 - prevProgress) / 10;
        const newProgress = Math.min(prevProgress + increment, 90);
        return newProgress;
      });
    }, 100);

    // Definimos loadingTimeout con tipo correcto
    let loadingTimeout: ReturnType<typeof setTimeout>;

    // Manejar evento de carga de página
    const handleLoad = () => {
      clearInterval(progressInterval);
      
      // Calcular el tiempo transcurrido desde que se montó el componente
      const elapsedTime = Date.now() - startTime;
      
      // Si el tiempo transcurrido es menor que el tiempo mínimo, esperar la diferencia
      if (elapsedTime < minimumTime) {
        const remainingTime = minimumTime - elapsedTime;
        loadingTimeout = setTimeout(() => {
          setProgress(100);
          setTimeout(() => {
            setLoading(false);
            if (onComplete) onComplete();
          }, 500); // Dar tiempo para que la barra de progreso llegue al 100%
        }, remainingTime);
      } else {
        // Si ya hemos excedido el tiempo mínimo, completar inmediatamente
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
          if (onComplete) onComplete();
        }, 500);
      }
    };

    // Cuando todo está cargado
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearInterval(progressInterval);
      clearTimeout(loadingTimeout);
      window.removeEventListener('load', handleLoad);
    };
  }, [minimumTime, onComplete]);

  if (!loading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">NOVA</div>
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loading-text">
          {progress < 100 ? 'Cargando...' : '¡Bienvenido!'}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;