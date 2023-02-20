import MainWrapper from "@/03.components/Containers/MainWrapper/MainWrapper";
import React from "react";
import s from "./Header.module.scss";
import { DiCodeigniter } from "react-icons/di";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSkipPrevious, BiSkipNext, BiPause, BiPlay } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiBell } from "react-icons/hi";
import ContentWrapper from "@/03.components/Containers/ContentWrapper/ContentWrapper";
import Avatar from "@/02.UI/Avatar/Avatar";
import Button from "@/02.UI/Button/Button";
import ModalActionsWrapper from "@/02.UI/ModalActions/ModalActionsWrapper/ModalActionsWrapper";
import ModalActionsListBox from "@/02.UI/ModalActions/ModalActionsListBox/ModalActionsListBox";
import Input from "@/02.UI/Input/index/Input";
import { useAppSelector } from "@/01.shared/hooks/redux";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const { isAuth } = useAppSelector(state => state.user);
  return (
    <div className={s.main}>
      <MainWrapper>
        <div className={s.logo_box}>
          <DiCodeigniter size={24} className={s.logo} color="#ce5e30" />
          <span className={s.title}>Огонёк</span>
        </div>
        <ContentWrapper>
          <div className={s.content}>
            <div className={s.left}>
              <Input icon={<AiOutlineSearch />} placeholder="Поиск" />
              {isAuth && (
                <>
                  <Button _flex>
                    <HiBell size={24} color={"var(--accent-faded)"} />
                  </Button>
                  <div className={s.player}>
                    <div className={s.player_buttons}>
                      <Button _flex>
                        <BiSkipPrevious
                          size={24}
                          color={"var(--accent-faded)"}
                        />
                      </Button>
                      <Button _flex>
                        <BiPause size={24} color={"var(--accent-faded)"} />
                      </Button>
                      {/* <BiPlay size={20} color={"var(--accent-faded)"}/> */}
                      <Button _flex>
                        <BiSkipNext size={24} color={"var(--accent-faded)"} />
                      </Button>
                    </div>
                    <span>Singer - Some song</span>
                  </div>
                </>
              )}
            </div>
            {isAuth && (
              <ModalActionsWrapper>
                <Button _flex>
                  <Avatar size={2}>
                    <div />
                  </Avatar>
                  <MdKeyboardArrowDown
                    size={20}
                    color={"var(--accent-faded)"}
                  />
                </Button>
                <ModalActionsListBox></ModalActionsListBox>
              </ModalActionsWrapper>
            )}
          </div>
        </ContentWrapper>
      </MainWrapper>
    </div>
  );
};

export default Header;
