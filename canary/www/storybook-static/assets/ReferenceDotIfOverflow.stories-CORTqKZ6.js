import{R as e}from"./iframe-DzEunvJg.js";import{R as m}from"./zIndexSlice-CJoRXBvc.js";import{C as p}from"./ComposedChart-B9Ez2Onq.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-1Yhvvtnk.js";import{X as f}from"./XAxis-C3LhqR3k.js";import{Y as l}from"./YAxis-V-QVlkzt.js";import{R as d}from"./ReferenceDot-DotpVvQe.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-vVnHJdwk.js";import"./index-CVYp0833.js";import"./index-C0Oun7dU.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D1VbkECB.js";import"./isWellBehavedNumber-CrPdUCJx.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DKQAPH3P.js";import"./axisSelectors-BmcAHay7.js";import"./d3-scale-DAMVQCbA.js";import"./index-9AaHNtLQ.js";import"./index-T5bTpYjM.js";import"./renderedTicksSlice-CwBlu1JG.js";import"./index-XWQatYSr.js";import"./CartesianChart-xll3miOv.js";import"./chartDataContext-DrYFcmx6.js";import"./CategoricalChart-Dkc-ZZ1N.js";import"./CartesianAxis-9IOHN060.js";import"./Layer-Cm7XhTpW.js";import"./Text-BLWA_Ab4.js";import"./DOMUtils-BmAhd2hZ.js";import"./useId-BuMWUv2m.js";import"./useBackwardsCompatibleTheme-RcberNo1.js";import"./Label-CI5iW8Hf.js";import"./ZIndexLayer-C6u4DcMx.js";import"./types-BCX_XL2l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-Dusyebbr.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
