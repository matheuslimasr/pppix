import {AndroidLogo} from "phosphor-react-native";
import BB from "../assets/bb.svg";
import Nu from "../assets/nubank.svg";
import PPP from "../assets/logoPPP.svg";
import {Image} from "react-native";
import React from "react";

interface IDataAppsProps {
    nameApp: string;
    colorIcon: string;
    icon: React.ReactNode;
    iconName: string;
    lenghtApp: string;
}

export const dataApps: IDataAppsProps[] = [
    {
        icon: <PPP width={40} height={40}/>,
        iconName: "default",
        lenghtApp: "252",
        nameApp: "PPPIX",
        colorIcon: "green",
    },
    {
        icon: <BB width={40} height={40}/>,
        iconName: "bb",
        lenghtApp: "252",
        nameApp: "BB",
        colorIcon: "green",
    },
    {
        icon: <Nu width={40} height={40}/>,
        iconName: "nubank",
        lenghtApp: "252",
        nameApp: "Nubank",
        colorIcon: "green",
    },
    {
        icon: <Image source={require(`../assets/bradesco.png`)} style={{width: 40, height: 40}}/>,
        iconName: "bradesco",
        lenghtApp: "252",
        nameApp: "Bradesco",
        colorIcon: "green",
    },
    {
        icon: <Image source={require(`../assets/caixa.png`)} style={{width: 40, height: 40}}/>,
        iconName: "caixa",
        lenghtApp: "252",
        nameApp: "Caixa",
        colorIcon: "green",
    },
    {
        icon: <Image source={require(`../assets/crefisa.png`)} style={{width: 40, height: 40}}/>,
        iconName: "crefisa",
        lenghtApp: "252",
        nameApp: "Crefisa Mais",
        colorIcon: "green",
    },
    {
        icon: <Image source={require(`../assets/inter.png`)} style={{width: 40, height: 40}}/>,
        iconName: "inter",
        lenghtApp: "252",
        nameApp: "Inter",
        colorIcon: "green",
    },
    {
        icon: <Image source={require(`../assets/original.png`)} style={{width: 40, height: 40}}/>,
        iconName: "original",
        lenghtApp: "252",
        nameApp: "Original",
        colorIcon: "green",
    },
    {
        icon: <Image source={require(`../assets/santander.png`)} style={{width: 40, height: 40}}/>,
        iconName: "santander",
        lenghtApp: "252",
        nameApp: "Santander",
        colorIcon: "green",
    },
    {
        icon: <Image source={require(`../assets/itau.png`)} style={{width: 40, height: 40}}/>,
        iconName: "itau",
        lenghtApp: "252",
        nameApp: "Itau",
        colorIcon: "green",
    },
    {
        icon: <Image source={require(`../assets/mercado_pago.png`)} style={{width: 40, height: 40}}/>,
        iconName: "mercadopago",
        lenghtApp: "252",
        nameApp: "Mercado Pago",
        colorIcon: "green",
    },

];
