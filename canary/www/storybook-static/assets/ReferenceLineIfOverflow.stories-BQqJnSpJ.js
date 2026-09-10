import{R as e}from"./iframe-eHTE8XbR.js";import{R as a}from"./zIndexSlice-CwHm8jEL.js";import{C as p}from"./ComposedChart-BxOpXvKQ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DygeYOvu.js";import{X as f}from"./XAxis-Cvnzf1dT.js";import{Y as l}from"./YAxis-BfTKYpb9.js";import{L as d}from"./Line-DcoeyTM0.js";import{R as h}from"./ReferenceLine-Z47KBPqM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D7Re1Y2w.js";import"./index-Dxr-7wC-.js";import"./index-gcAHcJS-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-l2cuQuhM.js";import"./isWellBehavedNumber-BEewLsBb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGSwepyW.js";import"./axisSelectors-CazxXIUK.js";import"./d3-scale-CyTtDi_G.js";import"./index-BaEdESzW.js";import"./index-sqcRhlaW.js";import"./renderedTicksSlice-GO_dvkn7.js";import"./index-1QxhuPS4.js";import"./CartesianChart-DWMHxp7T.js";import"./chartDataContext-B57YfjZ7.js";import"./CategoricalChart-NxXAGTpx.js";import"./CartesianAxis-Dyb6UtbO.js";import"./Layer-Rvjy0lqp.js";import"./Text-qSZv8Fj3.js";import"./DOMUtils-C0F5dZFI.js";import"./useId-6ohiSOpB.js";import"./useBackwardsCompatibleTheme-BGy_-u8K.js";import"./Label-BHKNCvXv.js";import"./ZIndexLayer-DPdP9SWD.js";import"./types-BOeFjqIc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CpXkKn29.js";import"./step-B8Kmttuh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-iYX-QLNJ.js";import"./useAnimationId-Dn1LCCOz.js";import"./ActivePoints-CD98k9Q1.js";import"./Dot-CrWlWXGl.js";import"./RegisterGraphicalItemId-Cmo8QrR_.js";import"./ErrorBarContext-B3ngcVu0.js";import"./GraphicalItemClipPath-Dm2FfYtP.js";import"./SetGraphicalItem-Byf3PY1O.js";import"./getRadiusAndStrokeWidthFromDot-D8K1Hpkd.js";import"./ActiveShapeUtils-DCxXoOp2.js";import"./useGraphicalItemIdentity-Bl8ISiJK.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
