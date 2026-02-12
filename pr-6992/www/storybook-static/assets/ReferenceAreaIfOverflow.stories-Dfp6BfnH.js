import{e}from"./iframe-BHl6feHg.js";import{R as s}from"./arrayEqualityCheck-JXPmVnXy.js";import{C as p}from"./ComposedChart-k9Vt-A54.js";import{C as c}from"./CartesianGrid-hWV0d-NQ.js";import{X as f}from"./XAxis-Cyf7QVEF.js";import{Y as l}from"./YAxis-CW4WdVK-.js";import{R as h}from"./ReferenceArea-1tXUQZt3.js";import{R as d}from"./RechartsHookInspector-CQ8dXbzy.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cbmc1eDK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNWAu01W.js";import"./hooks-Dg4O0IDH.js";import"./axisSelectors-DkCd3lVb.js";import"./zIndexSlice-BJqVcMRI.js";import"./CartesianChart-a-Nu4Djb.js";import"./chartDataContext-U6yYzpZX.js";import"./CategoricalChart-DPTMtwYi.js";import"./CartesianAxis-h298ab2p.js";import"./Layer-lCm_g64d.js";import"./Text-D9u3Lv_0.js";import"./DOMUtils-Cw8uC_z6.js";import"./Label-K4IXz_WW.js";import"./ZIndexLayer-BG8-MmnW.js";import"./types-D0Ktdl0_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-DXzfAzil.js";import"./useAnimationId-BLeXX0yF.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-fMMWXo17.js";import"./ChartSizeDimensions-HMEMc6fo.js";import"./OffsetShower-BfTyamfA.js";import"./PlotAreaShower-DtEQ72Vu.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
