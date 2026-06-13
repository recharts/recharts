import{R as e}from"./iframe-DCSfzZD_.js";import{R as n}from"./zIndexSlice-Cya-j5JC.js";import{C as p}from"./ComposedChart-CwsOLjT-.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DTmSZryn.js";import{X as f}from"./XAxis-BD_qaxla.js";import{Y as l}from"./YAxis-CXksHDR7.js";import{L as d}from"./Line-mUDtb45l.js";import{R as h}from"./ReferenceLine-bVTsSwYS.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-ByTaNkbJ.js";import"./index-Bo0lICcO.js";import"./index-Bc3eNKO0.js";import"./get-bIWt5V4Q.js";import"./resolveDefaultProps-CCmyAiJ-.js";import"./isWellBehavedNumber-m9CBmcKa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-f8FpOrqU.js";import"./index-TStCCngK.js";import"./index-CZv42qN9.js";import"./renderedTicksSlice-CB2WZ0k7.js";import"./axisSelectors-C-oQ6giK.js";import"./d3-scale-4ju7hcsF.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CB6ngWWH.js";import"./chartDataContext-WKixDFuv.js";import"./CategoricalChart-DJmhsbdm.js";import"./CartesianAxis-B8kAJjBK.js";import"./Layer-CYaqqIa6.js";import"./Text-BxOuGVRA.js";import"./DOMUtils-C0TjG-2s.js";import"./Label-DyuMertz.js";import"./ZIndexLayer-BUBfOUZp.js";import"./types-pWlDed2R.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DBwKGQr7.js";import"./step-B0rCVxys.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DS8CzLL4.js";import"./useAnimationId-BTIZp_pi.js";import"./ActivePoints-ClGm_OTK.js";import"./Dot-C_xAmUte.js";import"./RegisterGraphicalItemId-B-4FmZL4.js";import"./ErrorBarContext-CpQVZJvf.js";import"./GraphicalItemClipPath-7MgXj_jT.js";import"./SetGraphicalItem-3Qo-AVYb.js";import"./getRadiusAndStrokeWidthFromDot-C8lTyvL_.js";import"./ActiveShapeUtils-C_38ZXqU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
