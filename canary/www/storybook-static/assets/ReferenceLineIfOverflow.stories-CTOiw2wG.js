import{R as e}from"./iframe-B5suke5B.js";import{R as a}from"./zIndexSlice-D0kihEsS.js";import{C as p}from"./ComposedChart-sXWnmRwm.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BOHzxaJ-.js";import{X as f}from"./XAxis-CtU2ba0a.js";import{Y as l}from"./YAxis-6eL7FIQY.js";import{L as d}from"./Line-C5jas6pR.js";import{R as h}from"./ReferenceLine-DTyUNlKE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-yXst2GNy.js";import"./index-D-nx8SRU.js";import"./index-0E1UP6ea.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CLTE-4Yl.js";import"./isWellBehavedNumber-BdM77gE7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-xDK7h46M.js";import"./axisSelectors-Bxd1L_G4.js";import"./d3-scale-lqW361z6.js";import"./index-AUvHwQMM.js";import"./index-QzaRG_bO.js";import"./renderedTicksSlice-DN6DkPzy.js";import"./index-BJ8eFwlr.js";import"./CartesianChart-an0uCQ19.js";import"./chartDataContext-7ysfjD_K.js";import"./CategoricalChart-am3Id38i.js";import"./CartesianAxis-DDYqByWb.js";import"./Layer-TMg83YAh.js";import"./Text-rc7ZZmS8.js";import"./DOMUtils-W5ZSww-v.js";import"./useId-BWjKNL9O.js";import"./useBackwardsCompatibleTheme-D8o_0ZGr.js";import"./Label-BAgGrzQX.js";import"./ZIndexLayer-BCqg4Zz6.js";import"./types-AnLHRdTF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BEbKvH6j.js";import"./step-DAq7_1My.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-vhEGvzj0.js";import"./useAnimationId-rfQUB_TF.js";import"./ActivePoints-BHQL7RSY.js";import"./Dot-i8VNrcLy.js";import"./RegisterGraphicalItemId-BgozNBK6.js";import"./ErrorBarContext-DlJnMayP.js";import"./GraphicalItemClipPath-DRG66VTj.js";import"./SetGraphicalItem-CVhYGG_S.js";import"./getRadiusAndStrokeWidthFromDot-YwdC5Jzm.js";import"./ActiveShapeUtils-CHch558p.js";import"./useGraphicalItemIdentity-Caq5Yc5Z.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
