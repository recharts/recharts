import{R as e}from"./iframe-B8V7BJ0L.js";import{R as n}from"./zIndexSlice-D-1XQb3V.js";import{C as s}from"./ComposedChart-ixqus0AO.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-bAiL_XCh.js";import{X as f}from"./XAxis-R6swZGmX.js";import{Y as l}from"./YAxis-BU97uoiQ.js";import{R as d}from"./ReferenceDot-C2O8-sh8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CesEnXHC.js";import"./index-CEyD9286.js";import"./index-BrHErK0F.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BVc4-u0s.js";import"./isWellBehavedNumber-DJ8Z02p0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BnC-Jwam.js";import"./index-CpRh0f3d.js";import"./index-I3Tcx3uB.js";import"./axisSelectors-CtDpom86.js";import"./d3-scale-C_Pwa9HE.js";import"./renderedTicksSlice-BEoD_C5H.js";import"./CartesianChart-DbV6u1bg.js";import"./chartDataContext-DkhpcBdG.js";import"./CategoricalChart-CRJAPCFd.js";import"./CartesianAxis-BCPc0Lsn.js";import"./Layer-DSZQNu8u.js";import"./Text-DNMx3NKa.js";import"./DOMUtils-BPFNazbq.js";import"./useBackwardsCompatibleTheme-DRsZnCOS.js";import"./Label-eqtAA7cE.js";import"./ZIndexLayer-D9SG3bxa.js";import"./types-Bynmgm1l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-CtEJdvTp.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
