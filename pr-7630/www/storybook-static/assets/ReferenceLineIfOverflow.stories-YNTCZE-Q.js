import{R as e}from"./iframe-osdC7w3x.js";import{R as n}from"./zIndexSlice-deUrzjsz.js";import{C as p}from"./ComposedChart-NByrG7TX.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CPnHaeQZ.js";import{X as f}from"./XAxis-B__lQt6h.js";import{Y as l}from"./YAxis-DYUQr3XS.js";import{L as d}from"./Line-ChMsZBXA.js";import{R as h}from"./ReferenceLine-zsbt1J0l.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-yBEImYyh.js";import"./index-Dk6HIvLW.js";import"./index-DYD_OYQh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BjlKs9r7.js";import"./isWellBehavedNumber-Ch_81v8O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwYigjFj.js";import"./index-0D71YoJz.js";import"./index-BnccS2yU.js";import"./axisSelectors-D59_Gagr.js";import"./d3-scale-Dxvyh_dk.js";import"./renderedTicksSlice-BzoWiF6G.js";import"./CartesianChart-D55rucOT.js";import"./chartDataContext-DGjFZnBH.js";import"./CategoricalChart-CACDpCto.js";import"./CartesianAxis-D1s41LT1.js";import"./Layer-CRq3eSZM.js";import"./Text-HkDUvF78.js";import"./DOMUtils-CpdlvjrD.js";import"./Label-CRRMP5SS.js";import"./ZIndexLayer-C_4Zumz8.js";import"./types-PJaZpOTb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-4-tV1CA2.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CnankNoj.js";import"./step-BWmIUyya.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DHXks09V.js";import"./useAnimationId-T5o_BkmZ.js";import"./ActivePoints-XOhn4AON.js";import"./Dot-CXtOSde0.js";import"./RegisterGraphicalItemId-Bpt47ePh.js";import"./ErrorBarContext-DDxN4O9o.js";import"./GraphicalItemClipPath-CchViqUF.js";import"./SetGraphicalItem-Qozm5Dg5.js";import"./getRadiusAndStrokeWidthFromDot-aTO7lmXX.js";import"./ActiveShapeUtils-DA6oNeNX.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,he={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const we=["IfOverflow"];export{t as IfOverflow,we as __namedExportsOrder,he as default};
