export default {
  name: 'Cell',
  desc: {
    'en-US': `Cell can be wrapped by Pie, Bar, or RadialBar to specify attributes of each child.
      In Pie , for example, we can specify the attributes of each child node through data,
      but the props of Cell have higher priority`,
    'zh-CN': `Cell 可以作为很多组件（包括 Pie, Bar, RadialBar）的子组件来指定每个子节点的属性配置。
      例如，在 Pie 组件中，我们虽然可以通过 data 来指定每个数据项对应的子节点的属性配置，但是这样会造成数据与配置混乱的问题，
      所以我们提供了这种方式来设置子节点的属性。`,
  },
  props: [
    {
      name: 'fill',
      type: 'String',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The presentation attribute of a rectangle in bar or a sector in pie.',
        'zh-CN': '任何数据项对应的子节点的配置都可以通过 Cell 传递，fill 只是其中一项。',
      },
    },
    {
      name: 'stroke',
      type: 'String',
      defaultVal: 'null',
      isOptional: true,
      desc: {
        'en-US': 'The presentation attribute of a rectangle in bar or a sector in pie.',
        'zh-CN': '任何数据项对应的子节点的配置都可以通过 Cell 传递，stroke 只是其中一项。',
      },
    },
  ],
  parentComponents: ['Bar', 'Scatter', 'Pie', 'RadialBar', 'Funnel'],
};
