import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContext from "./context/theme";

// Pages and Components
import RecipesList from "./pages/RecipesList";
import UserList from "./components/users/userList";
import PrductDetails from "./pages1/ProductDetails";
import ProductsList from "./pages1/ProductsList";
import Parent from "./components/todo/parent";
import Header from "./components/header";
import AddRecipe from "./pages/add-recipe";
import RecipeCounter from "./pages/RecipeCounter";
import Setting from "./pages/setting";
import NotFound from "./pages/NotFound";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<RecipesList />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/todos" element={<Parent />} />
          <Route path="/product" element={<ProductsList />} />
          <Route path="/recipe-counter" element={<RecipeCounter />} />
          <Route path="/product-details/:id" element={<PrductDetails />} />
          <Route path="/recipe-details/:id" element={<RecipeDetails />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
