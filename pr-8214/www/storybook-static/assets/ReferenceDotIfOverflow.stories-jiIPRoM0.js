import{R as e}from"./iframe-DhvgJ3Tw.js";import{R as m}from"./zIndexSlice-DT7jNbQo.js";import{C as s}from"./ComposedChart-Dp8vMI0e.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BO8o_HK3.js";import{X as f}from"./XAxis-DydSoLLm.js";import{Y as l}from"./YAxis-BAhPmXz7.js";import{R as d}from"./ReferenceDot-pp5sW-2-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CKLGeLep.js";import"./throttle-BWeAvDIL.js";import"./index-CU5o85y3.js";import"./index-CQNEDz1o.js";import"./RechartsWrapper-683IwuKd.js";import"./axisSelectors-aIh5be-p.js";import"./polarAxisSelectors-AqVQ4mq9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DUY8Yxll.js";import"./index-BtmI4qTy.js";import"./index-D2OmVz2d.js";import"./renderedTicksSlice-Bh9hRh5k.js";import"./index-D8T5pADG.js";import"./fillDefinitions-Ckysr9fo.js";import"./CartesianChart-BOsacCQH.js";import"./chartDataContext-OAAhd7eo.js";import"./CategoricalChart-C0ZN3rz5.js";import"./CartesianAxis-CudRQX5X.js";import"./Layer-B7fk7F56.js";import"./Text-oQHtFAiE.js";import"./ZIndexLayer-jkdgENMR.js";import"./Label-lswEF7zo.js";import"./types-L33J7ZDL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-Bpcl5rlN.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
