import{R as e}from"./iframe-CWavEj4K.js";import{R as n}from"./zIndexSlice-5FODTzGQ.js";import{C as s}from"./ComposedChart-5wlVBK1U.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dzo1EOTg.js";import{X as f}from"./XAxis-eQhyZl4T.js";import{Y as l}from"./YAxis-DW5tby8v.js";import{R as d}from"./ReferenceDot-BeX2OJms.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bkho8TEt.js";import"./index-CAI0wlC8.js";import"./index-BUN8uoaU.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Di3JUEKf.js";import"./isWellBehavedNumber-DmSAVoQw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BHgaBn1E.js";import"./index-rtKProJN.js";import"./index-CB7M5YEf.js";import"./renderedTicksSlice-BaH7gash.js";import"./axisSelectors-XK5eG7GE.js";import"./d3-scale-BaBPlFPk.js";import"./CartesianChart-0mhtnzxI.js";import"./chartDataContext-B5TlaDO0.js";import"./CategoricalChart-DbdrFP36.js";import"./CartesianAxis-CUeBd0Qu.js";import"./Layer-CGV1iRtS.js";import"./Text-DKOGU3E1.js";import"./DOMUtils-bwyz7eCe.js";import"./Label-BBFntxVE.js";import"./ZIndexLayer-BFe8VyCX.js";import"./types-BmbikVaN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-DxpmSLW5.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
