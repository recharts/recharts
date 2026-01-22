import{e}from"./iframe-Bnj2hik-.js";import{R as n}from"./arrayEqualityCheck-CvUuuvKy.js";import{C as p}from"./ComposedChart-DOtfomr9.js";import{C as s}from"./CartesianGrid-ClAraMwg.js";import{X as c}from"./XAxis-DOcRfQ-w.js";import{Y as f}from"./YAxis-D5VnaMC1.js";import{L as l}from"./Line-D9lTYQ4h.js";import{R as d}from"./ReferenceLine-pVYS8Hil.js";import{R as h}from"./RechartsHookInspector-C_AeFs2E.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CPe3qGY9.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-B0Rp0hND.js";import"./hooks-Bya6Ssf9.js";import"./axisSelectors-DFI1wFeY.js";import"./zIndexSlice-CXHmHRtI.js";import"./CartesianChart-D6wdmsep.js";import"./chartDataContext-DBEZcAkK.js";import"./CategoricalChart-6PDUcg0C.js";import"./CartesianAxis-5Ck476fs.js";import"./Layer-CTa4OydD.js";import"./Text-CZ97J0qN.js";import"./DOMUtils-JoNXkoCv.js";import"./Label-CGAHaC0Q.js";import"./ZIndexLayer-AOmKG0iq.js";import"./types-BDwtxhLH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Df0RtsJl.js";import"./ActivePoints-Zh-g-ty0.js";import"./Dot-pJFhyCMJ.js";import"./RegisterGraphicalItemId-DiJF1Hfp.js";import"./ErrorBarContext-D6agTjiV.js";import"./GraphicalItemClipPath-UbaOhT8l.js";import"./SetGraphicalItem-DzQbpKu1.js";import"./useAnimationId-APU2l9w6.js";import"./getRadiusAndStrokeWidthFromDot-DrD-zBLL.js";import"./ActiveShapeUtils--kZjLfXB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BBR3U7HU.js";import"./Trapezoid-CztQNmuh.js";import"./Sector-DCA192jN.js";import"./Symbols-DhIIpi5f.js";import"./Curve-DmusCa7H.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BXTK0ASf.js";import"./ChartSizeDimensions-fd2MIhjM.js";import"./OffsetShower-h-8uohRc.js";import"./PlotAreaShower-BfrbL-Yz.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
