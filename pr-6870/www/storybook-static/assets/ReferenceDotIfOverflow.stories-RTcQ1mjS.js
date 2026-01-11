import{e}from"./iframe-D2G3HIAp.js";import{R as n}from"./arrayEqualityCheck-D7f_pFRZ.js";import{C as s}from"./ComposedChart-B3gygK9L.js";import{C as p}from"./CartesianGrid-DlHFlIxs.js";import{X as c}from"./XAxis-Cv05-S4d.js";import{Y as f}from"./YAxis-C4SLmRp0.js";import{R as l}from"./ReferenceDot-BQNEHugY.js";import{R as h}from"./RechartsHookInspector-Bl5k7Hvc.js";import{p as d}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DUSJViu-.js";import"./PolarUtils-Dps0SkyA.js";import"./RechartsWrapper-CZfXu9Bm.js";import"./hooks-sNKmgtMM.js";import"./axisSelectors-276H6COd.js";import"./zIndexSlice-DJ_SqHH-.js";import"./CartesianChart-Cd_D9K81.js";import"./chartDataContext-BdGyYEQ1.js";import"./CategoricalChart-DtaGr5KL.js";import"./CartesianAxis-4WuYgukg.js";import"./Layer--_yZLHYD.js";import"./Text-BktKgt0G.js";import"./DOMUtils-CXrXcMzN.js";import"./Label-Dmvkas3w.js";import"./ZIndexLayer-CUBtDPQX.js";import"./types-DJ8_iZaM.js";import"./Dot-C5hzWh_I.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BwQRywFC.js";import"./ChartSizeDimensions-C1G0XugS.js";import"./OffsetShower-vnVO-R-R.js";import"./PlotAreaShower-8nMbOvlD.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,Q={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const V=["IfOverflow"];export{t as IfOverflow,V as __namedExportsOrder,Q as default};
