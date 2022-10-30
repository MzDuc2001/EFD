import React from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

export interface TextField {
  placeholder?: string;
  isSecure?: boolean;
  icon?: string;
  isHiding?: boolean;
  isUser?: boolean;
  //onChangeText: (text: unknown) => void;
}
export const TextField = ({
  placeholder,
  isSecure,
  isUser = true,
  isHiding = false,
}: //onChangeText,
TextField) => {
  return (
    <View
      style={tw`flex-row bg-white m-2 rounded-[30px] w-[320px] self-center shadow-lg`}>
      {/* <Image
        source={
          isUser
            ? require('../../../assets/Logo/ic-user.png')
            : require('../../../assets/Logo/ic-password.png')
        }
        style={tw`m-2 p-2 ml-4 mr-4 h-[18px] w-[10px] items-center`}
      /> */}
      <TextInput
        style={tw` text-[12px] self-center flex-1`}
        placeholder={placeholder}
        inlineImageLeft="search_icon"
        secureTextEntry={isSecure}
        //onChange={(text) => onChangeText(text)}
      />
      {isHiding && (
        <TouchableOpacity style={tw`self-center mr-3`}>
          {/* <Image
            style={tw`h-[18px] w-[25px]`}
            source={require('../../../assets/Logo/ic-hiding.png')}
          /> */}
        </TouchableOpacity>
      )}
    </View>
  );
};
