import ChatWindow from "./ChatWindow";
import UserList from "./UserList";

const ChatLayout = () => {
  return (
    <main className="flex flex-1">
      {/* User List */}
      <UserList />

      {/* Chat Window */}
      <ChatWindow />
    </main>
  );
};

export default ChatLayout;
