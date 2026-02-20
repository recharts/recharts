import{e}from"./iframe-Caz6nZ2I.js";import{R as s}from"./arrayEqualityCheck-CcFxY-Xq.js";import{C as p}from"./ComposedChart-ig2jlZKJ.js";import{C as c}from"./CartesianGrid-DoN3UDrT.js";import{X as f}from"./XAxis-Dd-oJpip.js";import{Y as l}from"./YAxis-BRCgxqg5.js";import{R as h}from"./ReferenceArea-DVayFQbV.js";import{R as d}from"./RechartsHookInspector-DDSzpp5A.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DAfTexXm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BaD7RcsJ.js";import"./hooks-CDeGIHYi.js";import"./axisSelectors-CATtk_Ip.js";import"./zIndexSlice-BOArh4At.js";import"./renderedTicksSlice-Dm3Q4on6.js";import"./CartesianChart-Dac4qaSb.js";import"./chartDataContext-Ckz2ERDZ.js";import"./CategoricalChart-3KZweWrA.js";import"./CartesianAxis-DlMujoQ4.js";import"./Layer-B1GIAb1E.js";import"./Text-CLjo-AK5.js";import"./DOMUtils-CnTHdE3M.js";import"./Label-Ek7Phs8Z.js";import"./ZIndexLayer-BLDjT7Qj.js";import"./types-8IoGCZ4X.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-DOnXuvZA.js";import"./useAnimationId-DFkOU0Go.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BX6q2UKF.js";import"./ChartSizeDimensions-C4z1FuV2.js";import"./OffsetShower-BJHPKe79.js";import"./PlotAreaShower-BuE2Upo9.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
