import { useState, useEffect } from "react";
import Api from "../api";
import "./NewChat.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NewChat = ({ user, chatlist, show, setShow }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const getList = async () => {
      if (user !== null) {
        let results = await Api.getContactList(user.id);
        setList(results);
      }
    };
    getList();
  }, [user]);
  const addNewChat = async (user2) => {
    await Api.addNewChat(user, user2);
    handleClose();
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="newChat" style={{ left: show ? 0 : -415 }}>
      <div className="newChat--head">
        <div className="newChat--backButton" onClick={handleClose}>
          <ArrowBackIcon style={{ color: "#FFFFFF" }} />
        </div>
        <div className="newChat--headTitle">Nova conversa</div>
      </div>
      <div className="newChat--list">
        {list.map((item, key) => (
          <div
            className="newChat--item"
            key={key}
            onClick={() => addNewChat(item)}
          >
            <img className="newChat--itemAvatar" src={item.avatar} alt="" />
            <div className="newChat--itemName">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewChat;
