import type { TreeBoxWithPathProps } from './types';
import { TreeWithPath } from './tree.tsx';
import { Card, Button, Typography } from 'antd';
import type { CardProps, ButtonProps } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { forwardRef } from 'react';

const { Text } = Typography;

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

export const TreeBoxWithPath = forwardRef(
  (
    {
      height = 300,
      clearable = true,
      onChange,
      value,
      options,
      ...rest
    }: TreeBoxWithPathProps,
    _,
  ) => {
    const handleClear = () => {
      const prevKeys = value ? Object.keys(value) : undefined;
      onChange?.(undefined, prevKeys);
    };

    return (
      <Card styles={CardStyles}>
        {clearable ? (
          <Button
            key="-"
            icon={<CloseOutlined />}
            onClick={handleClear}
            size="small"
            style={ButtonStyles}
            type="text"
          />
        ) : undefined}
        {options?.length ? (
          <TreeWithPath
            {...rest}
            options={options}
            key="+"
            height={height}
            onChange={onChange}
            value={value}
          />
        ) : (
          <Text type="secondary">暂无可选项</Text>
        )}
      </Card>
    );
  },
);
