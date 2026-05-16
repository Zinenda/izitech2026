/// <reference types="astro/client" />

interface Window {
  netlifyIdentity?: {
    on(event: 'init', callback: (user: unknown) => void): void;
    open(view?: 'login' | 'signup'): void;
  };
}
