import{e}from"./iframe-D9q7UUmi.js";import{R as n}from"./arrayEqualityCheck-CJJXJ9Rv.js";import{C as p}from"./ComposedChart-BrSXjugh.js";import{C as s}from"./CartesianGrid-ocgArU4K.js";import{X as c}from"./XAxis-Dxn9Zo0N.js";import{Y as f}from"./YAxis-Ds2QNT8w.js";import{L as l}from"./Line-BGi21o2A.js";import{R as d}from"./ReferenceLine-BvNlIroj.js";import{R as h}from"./RechartsHookInspector-Btgon49z.js";import{p as w}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D-3coS0e.js";import"./PolarUtils-cf4CEJPT.js";import"./RechartsWrapper-8_jXv7hz.js";import"./hooks-b1KD0qBL.js";import"./axisSelectors-DCJHWbvW.js";import"./zIndexSlice-CxekzBSL.js";import"./CartesianChart-B58H7xZp.js";import"./chartDataContext-C5vcePQl.js";import"./CategoricalChart-ak-_6B9f.js";import"./CartesianAxis-DBnbCnpE.js";import"./Layer-CUKLQgPC.js";import"./Text-CLmUy_On.js";import"./DOMUtils-BXuH-NK6.js";import"./Label-CDSn628C.js";import"./ZIndexLayer-CtgCGO4x.js";import"./types-FPdAMXDy.js";import"./ReactUtils-CfRgqXT5.js";import"./ActivePoints-B6AA5Rbz.js";import"./Dot-CrGRPD2L.js";import"./RegisterGraphicalItemId-B8upk-8m.js";import"./ErrorBarContext-D_fOmF9j.js";import"./GraphicalItemClipPath-CYdNpZeU.js";import"./SetGraphicalItem-DllIbSlC.js";import"./useAnimationId-DeN0uxUI.js";import"./getRadiusAndStrokeWidthFromDot-Ct_S_qD5.js";import"./ActiveShapeUtils-Cf3wP9DQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-aQPjrzEG.js";import"./Trapezoid-CrYCphId.js";import"./Sector-BIUbLnT5.js";import"./Symbols-B3oT9PiF.js";import"./Curve-DEESCjbc.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-YTWFD20P.js";import"./ChartSizeDimensions-CGOPgU1Q.js";import"./OffsetShower-D7RAK20_.js";import"./PlotAreaShower-DDsxyFt0.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
