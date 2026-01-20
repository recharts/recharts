import{e}from"./iframe-Bp7wnAMR.js";import{R as s}from"./arrayEqualityCheck-DxE10Oy_.js";import{C as p}from"./ComposedChart-DcPTD6P5.js";import{C as c}from"./CartesianGrid-BQDtpVC4.js";import{X as f}from"./XAxis-CYwkaB_4.js";import{Y as l}from"./YAxis-8qVMRpFM.js";import{R as h}from"./ReferenceArea-DZcwDGFN.js";import{R as d}from"./RechartsHookInspector-DHfob8nJ.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-73ODOPj1.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-C4djzgpQ.js";import"./hooks-CNofKjzo.js";import"./axisSelectors-hHhjBbva.js";import"./zIndexSlice-CRBGxDjV.js";import"./CartesianChart-Dno3SfYe.js";import"./chartDataContext-nk0Pjs0Z.js";import"./CategoricalChart-CZ-Ak8iT.js";import"./CartesianAxis-j6YjD7Sk.js";import"./Layer-7joqFoN-.js";import"./Text-DwUQNXUe.js";import"./DOMUtils-dKVtaV9j.js";import"./Label-Tu9yek-h.js";import"./ZIndexLayer-CSCYRG22.js";import"./types-7BwnP8OD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-Ck3EAtYG.js";import"./useAnimationId-goMb22IV.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D6AxLi4e.js";import"./ChartSizeDimensions-DwflQZom.js";import"./OffsetShower-B6O-ZqIp.js";import"./PlotAreaShower-B0Yqyt4M.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
