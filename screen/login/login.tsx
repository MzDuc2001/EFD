import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {TextField} from '@components';

import tw from '@tw';

export const Login = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <SafeAreaView style={tw` h-[100%] bg-[#FFF5DB] flex-1`}>
      {/* <StatusBar style="auto" /> */}
      {/* <Image
        style={tw`w-[163px] h-[194px] self-center mt-10 mb-10`}
        source={require('../../assets/Logo/Logo.png')}
      /> */}
      <Text style={tw`font-tuv text-[20px] self-center text-[#971B1E]`}>
        Chào Mừng
      </Text>
      <Text style={tw` font-sfuRegular italic self-center mb-5`}>
        Đến với Bánh Cuốn Quyên
      </Text>
      <TextField placeholder="Tên đăng nhập" isSecure={false} />
      <TextField
        placeholder="Mật khẩu"
        isSecure={false}
        isHiding
        isUser={false}
      />
      <View style={tw`flex-row p-4 self-center`}>
        <View style={tw`flex-row ml-8 mr-25`}>
          {/* <Checkbox
            disabled={false}
            color="#FFCB05"
            style={tw`border-cyan mr-2`}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          /> */}
          <Text style={tw`text-[10px] self-center font-sfuRegular`}>
            Duy trì đăng nhập
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={tw`mr-10 text-[10px] font-sfuBold text-[#971B1E]`}>
            Quên mật khẩu
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={tw`bg-[#971B1E] m-2 rounded-[30px] p-2 w-[320px] self-center shadow-lg`}>
        <Text style={tw`self-center font-sfuBold text-[#FFCB05]`}>
          Đăng nhập
        </Text>
      </TouchableOpacity>
      <View style={tw`flex-1 justify-end mb-10`}>
        <Text
          style={tw`font-sfuRegular w-[350px] self-center text-center content-end mt-10`}>
          Cảm ơn bạn đã đến với{' '}
          <Text style={tw`text-[#971B1E]`}>Bánh Cuốn Quyên </Text>
          Chúng tôi sẽ nỗ lực hết mình để đem tới cho bạn những trải nghiệm tốt
          nhất!
        </Text>
      </View>
    </SafeAreaView>
  );
};
