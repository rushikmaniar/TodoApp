import React from "react";
import {Button, ButtonProps} from "react-native-elements";

interface IButtonWrpProps extends ButtonProps {

}

export default function ButtonWrp(props: IButtonWrpProps) {
    return (
        <Button {...props}/>
    )
}