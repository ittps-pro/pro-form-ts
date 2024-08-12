import { PlusOutlined } from "@ant-design/icons";
import { App, Card } from "antd";
import {
  DrawerForm,
  ModalForm,
  ProForm,
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import { Button, Space, message } from "antd";
import React, { useState, createContext } from "react";

import axios from "axios";

import * as Keenetic from "./Keenetic";

interface ModalViewConfig {}
/* () => {
  setModalVisit(true);
}*/
// function Buttons(a) {
// const [s, setS] = useState(a)
//  return <Button
//   type="primary"
//   onClick={setS(true)}
// >

//   <PlusOutlined />
//   Modal
// </Button>
// }
import { useId } from "react";
const ThemeContext = createContext("light");
const AuthContext = createContext(null);

// https://api.bitbucket.org/2.0/workspaces/ittps/pipelines-config/identity/oidc
// async function Data()  {

//   try {
//   let {data, error} = await axios.get('/rci')
//     console.log(data)
//   } catch (error) {

//   }

// }

function getFields(name: string) {}

export default () => {
  const [theme, setTheme] = useState("dark");
  const [currentUser, setCurrentUser] = useState({ name: "tpa" });

  const [modalVisit, setModalVisit] = useState(false);
  const [drawerVisit, setDrawerVisit] = useState(false);

  //...AuthContext
  return (
    <App>
      <Card title={"Page"} extra={"1"}>
        <ProForm>
          <ProFormSelect options={[1, 2, 3]} />

          <ProFormText />
        </ProForm>
      </Card>
    </App>
  );
};
