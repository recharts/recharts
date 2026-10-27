import{R as e}from"./iframe-DHcJjYhp.js";import{R as a}from"./zIndexSlice-Cc80mhc9.js";import{C as p}from"./ComposedChart-Bv15pDbO.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-ZdT5meIL.js";import{X as f}from"./XAxis-BsCapYe_.js";import{Y as l}from"./YAxis-CgAAJes1.js";import{L as d}from"./Line-CQxvfX6V.js";import{R as h}from"./ReferenceLine-CcCGpDCv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BvovYCe7.js";import"./throttle-GOg0Fvd7.js";import"./index-DrarxPoz.js";import"./index-DIJK83CB.js";import"./RechartsWrapper-DW6cza7Q.js";import"./axisSelectors-CcZJHo_q.js";import"./polarAxisSelectors-CcC4x2tN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CySl75ZF.js";import"./index-CKtel9-l.js";import"./index-Cln2IwYT.js";import"./renderedTicksSlice-Bl5XAOUo.js";import"./index-D3Qy2UUT.js";import"./CartesianChart-B9teWspu.js";import"./ZIndexPortal-pZH-aZp_.js";import"./CategoricalChart-mtPMptXy.js";import"./CartesianAxis-I4Gfetq1.js";import"./Layer-BayIcTfz.js";import"./Text-BAIudaB2.js";import"./pageBackground-CtNdVSAn.js";import"./ZIndexLayer-_GMRW-y_.js";import"./Label-CDs-ZtGW.js";import"./dataEntryStyles-DyEOYp64.js";import"./types-BNrWE8hx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CK2uyVOO.js";import"./step-CaKisAF4.js";import"./path-DyVhHtw_.js";import"./LabelList-CQ-NHiOO.js";import"./ActivePoints-D-AhTPsw.js";import"./Dot-CC8f5qsB.js";import"./activeStyles-CGuSRajE.js";import"./useAnimationId-r_2cTbPz.js";import"./Symbols-yzipNpVJ.js";import"./symbol-l4VrHHkB.js";import"./RegisterGraphicalItemId-CLn33yWX.js";import"./ErrorBarContext-GsyzIiJa.js";import"./SetGraphicalItem-CQRz0ej3.js";import"./getRadiusAndStrokeWidthFromDot-xrAdJmyj.js";import"./ActiveShapeUtils-BGsGLrPh.js";import"./useEffectiveDataKey-wQhirjtm.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
