import{c as e}from"./iframe-fo49l_7F.js";import{g as n}from"./zIndexSlice-DRP-3MQ6.js";import{C as p}from"./ComposedChart-BGsB6qPQ.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-CiqNGoFT.js";import{X as f}from"./XAxis-BzBl98RW.js";import{Y as l}from"./YAxis-Dn27aIIS.js";import{L as d}from"./Line-CEcsqQwp.js";import{R as h}from"./ReferenceLine-CodhImrA.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Cnd_vM0p.js";import"./index-Cq9JpdB2.js";import"./index-LHlEkonc.js";import"./get-BUAOm5zY.js";import"./resolveDefaultProps-CVMfvQ41.js";import"./isWellBehavedNumber-B0btAC56.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DNEpPwFB.js";import"./index-3vxLE14G.js";import"./index-Dnm6qrQS.js";import"./renderedTicksSlice-DvOi1XF2.js";import"./axisSelectors-DA_mvJaq.js";import"./d3-scale-qag23egh.js";import"./CartesianChart-C_VrjQWn.js";import"./chartDataContext-DeCM2GRR.js";import"./CategoricalChart-Di0rvdap.js";import"./CartesianAxis-BLZxyXIk.js";import"./Layer-Cshlv-Qa.js";import"./Text-BTD0u6_t.js";import"./DOMUtils-7oUYJi4I.js";import"./Label-B622NV2p.js";import"./ZIndexLayer-D6UFvHMF.js";import"./types-Bblnl65_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-C8R-he6_.js";import"./step-D7HygetQ.js";import"./path-DyVhHtw_.js";import"./ReactUtils-Bb0TLcRV.js";import"./ActivePoints-Dt3Cg6Px.js";import"./Dot-C2AIzy-O.js";import"./RegisterGraphicalItemId-zZVZ96Iy.js";import"./ErrorBarContext-BBLhm3gp.js";import"./GraphicalItemClipPath-qLKfObJe.js";import"./SetGraphicalItem-BMqVgIbs.js";import"./useAnimationId-AS8JtY64.js";import"./getRadiusAndStrokeWidthFromDot-BviS3R6P.js";import"./ActiveShapeUtils-nlm4-u2n.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const le=["IfOverflow"];export{t as IfOverflow,le as __namedExportsOrder,fe as default};
