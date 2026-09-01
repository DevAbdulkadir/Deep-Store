import React, { createContext, useContext, useState, useEffect } from 'react';

// --- AUTH CONTEXT ---
const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({"name":"Abdullah","email":"abdullahi@gmail.com", "password": "12345tyu"});

  useEffect(() => {
    const savedUser = localStorage.getItem('deepstore_user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('deepstore_users') || '[]');
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      const { password: _, ...userSession } = foundUser;
      setUser(userSession);
      localStorage.setItem('deepstore_user', JSON.stringify(userSession));
      return true;
    }
    return false;
  };

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('deepstore_users') || '[]');
    if (users.find(u => u.email === email)) return false;

    const newUser = { id: Date.now().toString(), name, email, password };
    users.push(newUser);
    localStorage.setItem('deepstore_users', JSON.stringify(users));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('deepstore_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

// --- CART CONTEXT ---
const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('deepstore_cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('deepstore_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};