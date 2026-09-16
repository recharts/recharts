import{R as e}from"./iframe-yjkt2IH9.js";import{R as a}from"./zIndexSlice-DBLHpMzC.js";import{C as p}from"./ComposedChart-BoyqtaUh.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CHFlKc_A.js";import{X as f}from"./XAxis-BmTXySuf.js";import{Y as l}from"./YAxis-DCAA5tHI.js";import{L as d}from"./Line-C6R7zilS.js";import{R as h}from"./ReferenceLine-Cmmwc0tu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DNcBTn_q.js";import"./index-BRngxrU7.js";import"./index-CV8Eusxy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C1hVLYYK.js";import"./isWellBehavedNumber-DxZkGz0e.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DXGMrlZO.js";import"./axisSelectors-Jt8yF-QI.js";import"./d3-scale-nv5WZ-MU.js";import"./index-PsDnrYhU.js";import"./index-BvMKJHsM.js";import"./renderedTicksSlice-CrS6eWPX.js";import"./index-BQpCoukA.js";import"./CartesianChart-B1g09AHb.js";import"./chartDataContext-B80RtjhA.js";import"./CategoricalChart-CKH0Hy4l.js";import"./CartesianAxis-B6MEtpsI.js";import"./Layer-DkCnbteg.js";import"./Text-DGqsL-zN.js";import"./DOMUtils-Cld05Rut.js";import"./useId-DlJSbOEb.js";import"./useBackwardsCompatibleTheme-D9TCWuL1.js";import"./Label-DNJm325E.js";import"./ZIndexLayer-akraxgUp.js";import"./types-cDH95ogz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CkZxc2JO.js";import"./step-DDqhC4ci.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DOXtHAOp.js";import"./useAnimationId-CMvFcnUz.js";import"./ActivePoints-D4dpp1py.js";import"./Dot-DjkzHWoo.js";import"./RegisterGraphicalItemId-Dy2Y8QPA.js";import"./ErrorBarContext-CCR7Bc51.js";import"./GraphicalItemClipPath-CrsQrVv0.js";import"./SetGraphicalItem-C0bV6rYE.js";import"./getRadiusAndStrokeWidthFromDot-CGTWwDkJ.js";import"./ActiveShapeUtils-CUarEX30.js";import"./useGraphicalItemIdentity-C3_xntvz.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
