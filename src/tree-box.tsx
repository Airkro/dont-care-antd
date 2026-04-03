import type { TreeWithPathProps } from './types';
import { TreeWithPath } from './selector.tsx';
import { Card, Button } from 'antd';
import type { CardProps, ButtonProps } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const CardStyles: CardProps['styles'] = {
  body: {
    padding: 10,
    position: 'relative',
  },
};

const ButtonStyles: ButtonProps['style'] = {
  position: 'absolute',
  right: 8,
  top: 8,
  zIndex: 1,
};

export interface TreeBoxProps extends TreeWithPathProps {
  /** 是否显示清空按钮 */
  clearable?: boolean;
}

export function TreeBox({
  height = 300,
  clearable = true,
  onChange,
  value,
  ...rest
}: TreeBoxProps) {
  const handleClear = () => {
    const prevKeys = value ? Object.keys(value) : undefined;
    onChange?.(undefined, prevKeys);
  };

  return (
    <Card styles={CardStyles}>
      {clearable ? (
        <Button
          icon={<CloseOutlined />}
          onClick={handleClear}
          size="small"
          style={ButtonStyles}
          type="text"
        />
      ) : undefined}
      <TreeWithPath
        {...rest}
        height={height}
        onChange={onChange}
        value={value}
      />
    </Card>
  );
}
