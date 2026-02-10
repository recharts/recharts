import{e}from"./iframe-Bg6hY-Lh.js";import{R as n}from"./arrayEqualityCheck-BDis9FaH.js";import{C as s}from"./ComposedChart-BrWT8Xtr.js";import{C as p}from"./CartesianGrid-CjQk98d1.js";import{X as c}from"./XAxis-CuwyE-Aw.js";import{Y as f}from"./YAxis-D_u72_vn.js";import{R as l}from"./ReferenceDot-CbsQr3bx.js";import{R as h}from"./RechartsHookInspector-C0SDsqLX.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BI7FFBV-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkqFGzuB.js";import"./hooks-DM-gzZjo.js";import"./axisSelectors-GHndRTSk.js";import"./zIndexSlice-DBH2YRr7.js";import"./CartesianChart-B3uSsgOm.js";import"./chartDataContext-BNQKMBbL.js";import"./CategoricalChart-fiMHtwty.js";import"./CartesianAxis-vJmkqZaZ.js";import"./Layer-CbLnIqdO.js";import"./Text-G-UMIUqa.js";import"./DOMUtils-BOstDSsm.js";import"./Label-XrRQ-MXs.js";import"./ZIndexLayer-DyYnxyDJ.js";import"./types-CCzU0McW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-BIrCeUw-.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C3KvIg2I.js";import"./ChartSizeDimensions-oau-P_ha.js";import"./OffsetShower-B8fezjcj.js";import"./PlotAreaShower-_vIJxFcu.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
