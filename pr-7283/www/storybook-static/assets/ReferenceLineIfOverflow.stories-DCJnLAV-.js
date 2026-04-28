import{e}from"./iframe-Duu2ePP2.js";import{R as n}from"./arrayEqualityCheck-B-cAi4kL.js";import{C as p}from"./ComposedChart-BGGpT0on.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BX2etGZS.js";import{X as f}from"./XAxis-DAA3n7LQ.js";import{Y as l}from"./YAxis-DKXddmVj.js";import{L as d}from"./Line-Dbauye43.js";import{R as h}from"./ReferenceLine-DHi2ejYC.js";import{R as w}from"./RechartsHookInspector-Bh1VcSAj.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BWiIM3v1.js";import"./immer-ON4fWNwQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DeZsisyl.js";import"./index-BGitJN2W.js";import"./hooks-dkH0FbaO.js";import"./axisSelectors-RH6y-AiZ.js";import"./d3-scale-yxZwMUWq.js";import"./zIndexSlice-DggUfY4w.js";import"./renderedTicksSlice-Dokw_GUk.js";import"./CartesianChart-D1uig-eX.js";import"./chartDataContext-Z4x7BNXW.js";import"./CategoricalChart-7RYTnCI7.js";import"./CartesianAxis-0Lljxc4r.js";import"./Layer-BOJMxATb.js";import"./Text-Cd4yjmCr.js";import"./DOMUtils-3aQ33ho0.js";import"./Label-Bn1yjK4M.js";import"./ZIndexLayer-BJKI90nF.js";import"./types-DgKzbqf0.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-4qgrEQeH.js";import"./ActivePoints-DBsGuqVa.js";import"./Dot-BT4SKcl1.js";import"./RegisterGraphicalItemId-CR36P_VL.js";import"./ErrorBarContext-q9vP8J6E.js";import"./GraphicalItemClipPath-Bnp8k_2K.js";import"./SetGraphicalItem-BK48IdmH.js";import"./useAnimationId-B0y91bCS.js";import"./getRadiusAndStrokeWidthFromDot-BA08heCI.js";import"./ActiveShapeUtils-rsSi-jmT.js";import"./isPlainObject-YfZdirFW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CChRXwuW.js";import"./Trapezoid-CfCidBHT.js";import"./Sector-Bqlpq4fQ.js";import"./Symbols-BvwbX7uA.js";import"./symbol-BIpvV-Z0.js";import"./step-CeBqx2xf.js";import"./Curve-C4aJqTD7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B2k1iAec.js";import"./ChartSizeDimensions-D23mYDM8.js";import"./OffsetShower-CUyO8TZe.js";import"./PlotAreaShower-C6jDjqIX.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,Re as default};
