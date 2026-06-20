import{R as e}from"./iframe-DhLiHYA9.js";import{R as n}from"./zIndexSlice-0EuGNLI-.js";import{C as s}from"./ComposedChart-CGZKvMzU.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CEFwFbVr.js";import{X as f}from"./XAxis-BpfFXf4g.js";import{Y as l}from"./YAxis-lwpN76oK.js";import{R as d}from"./ReferenceDot-COXq0WCK.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-T8RsDcjn.js";import"./index-NG-Tdzng.js";import"./index-BeAu05Eb.js";import"./get-BqOTE_u_.js";import"./resolveDefaultProps-CBPzFJH6.js";import"./isWellBehavedNumber-BNidD9Ks.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CvYHcQFm.js";import"./index-xOxo7x3f.js";import"./index-DKmBjdDb.js";import"./renderedTicksSlice-B1LCQJVr.js";import"./axisSelectors-DL47bbYB.js";import"./d3-scale-B_WyWKG3.js";import"./CartesianChart-BdXEaLDP.js";import"./chartDataContext-Bcb5nIkO.js";import"./CategoricalChart-CN-mt1-6.js";import"./CartesianAxis-dYZ4VxrX.js";import"./Layer-DglRvEKa.js";import"./Text-D4hUpX6-.js";import"./DOMUtils-BQBCpy3J.js";import"./Label-Cv4QmxCb.js";import"./ZIndexLayer-CvBhZ60T.js";import"./types-CH1fGuRR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-pp5BV2FH.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
