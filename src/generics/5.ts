export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Замініть наступний код на версію за допомогою Record
// const RoleDescription = {
//   admin: "Admin User",
//   editor: "Editor User",
//   guest: "Guest User",
// };

type Role = "admin" | "editor" | "guest";

type Description = Record<Role, string>;

const roleDescription: Description = {
  admin: "admin",
  editor: "editor",
  guest: "guest",
};
