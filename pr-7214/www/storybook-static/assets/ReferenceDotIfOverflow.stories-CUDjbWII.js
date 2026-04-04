import{e}from"./iframe-DchjWIcT.js";import{R as n}from"./arrayEqualityCheck-QCkrs1PG.js";import{C as s}from"./ComposedChart-CFs0TJqd.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D1l-HRKy.js";import{X as f}from"./XAxis-D4P_mYvM.js";import{Y as l}from"./YAxis-DuKGJBLI.js";import{R as h}from"./ReferenceDot-CK0lpVqI.js";import{R as d}from"./RechartsHookInspector-CPRA6xJz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-SMaOT1cA.js";import"./immer-DLCBpJSm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B6NPWdWo.js";import"./index-Brnv01PQ.js";import"./hooks-0MUNxS-P.js";import"./axisSelectors-Cs62S3eJ.js";import"./d3-scale-Dz9swnGz.js";import"./zIndexSlice-B4fo6Fp2.js";import"./renderedTicksSlice-ARMD3d3P.js";import"./CartesianChart-9IsHXkda.js";import"./chartDataContext-CtCLKmwO.js";import"./CategoricalChart-Cx0EsJSw.js";import"./CartesianAxis-DSoy_rG_.js";import"./Layer-BGlDxeZH.js";import"./Text-BMGBMw2v.js";import"./DOMUtils-BQHfItYf.js";import"./Label-DmoQv3Ji.js";import"./ZIndexLayer-D4usu0YU.js";import"./types-pHat4itB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-DmVbifMK.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DNOa6QVy.js";import"./ChartSizeDimensions-CVsXW5Vd.js";import"./OffsetShower-35EhUoAr.js";import"./PlotAreaShower-CHLX1rVB.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
