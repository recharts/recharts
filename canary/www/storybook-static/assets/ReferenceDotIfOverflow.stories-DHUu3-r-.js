import{e}from"./iframe-eSAJEZht.js";import{R as n}from"./arrayEqualityCheck-DIP4cf6Y.js";import{C as s}from"./ComposedChart-C-MvXfhH.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D4NuE-Sg.js";import{X as f}from"./XAxis-DBtpKE2p.js";import{Y as l}from"./YAxis-BH4pX6Iz.js";import{R as h}from"./ReferenceDot-CgA1Ltth.js";import{R as d}from"./RechartsHookInspector-CNBbry69.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BhREbLw9.js";import"./immer-TNEPjPCB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CiRDGflb.js";import"./index-zRxxYhEY.js";import"./hooks-Q2uSt6yB.js";import"./axisSelectors-DyoITJEq.js";import"./d3-scale-CjiJ_ZTy.js";import"./zIndexSlice-BGPHYbVg.js";import"./renderedTicksSlice-B8h_p9LR.js";import"./CartesianChart-C2iAnTHm.js";import"./chartDataContext-eyhsy6xY.js";import"./CategoricalChart-B1JvHwji.js";import"./CartesianAxis-CGGz-Ws1.js";import"./Layer-Cp_zb8Y2.js";import"./Text-BIJyaKeQ.js";import"./DOMUtils-tcwXxObr.js";import"./Label-C16feiqK.js";import"./ZIndexLayer-D46bbrBq.js";import"./types-BwWrJ-BL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot--nNeygLj.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BGg-RllE.js";import"./ChartSizeDimensions-DwToSRXW.js";import"./OffsetShower-UG9ad5J7.js";import"./PlotAreaShower-ltT9O7XE.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
