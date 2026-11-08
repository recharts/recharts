import{R as e}from"./iframe-C0aK3mAR.js";import{R as a}from"./zIndexSlice-CaqKW8u4.js";import{C as p}from"./ComposedChart-Bb9qF-bw.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DCv6Fw-w.js";import{X as f}from"./XAxis-oAoSo46I.js";import{Y as l}from"./YAxis-7NanDh-1.js";import{L as d}from"./Line-YVyFfETe.js";import{R as h}from"./ReferenceLine-BANKNzHR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D6yE2Er3.js";import"./throttle-Csdh9d4D.js";import"./index-DJ1epRIR.js";import"./index-C-RKF6PB.js";import"./RechartsWrapper-D12_Reb0.js";import"./axisSelectors-D_X7VOsT.js";import"./polarAxisSelectors-CptuzTw1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B_djSwnK.js";import"./index-Dtyq-_Jm.js";import"./index-wV9G7-7k.js";import"./renderedTicksSlice-De1tNPIq.js";import"./index-BYUWoSWy.js";import"./fillDefinitions-D-bSMJSA.js";import"./CartesianChart-D4R8-bYQ.js";import"./chartDataContext-FpEebw8X.js";import"./CategoricalChart-D8DGrwi8.js";import"./CartesianAxis-CUkLyyeh.js";import"./Layer-CagqC790.js";import"./Text-sM2vj8c3.js";import"./ZIndexLayer-Cc5kF-_I.js";import"./Label-DrUlGLQ7.js";import"./types-CmOm39qI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-OWEMFZrc.js";import"./step-BYip5hLG.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-cRuikTAi.js";import"./ActivePoints-BHO4PoXJ.js";import"./Dot-C9rBqPl7.js";import"./activeStyles-D8lDViyk.js";import"./useAnimationId-sv0XuVET.js";import"./Symbols-CEatGjCT.js";import"./symbol-BI0KcbYN.js";import"./ErrorBarContext-zrW_wYS_.js";import"./SetGraphicalItem-D-GYSqJW.js";import"./getRadiusAndStrokeWidthFromDot-QbS_nSQ9.js";import"./ActiveShapeUtils-BPSXSNcd.js";import"./useEffectiveDataKey-C4GReELG.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
