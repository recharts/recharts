import{e}from"./iframe-9z1u-Aav.js";import{R as n}from"./arrayEqualityCheck-BxC1vNgX.js";import{C as s}from"./ComposedChart-BYDqkFXo.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Dc8UhUqu.js";import{X as f}from"./XAxis-40ikClNA.js";import{Y as l}from"./YAxis-DrCwJ6Az.js";import{R as h}from"./ReferenceDot-DDEjAGnM.js";import{R as d}from"./RechartsHookInspector-CPy6deVf.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-hYLPXQk1.js";import"./immer-Bw5e914R.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCPy8B0Q.js";import"./index-B2EC147Y.js";import"./hooks-6Kt3djxY.js";import"./axisSelectors-COp_2eg-.js";import"./d3-scale-Gw1yRTSk.js";import"./zIndexSlice-CgHKAdAg.js";import"./renderedTicksSlice-BHud9xuy.js";import"./CartesianChart-BYVE1KsL.js";import"./chartDataContext-C3cOG7oG.js";import"./CategoricalChart-BSBYVT05.js";import"./CartesianAxis-CCI6UuOV.js";import"./Layer-CQ8qv4WV.js";import"./Text-hlTX4MHR.js";import"./DOMUtils-C8Hk5ID2.js";import"./Label-CLPrmfez.js";import"./ZIndexLayer-DD6-9cCr.js";import"./types-DkmL6Els.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Dot-Bkkq57cb.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CQ_nBmPz.js";import"./ChartSizeDimensions-Dl068BxX.js";import"./OffsetShower-DaW6uSre.js";import"./PlotAreaShower-B88-OHCb.js";const{expect:w,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}),e.createElement(d,null))),play:async({canvasElement:i})=>{const{findByText:m}=x(i);w(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
