import{R as e}from"./iframe-O_zfFb6r.js";import{R as a}from"./zIndexSlice-CDi6Z2zv.js";import{C as p}from"./ComposedChart-BifQjRte.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DQoEYFTB.js";import{X as f}from"./XAxis-BJYhxEEM.js";import{Y as l}from"./YAxis-4IiwGwhc.js";import{L as d}from"./Line-C-49beIg.js";import{R as h}from"./ReferenceLine-B8BhEiNM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-nfGA0JID.js";import"./index-CpzZNRq1.js";import"./index-F3KKsDmf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cy11K6xZ.js";import"./isWellBehavedNumber-zMKck78V.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DPG1lJEB.js";import"./axisSelectors-Cu-Cxseq.js";import"./d3-scale-CJf0BmNx.js";import"./index-Bs_5gbEM.js";import"./index-6nFN620n.js";import"./renderedTicksSlice-fycCYLaq.js";import"./index-Fqn27s52.js";import"./CartesianChart-DjXROyBm.js";import"./chartDataContext-T_bYBa0C.js";import"./CategoricalChart-Cks6RsKt.js";import"./CartesianAxis-DAJd6uwN.js";import"./Layer-IOKs9hiO.js";import"./Text-TAeBHRIT.js";import"./DOMUtils-BJJ-vVKn.js";import"./useId-CBZzzSpP.js";import"./useBackwardsCompatibleTheme-DbcN9pdU.js";import"./Label-Bt0vOpuF.js";import"./ZIndexLayer-CbUFYwY1.js";import"./types-dgF4Zt0B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Dj1kSGWk.js";import"./step-Cv1KNwyF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B71252eU.js";import"./useAnimationId-O6XvtviY.js";import"./ActivePoints-C0Y8Gw_Z.js";import"./Dot-CLEBjmd0.js";import"./RegisterGraphicalItemId-D2Q5ahcD.js";import"./ErrorBarContext-CDadBxpm.js";import"./GraphicalItemClipPath-C_4Tb4-L.js";import"./SetGraphicalItem-BsFfkq2Z.js";import"./getRadiusAndStrokeWidthFromDot-BlCMDsUw.js";import"./ActiveShapeUtils-0QkmK8Hn.js";import"./useGraphicalItemIdentity-Q9Kv4PEr.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
