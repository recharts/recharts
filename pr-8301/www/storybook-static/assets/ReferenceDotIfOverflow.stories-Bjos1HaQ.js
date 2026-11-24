import{R as e}from"./iframe-B6IWu9YI.js";import{R as m}from"./zIndexSlice-CiiKnRRR.js";import{C as s}from"./ComposedChart-7NLEhX0Q.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Fw16Qisq.js";import{X as f}from"./XAxis-Dlj0iAIW.js";import{Y as l}from"./YAxis-MTRfWgoi.js";import{R as d}from"./ReferenceDot-C0q9JBqW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D5gBkMry.js";import"./throttle-BURJLM__.js";import"./index-BTlMcQeh.js";import"./index-BGlqIfcK.js";import"./RechartsWrapper-ut8KRm06.js";import"./axisSelectors-DNbDiKxI.js";import"./polarAxisSelectors-sP0_8T_l.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BnDY_Nfy.js";import"./index-D9tAsY9i.js";import"./index-gbAMyFwS.js";import"./renderedTicksSlice-C5_vrS83.js";import"./index-DqMscQEy.js";import"./fillDefinitions-CycD80fW.js";import"./CartesianChart-CXZ1AepY.js";import"./chartDataContext-CXAoEtMH.js";import"./CategoricalChart-dyk1Sqmj.js";import"./CartesianAxis-Q1_hDZPE.js";import"./Layer-DH6wa-As.js";import"./Text-BO6nkoy7.js";import"./ZIndexLayer-6PrGVGr8.js";import"./Label-DTgwgIlk.js";import"./types-CluQiZar.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-Cj5qq7RO.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
