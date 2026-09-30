import{R as e}from"./iframe-B96S8mAp.js";import{R as a}from"./zIndexSlice-D8E1yZ1V.js";import{C as p}from"./ComposedChart-CehmNKG2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BBsQv_-h.js";import{X as f}from"./XAxis-nVEhAG3F.js";import{Y as l}from"./YAxis-DfdWV3Tw.js";import{L as d}from"./Line-BO6upPIL.js";import{R as h}from"./ReferenceLine-TTNCbXNF.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ClBFd37Y.js";import"./index-DkqDlut5.js";import"./index-h_VAy7kX.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-hdreNdXc.js";import"./isWellBehavedNumber-DfNG0DIy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMN5w2mX.js";import"./axisSelectors-CoX3e_2U.js";import"./d3-scale-9nPPSrDa.js";import"./index-Bb9sRMCm.js";import"./index-C-l8V5Fx.js";import"./renderedTicksSlice-BTyytnZ2.js";import"./index-YSWiv6gp.js";import"./CartesianChart-a8pJKl2i.js";import"./chartDataContext-DDU_iWzI.js";import"./CategoricalChart-BJxf0mxD.js";import"./CartesianAxis-Bj8xr9W5.js";import"./Layer-DAZaOor8.js";import"./Text-BO1tL-Lm.js";import"./DOMUtils-B7FzpOG9.js";import"./useId-C9t3LM8u.js";import"./useBackwardsCompatibleTheme-BlUzVNC-.js";import"./Label-CqVVrAo5.js";import"./ZIndexLayer-DUeg7nPd.js";import"./types-Dzd-LsE5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-5IRE8Ev4.js";import"./step-98le-Vot.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B3aC5t_D.js";import"./useAnimationId-CEflbmtS.js";import"./ActivePoints-L_3TnI4T.js";import"./Dot-zng579xF.js";import"./RegisterGraphicalItemId-yOmcvIGu.js";import"./ErrorBarContext-D5MNBcr8.js";import"./GraphicalItemClipPath-RRykAftR.js";import"./SetGraphicalItem-CvYLLoCp.js";import"./getRadiusAndStrokeWidthFromDot-CnqQHwHm.js";import"./ActiveShapeUtils-CRg0xwL0.js";import"./useGraphicalItemIdentity-CBUuLMbL.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
