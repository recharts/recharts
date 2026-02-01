import{e}from"./iframe-BJ3b3BfY.js";import{R as s}from"./arrayEqualityCheck-Bo2Wnkh3.js";import{C as p}from"./ComposedChart-BcbIeTEo.js";import{C as c}from"./CartesianGrid-DzBAtk5H.js";import{X as f}from"./XAxis-DGMxd97y.js";import{Y as l}from"./YAxis-CF3zWZoV.js";import{R as h}from"./ReferenceArea-AVAOShD5.js";import{R as d}from"./RechartsHookInspector-ORt5Hm4G.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BwYlSIqL.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CKiG0ykq.js";import"./hooks-C3LIgo6e.js";import"./axisSelectors-CqG3KyC6.js";import"./zIndexSlice-CWsPu_90.js";import"./CartesianChart-dQ-XbzLC.js";import"./chartDataContext-CMXdzaII.js";import"./CategoricalChart-Bg2hOV4d.js";import"./CartesianAxis-LraHpKTU.js";import"./Layer-B4_ys6we.js";import"./Text-Ch5Da2lM.js";import"./DOMUtils-UovAGbSR.js";import"./Label-DeB84C01.js";import"./ZIndexLayer-CUGD5-lC.js";import"./types-mvH4HYXR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-B2kMW3VJ.js";import"./useAnimationId-PYCZu_AY.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-vodQRtzb.js";import"./ChartSizeDimensions-C-iWuIdI.js";import"./OffsetShower-CldxxWXJ.js";import"./PlotAreaShower-CYDRIz5k.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
          <RechartsHookInspector />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
