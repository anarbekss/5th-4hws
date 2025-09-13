import React, { useState, useMemo, useCallback } from "react";
import { FilterButton } from "./FilterButton";
import { FilterDelete } from "./FilterDelete";
import style from "./FilteredList.module.css";

export const ExpensiveCalculation = () => {
  const [filter, setFilter] = useState("");

  const [users, setUsers] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Diana" },
    { id: 5, name: "Ethan" },
  ]);

  const filteredUsers = useMemo(() => {
    console.log("Фильтрую пользователей...");
    return users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [users, filter]);

  const addUser = useCallback(() => {
    const newUser = { id: Date.now(), name: `User ${users.length + 1}` };
    setUsers((prev) => [...prev, newUser]);
  }, [users]);

  const deleteUser = () => {
    setUsers((prev) => prev.slice(0, -1));
  };
  const deletUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };
  return (
    <>
      <h2>Список пользователей</h2>
      <input
        type="text"
        placeholder="фильтр по имени"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className={style.container}>
        
        <ul className={style.ulcontainer}>
          
          {filteredUsers.map((user) => (
            
            <div key={user.id} className={style.UserCard}>
              
              <li>{user.name}</li>
              
              <button onClick={() => deletUser(user.id)}>Удалить</button>
            
            </div>
          
          ))}
        
        </ul>
    
      </div>
      <FilterButton onClick={addUser} label={"добавить пользователя"} />
      <FilterDelete onClick={deleteUser} />
    </>
  );
};
