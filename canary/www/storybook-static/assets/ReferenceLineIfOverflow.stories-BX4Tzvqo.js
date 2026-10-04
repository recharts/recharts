import{R as e}from"./iframe-BWaBJMJm.js";import{R as a}from"./zIndexSlice-CtmWcXao.js";import{C as p}from"./ComposedChart-DVxlQhI3.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-aXpXVra_.js";import{X as f}from"./XAxis-Du0WrONz.js";import{Y as l}from"./YAxis-BbW4o0g7.js";import{L as d}from"./Line-CU6Xn_4t.js";import{R as h}from"./ReferenceLine-qTJnc5Ax.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dt5qCkk5.js";import"./index-DUifKCeq.js";import"./index-D2GUCawm.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BoTf8eWq.js";import"./isWellBehavedNumber-hjVXvh9H.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C_LHq0Dp.js";import"./axisSelectors-WjeILgtA.js";import"./d3-scale-DYdeDEBW.js";import"./index-I7xfvYkR.js";import"./index-B1abja9I.js";import"./renderedTicksSlice-B4vPTGd7.js";import"./index-BakoavmS.js";import"./CartesianChart-DTHkZiLZ.js";import"./chartDataContext-D5Ez6fbj.js";import"./CategoricalChart-DZaCTL-I.js";import"./CartesianAxis-ihxfexzN.js";import"./Layer-WH1GH-3R.js";import"./Text-CaLxBG_J.js";import"./DOMUtils-ZU1bRPvN.js";import"./useId-DH400x7B.js";import"./useBackwardsCompatibleTheme-C9V53e4Q.js";import"./Label-DaAaSDK3.js";import"./ZIndexLayer-BbdMqToM.js";import"./types-CeFzDtUp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BVKe4kAy.js";import"./step-DX3wHcPe.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CqoL6PKs.js";import"./useAnimationId-CrzFE7bT.js";import"./ActivePoints-DYqGU2MV.js";import"./Dot-bDcTuFpT.js";import"./RegisterGraphicalItemId-B7vtKiJL.js";import"./ErrorBarContext-BU0PpEiW.js";import"./GraphicalItemClipPath-DPY_uU75.js";import"./SetGraphicalItem-DSLLIs8g.js";import"./getRadiusAndStrokeWidthFromDot-DUWDkXPH.js";import"./ActiveShapeUtils-DlN6eMVb.js";import"./useGraphicalItemIdentity-B-PLK1-q.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
