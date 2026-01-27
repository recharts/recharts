import{e}from"./iframe-CpBR2FD-.js";import{R as s}from"./arrayEqualityCheck-DfVEXElD.js";import{C as p}from"./ComposedChart-B6g7a6-n.js";import{C as c}from"./CartesianGrid-BAFAxm3s.js";import{X as f}from"./XAxis-Cmud21dv.js";import{Y as l}from"./YAxis-CYDXfh77.js";import{R as h}from"./ReferenceArea-DhVOmRWn.js";import{R as d}from"./RechartsHookInspector-C3421ru3.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DmMqjKPI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CoeBe9ik.js";import"./hooks-DedpoqIJ.js";import"./axisSelectors-BrZ6G91_.js";import"./zIndexSlice-BCiKU99h.js";import"./CartesianChart-B1Icaiih.js";import"./chartDataContext-XtQC6I5E.js";import"./CategoricalChart-Bb8UD5I8.js";import"./CartesianAxis-DIWnau3l.js";import"./Layer-DEK88535.js";import"./Text-Dhmw9EGu.js";import"./DOMUtils-BBsKE3Cz.js";import"./Label-DWBk7fhM.js";import"./ZIndexLayer-fbfZmhXg.js";import"./types-D4KZK8k1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-BPCbtxXK.js";import"./useAnimationId-CFZ1kX6W.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Dknhq_uL.js";import"./ChartSizeDimensions-BjsHMoDH.js";import"./OffsetShower-D-sUEdFp.js";import"./PlotAreaShower-BP-Vy4Nm.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
