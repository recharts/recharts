import{R as e}from"./iframe-C_uZmGJ0.js";import{R as a}from"./zIndexSlice-DLwc6L6K.js";import{C as p}from"./ComposedChart-Bj6W4vsF.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D5uPD4mT.js";import{X as f}from"./XAxis-YZBSNmPV.js";import{Y as l}from"./YAxis-CCpz6f2F.js";import{L as d}from"./Line-5Ky_uooe.js";import{R as h}from"./ReferenceLine-Do1sAIll.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ssm5i5NQ.js";import"./index-BPNGFjKX.js";import"./index-C_Xrr1JY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-qk1iWAfg.js";import"./isWellBehavedNumber-bflz4OY5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CXap3oDx.js";import"./axisSelectors-Bynx2pvt.js";import"./d3-scale-qCFWvZmx.js";import"./index-i5xBuxs4.js";import"./index-D4BdbP-V.js";import"./renderedTicksSlice-DdBaQZqr.js";import"./index-DmhH5Xz3.js";import"./CartesianChart-RcuLD4DP.js";import"./chartDataContext-DAujoSs5.js";import"./CategoricalChart-BSnQBJZ3.js";import"./CartesianAxis-Dw4Yg42W.js";import"./Layer-FqzZic0p.js";import"./Text-gzTYclIX.js";import"./DOMUtils-D581TnDq.js";import"./useId-CAahTF3z.js";import"./useBackwardsCompatibleTheme-Dcj-aUF4.js";import"./Label-fJXJ83zZ.js";import"./ZIndexLayer-WWept0wS.js";import"./types-mc5h_EFw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DrCVQ1z_.js";import"./step-d36cIwmk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bdmry8Nm.js";import"./useAnimationId-DVpik13A.js";import"./ActivePoints-C2NAg-mW.js";import"./Dot-BxKfnRiv.js";import"./RegisterGraphicalItemId-BuMk-4uG.js";import"./ErrorBarContext-CukgZUAO.js";import"./GraphicalItemClipPath-CZ-MeeIA.js";import"./SetGraphicalItem-CizKrbKK.js";import"./getRadiusAndStrokeWidthFromDot-Cu-dtnOu.js";import"./ActiveShapeUtils-DegrRRKp.js";import"./useGraphicalItemIdentity-BVAmN--h.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
