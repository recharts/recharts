import{R as e}from"./iframe-CrjMmK-P.js";import{R as a}from"./zIndexSlice-BjJGmtkk.js";import{C as p}from"./ComposedChart-DWFup1Gh.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-C7-EdVI_.js";import{X as f}from"./XAxis-Bf99Djp-.js";import{Y as l}from"./YAxis-WGtSziYB.js";import{L as d}from"./Line-BdPUp7B4.js";import{R as h}from"./ReferenceLine-DqutAJnc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DvPRoUwa.js";import"./index-C29X7Fc2.js";import"./index-BDweFuqO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-1lRPudDL.js";import"./isWellBehavedNumber-i-P4IxnU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-W15Lm7G0.js";import"./axisSelectors-CArdhpNf.js";import"./d3-scale-60bYpT2W.js";import"./index-DhUbeUHh.js";import"./index-C0KmE10p.js";import"./renderedTicksSlice-CoKKbA57.js";import"./index-p1bk8TMl.js";import"./CartesianChart-CtX-pqzv.js";import"./chartDataContext-rtr64WFG.js";import"./CategoricalChart-RhdZ5xjE.js";import"./CartesianAxis-B8LyCo9q.js";import"./Layer-D9-s7BIj.js";import"./Text-CvoG-yND.js";import"./DOMUtils-BLhe2-Wn.js";import"./useId-BEuvre-A.js";import"./useBackwardsCompatibleTheme-C_kcEgOz.js";import"./Label-BUscAhBU.js";import"./ZIndexLayer-BnhEIQdT.js";import"./types-DQIGWyvO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DmmzRQeA.js";import"./step-XIk4Qxhk.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DhhQShtD.js";import"./useAnimationId-yNh7qZi1.js";import"./ActivePoints-l6QKzYun.js";import"./Dot-BglkAryw.js";import"./RegisterGraphicalItemId-BtD1DcTG.js";import"./ErrorBarContext-DVTSO5_6.js";import"./GraphicalItemClipPath-d2m1y1AJ.js";import"./SetGraphicalItem-Cz1BmFYo.js";import"./getRadiusAndStrokeWidthFromDot-BZvBgzm6.js";import"./ActiveShapeUtils-DNRW1wio.js";import"./useGraphicalItemIdentity-D4eInQUL.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
