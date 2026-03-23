import{e}from"./iframe-CJ63uMHg.js";import{R as n}from"./arrayEqualityCheck-CjZgOdyP.js";import{C as s}from"./ComposedChart-BUz5v2gp.js";import{C as p}from"./CartesianGrid-CBP3Dch3.js";import{X as c}from"./XAxis-CaS203aX.js";import{Y as f}from"./YAxis-BJ9lAReC.js";import{R as l}from"./ReferenceDot-CVXePLCg.js";import{R as h}from"./RechartsHookInspector-JQmetI7b.js";import{p as d}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CMjyVNNi.js";import"./immer-CKeBagLw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DPJT4FLk.js";import"./index-BTkZssxQ.js";import"./hooks-DAjaeQkS.js";import"./axisSelectors-Cmmc63M7.js";import"./d3-scale-Ba7WtcOV.js";import"./zIndexSlice-DcFOWvFe.js";import"./renderedTicksSlice-BxvVTmCz.js";import"./CartesianChart-CnhtnX-W.js";import"./chartDataContext-BCusU8xR.js";import"./CategoricalChart-mP3FKWNM.js";import"./CartesianAxis-DJXCnb2v.js";import"./Layer-DwPjM_1S.js";import"./Text-C4Zilip_.js";import"./DOMUtils-CEnHACCK.js";import"./Label-BT9o0AB1.js";import"./ZIndexLayer-hB7INJpc.js";import"./types-Cg-iPHUY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-D4anQyzH.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BTv7XF5w.js";import"./ChartSizeDimensions-C_IgMMTX.js";import"./OffsetShower-TshGFHAM.js";import"./PlotAreaShower-BX2Nq4gV.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:d,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(h,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
