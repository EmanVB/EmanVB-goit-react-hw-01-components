import { FriendListItem } from "./FriendListItem"

export const FriendList = ({ friends }) => {
  return (
      <ul className="friend-list">
      {friends.map(
        ({ id, name, avatar, isOnline }) => (
            <FriendListItem
              key={id}
              name={name}
              avatar={avatar}
              isOnline={isOnline}
            />
          ))}
    </ul>
  );
}
