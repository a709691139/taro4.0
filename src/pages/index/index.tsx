import { useState } from 'react';
import { View } from '@tarojs/components';

const Index = () => {
  const [staticed, setStaticed] = useState(false);
  return (
    <View>
      formStaticed: {JSON.stringify(staticed)}
      <View
        onClick={() => {
          console.log('old value ', staticed);
          setStaticed(!staticed);
        }}>
        切换
      </View>
    </View>
  );
};
export default Index;
