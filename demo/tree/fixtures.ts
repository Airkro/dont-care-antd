import type { ExampleConfig, ExampleKey } from './types.d.ts';

// 统一的树形配置对象
export const treeConfigs: Record<ExampleKey, ExampleConfig> = {
  organization: {
    label: '组织架构',
    options: [
      {
        label: '苹果公司',
        value: 'apple',
        ident: 'company',
        children: [
          { label: '人力资源部', value: 'hr', ident: 'department' },
          { label: '技术部', value: 'tech', ident: 'department' },
          {
            label: '市场部',
            value: 'marketing',
            ident: 'department',
            children: [
              { label: '品牌组', value: 'brand', ident: 'team' },
              { label: '推广组', value: 'promotion', ident: 'team' },
            ],
          },
        ],
      },
    ],
    examples: [
      {
        company: 'apple',
        department: 'marketing',
        team: 'promotion',
      },
      {
        x: '123',
        company: 'apple',
        department: 'tech',
      },
    ],
  },

  fileSystem: {
    label: '文件系统',
    options: [
      {
        label: '项目根目录',
        value: 'root',
        children: [
          {
            label: 'src',
            value: 'src',
            children: [
              {
                label: 'components',
                value: 'components',
                children: [
                  { label: 'Header.tsx', value: 'header' },
                  { label: 'Footer.tsx', value: 'footer' },
                  {
                    label: 'Form',
                    value: 'form',
                    children: [
                      { label: 'Input.tsx', value: 'input' },
                      { label: 'Button.tsx', value: 'button' },
                    ],
                  },
                ],
              },
              { label: 'utils.ts', value: 'utils' },
              { label: 'index.ts', value: 'index' },
            ],
          },
          {
            label: 'docs',
            value: 'docs',
            children: [
              { label: 'README.md', value: 'readme' },
              { label: 'API.md', value: 'api-doc' },
            ],
          },
          { label: 'package.json', value: 'package' },
        ],
      },
    ],
    examples: [
      {
        '0': 'root',
        '1': 'src',
        '2': 'components',
        '3': 'form',
        '4': 'button',
      },
      {
        '0': 'root',
        '1': 'docs',
        '2': 'readme',
      },
    ],
  },

  productCategories: {
    label: '产品分类',
    options: [
      {
        label: '电子产品',
        value: 'electronics',
        ident: 'category',
        children: [
          {
            label: '手机',
            value: 'phones',
            ident: 'subcategory',
            children: [
              { label: '智能手机', value: 'smartphones', ident: 'product' },
              { label: '老人机', value: 'feature-phones', ident: 'product' },
            ],
          },
          {
            label: '电脑',
            value: 'computers',
            ident: 'subcategory',
            children: [
              { label: '笔记本', value: 'laptops', ident: 'product' },
              { label: '台式机', value: 'desktops', ident: 'product' },
              { label: '平板电脑', value: 'tablets', ident: 'product' },
            ],
          },
          { label: '配件', value: 'accessories', ident: 'subcategory' },
        ],
      },
      {
        label: '服装',
        value: 'clothing',
        ident: 'category',
        children: [
          { label: '男装', value: 'mens', ident: 'subcategory' },
          { label: '女装', value: 'womens', ident: 'subcategory' },
          { label: '童装', value: 'kids', ident: 'subcategory' },
        ],
      },
    ],
    examples: [
      {
        category: 'electronics',
        subcategory: 'phones',
        product: 'smartphones',
      },
      {
        category: 'clothing',
        subcategory: 'mens',
      },
    ],
  },

  locations: {
    label: '地理位置',
    options: [
      {
        label: '中国',
        value: 'china',
        ident: 'country',
        children: [
          {
            label: '广东省',
            value: 'guangdong',
            ident: 'province',
            children: [
              { ident: 'city', label: '广州市', value: 'guangzhou' },
              { ident: 'city', label: '深圳市', value: 'shenzhen' },
              { ident: 'city', label: '东莞市', value: 'dongguan' },
            ],
          },
          {
            label: '浙江省',
            value: 'zhejiang',
            ident: 'province',
            children: [
              { label: '杭州市', value: 'hangzhou', ident: 'city' },
              { label: '宁波市', value: 'ningbo', ident: 'city' },
              { label: '温州市', value: 'wenzhou', ident: 'city' },
            ],
          },
          {
            label: '江苏省',
            value: 'jiangsu',
            ident: 'province',
            children: [
              { label: '南京市', value: 'nanjing', ident: 'city' },
              { label: '苏州市', value: 'suzhou', ident: 'city' },
            ],
          },
        ],
      },
      {
        label: '美国',
        value: 'usa',
        ident: 'country',
        children: [
          {
            label: '加利福尼亚州',
            value: 'california',
            ident: 'state',
            children: [
              { label: '洛杉矶', value: 'los-angeles', ident: 'city' },
              { label: '旧金山', value: 'san-francisco', ident: 'city' },
            ],
          },
          { label: '纽约州', value: 'new-york', ident: 'city' },
        ],
      },
    ],
    examples: [
      {
        country: 'china',
        province: 'guangdong',
        city: 'guangzhou',
      },
      {
        country: 'usa',
        state: 'california',
        city: 'los-angeles',
      },
    ],
  },

  courses: {
    label: '课程分类',
    options: [
      {
        label: '编程开发',
        value: 'programming',
        ident: 'field',
        children: [
          {
            label: '前端开发',
            value: 'frontend',
            ident: 'track',
            children: [
              { label: 'HTML/CSS', value: 'html-css', ident: 'course' },
              { label: 'JavaScript', value: 'javascript', ident: 'course' },
              { label: 'React', value: 'react', ident: 'course' },
              { label: 'Vue.js', value: 'vue', ident: 'course' },
            ],
          },
          {
            label: '后端开发',
            value: 'backend',
            ident: 'track',
            children: [
              { label: 'Node.js', value: 'nodejs', ident: 'course' },
              { label: 'Python', value: 'python', ident: 'course' },
              { label: 'Java', value: 'java', ident: 'course' },
            ],
          },
          {
            label: '数据库',
            value: 'database',
            ident: 'track',
            children: [
              { label: 'MySQL', value: 'mysql', ident: 'course' },
              { label: 'MongoDB', value: 'mongodb', ident: 'course' },
              { label: 'Redis', value: 'redis', ident: 'course' },
            ],
          },
        ],
      },
      {
        label: '设计',
        value: 'design',
        ident: 'field',
        children: [
          { label: 'UI设计', value: 'ui-design', ident: 'course' },
          { label: 'UX设计', value: 'ux-design', ident: 'course' },
          { label: '平面设计', value: 'graphic-design', ident: 'course' },
        ],
      },
    ],
    examples: [
      {
        field: 'programming',
        track: 'frontend',
        course: 'html-css',
      },
      {
        field: 'programming',
        track: 'backend',
        course: 'nodejs',
      },
    ],
  },
} as const;

// 向下兼容的导出
export const treeTypeOptions = Object.entries(treeConfigs).map(
  ([value, config]) => ({
    label: config.label,
    value,
  }),
);

// const treeOptions = Object.fromEntries(
//   Object.entries(treeConfigs).map(([key, config]) => [key, config.options]),
// );

export const examples = Object.fromEntries(
  Object.entries(treeConfigs).map(([key, config]) => [key, config.examples]),
);
