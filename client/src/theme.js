// color design tokens export
export const tokensDark = {
  grey: {
    0: '#ffffff', // manually adjusted
    10: '#f8f9fa', // manually adjusted
    50: '#f1f3f4', // manually adjusted
    100: '#e3e5e8',
    200: '#c7cad1',
    300: '#abafba',
    400: '#8f95a3',
    500: '#737a8c',
    600: '#5c6270',
    700: '#454954',
    800: '#2e3138',
    900: '#17181c',
    1000: '#0d0e10', // manually adjusted
  },
  primary: {
    // Deep emerald green - professional and trustworthy
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  secondary: {
    // Warm amber - perfect complement to emerald
    50: '#fffbeb', // manually adjusted
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  accent: {
    // Cool slate blue for accents and highlights
    100: '#e2e8f0',
    200: '#cbd5e1',
    300: '#94a3b8',
    400: '#64748b',
    500: '#475569',
    600: '#334155',
    700: '#1e293b',
    800: '#0f172a',
    900: '#020617',
  },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[300],
              dark: tokensDark.primary[600],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[400],
              light: tokensDark.secondary[300],
              dark: tokensDark.secondary[600],
            },
            accent: {
              ...tokensDark.accent,
              main: tokensDark.accent[400],
              light: tokensDark.accent[300],
              dark: tokensDark.accent[600],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[900],
              alt: tokensDark.grey[800],
              paper: tokensDark.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.primary[600],
              light: tokensDark.primary[100],
              dark: tokensDark.primary[800],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[200],
              dark: tokensDark.secondary[800],
            },
            accent: {
              ...tokensLight.accent,
              main: tokensDark.accent[600],
              light: tokensDark.accent[200],
              dark: tokensDark.accent[800],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[10],
              paper: tokensDark.grey[0],
            },
          }),
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Inter', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  };
};
