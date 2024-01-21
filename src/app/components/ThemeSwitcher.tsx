"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from "@nextui-org/react";
import { SunIcon } from '@/app/icons/SunIcon';
import { MoonIcon } from '@/app/icons/MoonIcon';

interface ThemeSwitcherProps {
  // Add any additional props if needed
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: string) => setTheme(newTheme);

  return (
    mounted && (
      <Switch
        isSelected={theme === 'light'}
        size="lg"
        color="primary"
        thumbIcon={({ isSelected, className }) => (
          isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
        )}
        onChange={() => handleThemeChange(theme === 'light' ? 'dark' : 'light')}
      >

      </Switch>
    )
  );
};

export default ThemeSwitcher;
