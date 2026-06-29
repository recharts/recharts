import{R as e}from"./iframe-kr7fVjhm.js";import{R as n}from"./zIndexSlice-BZPaZoVE.js";import{C as p}from"./ComposedChart-C2Jq_jCe.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BAZ3UDYA.js";import{X as f}from"./XAxis-DuCvvYgu.js";import{Y as l}from"./YAxis-BoMreVA5.js";import{L as d}from"./Line-6cFMEXcZ.js";import{R as h}from"./ReferenceLine-B56IscB7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D_awpPCx.js";import"./index-D2MHq5Hk.js";import"./index-B4gF14t1.js";import"./get-Clowvj21.js";import"./resolveDefaultProps-B2SvaHgo.js";import"./isWellBehavedNumber-Dgwr4Y0K.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXLkHwYV.js";import"./index-Bi4GHbSg.js";import"./index-C_7j0jGJ.js";import"./renderedTicksSlice-DSu7HAeh.js";import"./axisSelectors-C6aKDGBg.js";import"./d3-scale-D8KPLyuv.js";import"./CartesianChart-xwjZDYjt.js";import"./chartDataContext-CX_0Naaw.js";import"./CategoricalChart-Bef2xtAx.js";import"./CartesianAxis-BtEPbzKb.js";import"./Layer-BpeNKyUn.js";import"./Text-DjM5ugTe.js";import"./DOMUtils-C68MxIVY.js";import"./Label-BzX4e21C.js";import"./ZIndexLayer-DgDl0x_M.js";import"./types-BF09pdOO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-B0z7kkbw.js";import"./step-DhEFjA1U.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DqhNqm_F.js";import"./useAnimationId-D5l55oDh.js";import"./ActivePoints-DGPf_3U2.js";import"./Dot-B_HKYeQ3.js";import"./RegisterGraphicalItemId-fKNs0JEp.js";import"./ErrorBarContext-CdB9Q1sE.js";import"./GraphicalItemClipPath-BFOwa2gv.js";import"./SetGraphicalItem-CV-IUFmw.js";import"./getRadiusAndStrokeWidthFromDot-ow-LYvhf.js";import"./ActiveShapeUtils-DcRBgo4o.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
