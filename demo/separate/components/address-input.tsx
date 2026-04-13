import { Input, Space } from 'antd';

export interface AddressValue {
  city?: string;
  street?: string;
}

interface AddressInputProps {
  value?: AddressValue;
  onChange?: (value: AddressValue) => void;
}

export function AddressInput({ value, onChange }: AddressInputProps) {
  const handleChange = (field: keyof AddressValue, fieldValue: string) => {
    onChange?.({ ...value, [field]: fieldValue });
  };

  return (
    <Space.Compact>
      <Input
        placeholder="城市"
        allowClear
        value={value?.city}
        onChange={(e) => handleChange('city', e.target.value)}
      />
      <Input
        placeholder="街道"
        allowClear
        value={value?.street}
        onChange={(e) => handleChange('street', e.target.value)}
      />
    </Space.Compact>
  );
}
