import{R as e}from"./iframe-BR9um8hy.js";import{R as a}from"./zIndexSlice-DInTlpQm.js";import{C as p}from"./ComposedChart-BVZ7f1kE.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C6b1h-mn.js";import{X as f}from"./XAxis-Df2VZum-.js";import{Y as l}from"./YAxis-BaWzKsyn.js";import{L as d}from"./Line-B2Y8w_7v.js";import{R as h}from"./ReferenceLine-BVQHzayO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BcqT3vfz.js";import"./index-C-g-WGda.js";import"./index-DxJwgSab.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DqQmI4tj.js";import"./isWellBehavedNumber-DRhRXNpZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dp-C2Hzh.js";import"./axisSelectors-AyLSKa9B.js";import"./d3-scale-CDw_eAgY.js";import"./index-BkxIjOFS.js";import"./index-BFcGxk9F.js";import"./renderedTicksSlice-CoNN11f9.js";import"./index-DXgo6F3y.js";import"./CartesianChart-DZcLq4iA.js";import"./chartDataContext-Bt8Fe_rW.js";import"./CategoricalChart-DmGnRbfN.js";import"./CartesianAxis-Ctt1NdjE.js";import"./Layer-BBDuFZTy.js";import"./Text-CRGxz7fL.js";import"./DOMUtils-Duc3pHlK.js";import"./useId-BgrQ9U0l.js";import"./useBackwardsCompatibleTheme-DOuVjsc2.js";import"./Label-DksyNS0g.js";import"./ZIndexLayer-BGQSpetD.js";import"./types-C8x07v5_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C4vXdRCg.js";import"./step-Dcjunjbb.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DpNUe9OS.js";import"./useAnimationId-CK-e-_3G.js";import"./ActivePoints-D1dlEVO6.js";import"./Dot-C4b3VHLo.js";import"./RegisterGraphicalItemId-BT1l9jKw.js";import"./ErrorBarContext-B2oMN3ea.js";import"./GraphicalItemClipPath-D0pxdHNA.js";import"./SetGraphicalItem-CjDcCpNq.js";import"./getRadiusAndStrokeWidthFromDot-D1WfNQgz.js";import"./ActiveShapeUtils-B8gsJAZs.js";import"./useGraphicalItemIdentity-BYoj9he0.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
