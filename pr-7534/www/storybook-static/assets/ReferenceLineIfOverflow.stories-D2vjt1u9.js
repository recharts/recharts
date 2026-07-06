import{R as e}from"./iframe-Dz7fOwcI.js";import{R as n}from"./zIndexSlice-DlvYonxh.js";import{C as p}from"./ComposedChart-Dj2W9R-k.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-NZHV0vEk.js";import{X as f}from"./XAxis-DFw5p9mB.js";import{Y as l}from"./YAxis-BBLdCd6N.js";import{L as d}from"./Line-GkfmxRQ_.js";import{R as h}from"./ReferenceLine-BFZcZuyw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-P3hcp8f5.js";import"./index-ClEhXPgh.js";import"./index-CItZCrSt.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-iMaSxvai.js";import"./isWellBehavedNumber-BNED1DFM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGGSKz0I.js";import"./index-wFbpiefS.js";import"./index-DeBQrWVz.js";import"./renderedTicksSlice-DgHHusta.js";import"./axisSelectors-BrQnrxrh.js";import"./d3-scale-DvZHjVYW.js";import"./CartesianChart-B9Hxpjtk.js";import"./chartDataContext-_X11uzVv.js";import"./CategoricalChart-DAJpY1kv.js";import"./CartesianAxis-Ccqj4A2W.js";import"./Layer-Cbl9ckF3.js";import"./Text-Bb3XY4nD.js";import"./DOMUtils-ChsYv9qG.js";import"./Label-DdFPLPtR.js";import"./ZIndexLayer-uLTirNmh.js";import"./types-BbykzSU1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DkNdhu-H.js";import"./step-Dr4bnBR_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DmM_DoTI.js";import"./useAnimationId-DXftpzbd.js";import"./ActivePoints-DujeTKJ8.js";import"./Dot-DKtI2fI_.js";import"./RegisterGraphicalItemId-nSw_C2Ok.js";import"./ErrorBarContext-DsGpPWxc.js";import"./GraphicalItemClipPath-BgvZ3vl9.js";import"./SetGraphicalItem-Dj4x9kmg.js";import"./getRadiusAndStrokeWidthFromDot-uAG-X1Nw.js";import"./ActiveShapeUtils-CpKGxq0o.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const le=["IfOverflow"];export{t as IfOverflow,le as __namedExportsOrder,fe as default};
