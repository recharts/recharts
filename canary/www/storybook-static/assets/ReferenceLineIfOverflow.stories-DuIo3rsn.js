import{R as e}from"./iframe-BFObQXXM.js";import{R as a}from"./zIndexSlice-BvSBG_sk.js";import{C as p}from"./ComposedChart-DfJYfYyB.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-XMqhd9pN.js";import{X as f}from"./XAxis-qu1te6gL.js";import{Y as l}from"./YAxis-DaKTxPc7.js";import{L as d}from"./Line-fvr9nFjR.js";import{R as h}from"./ReferenceLine-CAOkLMrE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DjO6J8yc.js";import"./index-BDLQEm-M.js";import"./index-DuyOw6al.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BRFxqhI5.js";import"./isWellBehavedNumber-Di8XhGY_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D0l9eNV0.js";import"./axisSelectors-CVf0-qpU.js";import"./d3-scale-Da5OAhLE.js";import"./index-D88_648m.js";import"./index-DgBcae_n.js";import"./renderedTicksSlice-ElbwHqBe.js";import"./index-D3gbqmrd.js";import"./CartesianChart-D-DmleFH.js";import"./chartDataContext-DLE8D3iQ.js";import"./CategoricalChart-CTQAivkk.js";import"./CartesianAxis-LKjUZ976.js";import"./Layer-B5sm7Diz.js";import"./Text-CJhUB4hq.js";import"./pageBackground-C-W7t-2X.js";import"./useId-C4vD49YQ.js";import"./useBackwardsCompatibleTheme-SoWlTCM6.js";import"./Label-DDOQ4R0s.js";import"./ZIndexLayer-Dx_I1S2M.js";import"./types-D0QZpxYL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-vRM4WLtL.js";import"./step-DZUEZKzr.js";import"./path-DyVhHtw_.js";import"./activeStyles-CWTGeeaa.js";import"./useAnimationId-5IpIdjB8.js";import"./dataEntryStyles-BYgKVvun.js";import"./ActivePoints-u30qQxp9.js";import"./Dot-D0UZAudw.js";import"./ErrorBarContext-A6KbAgUZ.js";import"./GraphicalItemClipPath-Veko-L0U.js";import"./SetGraphicalItem-UiOjxlQM.js";import"./getRadiusAndStrokeWidthFromDot-l8Ertzo7.js";import"./ActiveShapeUtils-3kPY9Bl6.js";import"./useEffectiveDataKey-DoMzN8uO.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
