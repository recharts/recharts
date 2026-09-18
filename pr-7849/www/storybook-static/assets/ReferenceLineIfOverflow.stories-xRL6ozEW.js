import{R as e}from"./iframe-BnwEvHVd.js";import{R as a}from"./zIndexSlice-0uCOCVRk.js";import{C as p}from"./ComposedChart-9rcgHVH2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CscLCm3r.js";import{X as f}from"./XAxis-DhFvYOTq.js";import{Y as l}from"./YAxis-DnmtLm62.js";import{L as d}from"./Line-BNCbCy8a.js";import{R as h}from"./ReferenceLine-DemFz_jl.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BMoDiTen.js";import"./index-iHvm3R8g.js";import"./index-BwBYuMQi.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-jnzqtWcb.js";import"./isWellBehavedNumber-f8_DWfMW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BZ464iUK.js";import"./axisSelectors-DzcPpi8v.js";import"./d3-scale-RQ0i9OyJ.js";import"./index-2KzukYLG.js";import"./index-B3VczQm-.js";import"./renderedTicksSlice-DPG0-UfT.js";import"./index-CKyU5yK6.js";import"./CartesianChart-DbrCyOh2.js";import"./chartDataContext-fkcf5wCl.js";import"./CategoricalChart-BZFbMC-H.js";import"./CartesianAxis-DJc2UaR_.js";import"./Layer-BqkYBUjY.js";import"./Text-COiNjqEn.js";import"./DOMUtils-DMR3fXS7.js";import"./useId-BMcLep4I.js";import"./useBackwardsCompatibleTheme-eKW0IOYq.js";import"./Label-DKFxt1KE.js";import"./ZIndexLayer-BALG2eh-.js";import"./types-CpWaLS-D.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DLP8Li3q.js";import"./step-C-chH2xx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DFYzdMOG.js";import"./useAnimationId-Bx9pchZd.js";import"./ActivePoints-BZ2W0rhn.js";import"./Dot-DTeilXrV.js";import"./RegisterGraphicalItemId-DgVfOOm7.js";import"./ErrorBarContext-DiS9VGRo.js";import"./GraphicalItemClipPath-lDnflq8u.js";import"./SetGraphicalItem-D3Y1kq9t.js";import"./getRadiusAndStrokeWidthFromDot-BZxUZerd.js";import"./ActiveShapeUtils-BQOop8W6.js";import"./useGraphicalItemIdentity-DGhBBybr.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
