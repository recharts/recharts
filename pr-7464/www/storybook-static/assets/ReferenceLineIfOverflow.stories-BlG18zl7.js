import{R as e}from"./iframe-DMp7qWBc.js";import{R as n}from"./zIndexSlice-DwEqiBQ-.js";import{C as p}from"./ComposedChart-r_H9u5_0.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-FVIu4V9p.js";import{X as f}from"./XAxis-BEU7rEXV.js";import{Y as l}from"./YAxis-Csr1iP4L.js";import{L as d}from"./Line-ChEIx0ob.js";import{R as h}from"./ReferenceLine-Bu66_IEh.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Cdu3yC2y.js";import"./index-DJULArvF.js";import"./index-FSdFZP1-.js";import"./get-xm_p6-0H.js";import"./resolveDefaultProps-CCMYu7HG.js";import"./isWellBehavedNumber-B2IEwkWH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-8C7w0fBl.js";import"./index-Bwz7camG.js";import"./index-BjkWDWFl.js";import"./renderedTicksSlice-xTgogQQT.js";import"./axisSelectors-CBZu9wu4.js";import"./d3-scale-BXmCrXPd.js";import"./string-B6fdYHAA.js";import"./CartesianChart-k38Maw3n.js";import"./chartDataContext-CQxGEncO.js";import"./CategoricalChart-Wp3XMWTG.js";import"./CartesianAxis-BpcewqQP.js";import"./Layer-CuLdBvJ8.js";import"./Text-BUBM5ImZ.js";import"./DOMUtils-u8y8aNP3.js";import"./Label-CTVwy9Ni.js";import"./ZIndexLayer-r-UQ7MHf.js";import"./types-nrPXTQ41.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-ClaSDCwv.js";import"./step-BmHxAVOq.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BdLU55_g.js";import"./useAnimationId-Bo28EVo_.js";import"./ActivePoints-BbdycfO-.js";import"./Dot-BLk4Ltpd.js";import"./RegisterGraphicalItemId-CQp3zThr.js";import"./ErrorBarContext-BXcE1fb6.js";import"./GraphicalItemClipPath-BhBDN4-E.js";import"./SetGraphicalItem-DeAOJWfR.js";import"./getRadiusAndStrokeWidthFromDot-3yPUTvTw.js";import"./ActiveShapeUtils-B9LOxtfw.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
