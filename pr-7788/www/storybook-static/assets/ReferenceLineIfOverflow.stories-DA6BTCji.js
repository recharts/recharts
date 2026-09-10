import{R as e}from"./iframe-CCc4Ig9t.js";import{R as a}from"./zIndexSlice-1P0wH6mw.js";import{C as p}from"./ComposedChart-Dz5UNdl9.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BRYP-euc.js";import{X as f}from"./XAxis-B7UFXjXO.js";import{Y as l}from"./YAxis-BglDyQ9K.js";import{L as d}from"./Line-CXz5YjBC.js";import{R as h}from"./ReferenceLine-BpFhY45H.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BYOhzTjU.js";import"./index-D-887qgc.js";import"./index-CZthC9SS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-VNAAgVLt.js";import"./isWellBehavedNumber-BwK7Fikb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cz1O2LQ_.js";import"./axisSelectors-DPq5qkhW.js";import"./d3-scale-DD504LTb.js";import"./index-DP3dQjsk.js";import"./index-BMcDiNhW.js";import"./renderedTicksSlice-DEDWHMPA.js";import"./index-G3ylxvqW.js";import"./CartesianChart-LpLVhPdZ.js";import"./chartDataContext-q63OH3iY.js";import"./CategoricalChart-Bf4qEJ6P.js";import"./CartesianAxis-Bp_xQTZ6.js";import"./Layer-CI2wc1Xr.js";import"./Text-Cj4kK8yu.js";import"./DOMUtils-Df_Ucl3X.js";import"./useId-CLSpndMM.js";import"./useBackwardsCompatibleTheme-BVGIiR_X.js";import"./Label-DTpe6J5w.js";import"./ZIndexLayer-BPtrp-aJ.js";import"./types-DJtqKg77.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BvVtw5_4.js";import"./step-CwrGAB68.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ca5Obh5D.js";import"./useAnimationId-ClzD5z7x.js";import"./ActivePoints-DjcQylVy.js";import"./Dot-ATZOOaE7.js";import"./RegisterGraphicalItemId-BnnRsli9.js";import"./ErrorBarContext-Buf_Z21J.js";import"./GraphicalItemClipPath-BbHKpjF5.js";import"./SetGraphicalItem-Bpek28vv.js";import"./getRadiusAndStrokeWidthFromDot-Ce6GbVl8.js";import"./ActiveShapeUtils-BtdS6G9Z.js";import"./useGraphicalItemIdentity-Ckfzcm_J.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
