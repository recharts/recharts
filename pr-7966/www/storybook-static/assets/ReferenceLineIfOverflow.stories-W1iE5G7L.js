import{R as e}from"./iframe-BPWq5wK1.js";import{R as a}from"./zIndexSlice--l6A9Cgd.js";import{C as p}from"./ComposedChart-eM1OIXHR.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Da39FRA_.js";import{X as f}from"./XAxis-DwVZ8t6S.js";import{Y as l}from"./YAxis-fdw9Kawy.js";import{L as d}from"./Line-T2R0gve-.js";import{R as h}from"./ReferenceLine-C63yoyhx.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BczP5WrX.js";import"./index-CBsqFzOA.js";import"./index-CMYr15XQ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DC_merMH.js";import"./isWellBehavedNumber-DPMDsRl8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DsTQCipn.js";import"./axisSelectors-B8iXPLx4.js";import"./d3-scale-t9m5JmsQ.js";import"./index-QtD_rERt.js";import"./index-CIFWdTWa.js";import"./renderedTicksSlice-B7Vn66iT.js";import"./index-BlcYejsd.js";import"./CartesianChart-DDcEhH92.js";import"./chartDataContext-D-s48IOU.js";import"./CategoricalChart-D94cXkjn.js";import"./CartesianAxis-XsFsrZXE.js";import"./Layer-CeC_x2uD.js";import"./Text-Dv2kvEh7.js";import"./pageBackground-BKi1BKrf.js";import"./useId-BNAqUaya.js";import"./useBackwardsCompatibleTheme-DmujFuGs.js";import"./Label-DfIBtU5a.js";import"./ZIndexLayer-Du5K3aCJ.js";import"./types-BIKEZWlZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-hjGlvn7z.js";import"./step-1i9O5IHq.js";import"./path-DyVhHtw_.js";import"./activeStyles-Fhy11XH6.js";import"./useAnimationId-37s3ARsg.js";import"./dataEntryStyles-3NXA5k2R.js";import"./ActivePoints-BfMx66PR.js";import"./Dot-C_XJnXRn.js";import"./ErrorBarContext-CMoWJ2Fr.js";import"./GraphicalItemClipPath-DqP6JkJs.js";import"./SetGraphicalItem-C-FePfke.js";import"./getRadiusAndStrokeWidthFromDot-CKPkLz7f.js";import"./ActiveShapeUtils-DkTWf27X.js";import"./useEffectiveDataKey-CfXPni2y.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
