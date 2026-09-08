import{R as e}from"./iframe-Cohm3Mgw.js";import{R as a}from"./zIndexSlice-B9ueg08S.js";import{C as p}from"./ComposedChart-NgaAeXu7.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B44Zue7x.js";import{X as f}from"./XAxis-CVOvqpzX.js";import{Y as l}from"./YAxis-CL7XnP-K.js";import{L as d}from"./Line-CSUvTs5t.js";import{R as h}from"./ReferenceLine-rsbyfkjF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-yX9WQlUu.js";import"./index-D7CetYi-.js";import"./index-S5rsC3Tw.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C0M5TZCe.js";import"./isWellBehavedNumber-gcpDVDB0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BRBo2AAI.js";import"./axisSelectors-CjhsklJ0.js";import"./d3-scale-DvRyM4Sf.js";import"./index-DvtaYKH7.js";import"./index-BauJCgFC.js";import"./renderedTicksSlice-BCr9iPCV.js";import"./index-Cm_kbqdK.js";import"./CartesianChart-Cpw2D3LX.js";import"./chartDataContext-H3bm4v7q.js";import"./CategoricalChart-Df9xH4Hr.js";import"./CartesianAxis-ayk5133x.js";import"./Layer-0g-9u_Rw.js";import"./Text-YiVIU37_.js";import"./DOMUtils-txvPDt5R.js";import"./useId-C6wOq3r0.js";import"./useBackwardsCompatibleTheme-VM02li75.js";import"./Label-CjpZErbZ.js";import"./ZIndexLayer-CYwij2WM.js";import"./types-DRz-ZInT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BoBL6qva.js";import"./step-DcnLL6eP.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CnXe2R42.js";import"./useAnimationId-Cli-i2xG.js";import"./ActivePoints-D3t_JlJ4.js";import"./Dot-bF3RsuDa.js";import"./RegisterGraphicalItemId-zE1kxnUQ.js";import"./ErrorBarContext-CroV_pde.js";import"./GraphicalItemClipPath-C_0K_X_g.js";import"./SetGraphicalItem-Cu_GzdoF.js";import"./getRadiusAndStrokeWidthFromDot-BzpvHiho.js";import"./ActiveShapeUtils-Vqel86XU.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
