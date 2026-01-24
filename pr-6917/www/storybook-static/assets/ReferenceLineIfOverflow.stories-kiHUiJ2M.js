import{e}from"./iframe-A-0tKSWD.js";import{R as n}from"./arrayEqualityCheck-Bi53fE_W.js";import{C as p}from"./ComposedChart-DpDrbSCn.js";import{C as s}from"./CartesianGrid-B7hvWmGU.js";import{X as c}from"./XAxis-BXhGyvV2.js";import{Y as f}from"./YAxis-DGY1JRVK.js";import{L as l}from"./Line-JkOAy3vk.js";import{R as d}from"./ReferenceLine-DF6Ghp56.js";import{R as h}from"./RechartsHookInspector-BiAUdU7M.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DGQ-_Q5N.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-SmBFshtg.js";import"./hooks-BIt-PEDd.js";import"./axisSelectors-BPBM-BQI.js";import"./zIndexSlice-BnuFP1kN.js";import"./CartesianChart-2alRd1pz.js";import"./chartDataContext-BdRC9Sc-.js";import"./CategoricalChart-El9GFkBl.js";import"./CartesianAxis-DX3J6okb.js";import"./Layer-CxQ6kbYz.js";import"./Text-DMK2KaGs.js";import"./DOMUtils-gTBfrWdN.js";import"./Label-C7autWsa.js";import"./ZIndexLayer-BJZUY29j.js";import"./types-BYDpjVEr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-ptTox43v.js";import"./ActivePoints-Jfec1qwc.js";import"./Dot-1LqtVP9Q.js";import"./RegisterGraphicalItemId-DjlQV6Vi.js";import"./ErrorBarContext-9JUs1gmp.js";import"./GraphicalItemClipPath-Sdkq8hlz.js";import"./SetGraphicalItem-C1AKRyjE.js";import"./useAnimationId-CvIqeW01.js";import"./getRadiusAndStrokeWidthFromDot-D6jqQXc0.js";import"./ActiveShapeUtils-CxepjeQB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C9GYhQ17.js";import"./Trapezoid-B9ii8EyS.js";import"./Sector-BedQrfAt.js";import"./Symbols-C_xPmfi9.js";import"./Curve-BQURRmu9.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B-Mvr0XH.js";import"./ChartSizeDimensions-22sFfi6P.js";import"./OffsetShower-C5qrbqGT.js";import"./PlotAreaShower-DXZIEGcd.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:a})=>{const{findByText:m}=y(a);v(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
