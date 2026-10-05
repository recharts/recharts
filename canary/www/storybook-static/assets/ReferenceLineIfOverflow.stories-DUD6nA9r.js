import{R as e}from"./iframe-BfMFh77x.js";import{R as a}from"./zIndexSlice-Cztpg_sh.js";import{C as p}from"./ComposedChart-9snNPueS.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Bl5FKjDT.js";import{X as f}from"./XAxis-k9LTsr7W.js";import{Y as l}from"./YAxis-KlCpPZpc.js";import{L as d}from"./Line-CwvcO-PT.js";import{R as h}from"./ReferenceLine-BySDTHFQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BwatAsiE.js";import"./index-DROOMzyH.js";import"./index-B4iccN4g.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B4G3dz_P.js";import"./isWellBehavedNumber-MC_-4Sz8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0SS5kvR.js";import"./axisSelectors-DoWmjLIh.js";import"./d3-scale-DZONVDEO.js";import"./index-D4qjDIL1.js";import"./index-3-96IZAO.js";import"./renderedTicksSlice-BnDYFPsi.js";import"./index-DX1BsebK.js";import"./CartesianChart-nK5Jsuas.js";import"./chartDataContext-icTGDudH.js";import"./CategoricalChart-CD0F4PlX.js";import"./CartesianAxis-BFOn3Dtf.js";import"./Layer-ckuwG36h.js";import"./Text-DEsVSfke.js";import"./DOMUtils-CakfvwTP.js";import"./useId-DVFEoxf5.js";import"./useBackwardsCompatibleTheme-DnqD941W.js";import"./Label-D2fJdiFl.js";import"./ZIndexLayer-DqwLDNFX.js";import"./types-Ccphz-V5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-QoN7k3_4.js";import"./step-DXJqGD70.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DBTQ-7wC.js";import"./useAnimationId-DwVIllah.js";import"./ActivePoints-BxTaRtGv.js";import"./Dot-BjmaMaBF.js";import"./RegisterGraphicalItemId-CyLRpybL.js";import"./ErrorBarContext-CANgFbqT.js";import"./GraphicalItemClipPath-D-McSxMj.js";import"./SetGraphicalItem-BkQyU4p0.js";import"./getRadiusAndStrokeWidthFromDot-LBHtKVz7.js";import"./ActiveShapeUtils-PP0TbsoH.js";import"./useGraphicalItemIdentity-CFRBZ7j4.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
