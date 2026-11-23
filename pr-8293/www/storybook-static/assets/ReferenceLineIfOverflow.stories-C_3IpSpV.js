import{R as e}from"./iframe-BzxAUdBV.js";import{R as a}from"./zIndexSlice-CpYrgVZX.js";import{C as p}from"./ComposedChart-hvP_dJoC.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-HNLibLcV.js";import{X as f}from"./XAxis-CtYxvtbo.js";import{Y as l}from"./YAxis-DCmm8K7b.js";import{L as d}from"./Line-C-rr1QKq.js";import{R as h}from"./ReferenceLine-DZjGeIpM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DheJQ_-R.js";import"./throttle-C2l7QP8r.js";import"./index-DxuOyH9Y.js";import"./index-5gwlPTJD.js";import"./RechartsWrapper-BCictS_F.js";import"./axisSelectors-D1428BGH.js";import"./polarAxisSelectors-CqQp2e17.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BnAxRH73.js";import"./index-DwsBZD05.js";import"./index-D3M5mM9_.js";import"./renderedTicksSlice-DYvam8ud.js";import"./index-CIBNfLVZ.js";import"./fillDefinitions-fx1J2dmJ.js";import"./CartesianChart-Cryci4Uo.js";import"./chartDataContext-CextJDGM.js";import"./CategoricalChart-DzNtI-Go.js";import"./CartesianAxis-C9p6cgyy.js";import"./Layer-Df_NEF0m.js";import"./Text-DPkQNMpB.js";import"./ZIndexLayer-BUHaqwT6.js";import"./Label-9brnKF6Z.js";import"./types-djSleOln.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-ZLRSIrH1.js";import"./Curve-DIyQM0l3.js";import"./step-CAG0Ynz6.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-C-ZfbqEc.js";import"./ActivePoints-B380tDrW.js";import"./Dot-BeK6ZL_a.js";import"./activeStyles-DjlDJ1Rs.js";import"./useAnimationId-CdQeQcKS.js";import"./Symbols-BU2g01-G.js";import"./symbol-DGFVgd7C.js";import"./ErrorBarContext-iCVMvaG7.js";import"./SetGraphicalItem-in8OQb6t.js";import"./ActiveShapeUtils-BTD3-pm6.js";import"./useEffectiveDataKey-BLws13Ws.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
