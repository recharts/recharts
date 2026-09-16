import{R as e}from"./iframe-14XWblZL.js";import{R as a}from"./zIndexSlice-bTipO816.js";import{C as p}from"./ComposedChart-BWmJnIiB.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-sqAOvoii.js";import{X as f}from"./XAxis-C7X69uLj.js";import{Y as l}from"./YAxis-B3LGD4EX.js";import{L as d}from"./Line-CWtoKG_V.js";import{R as h}from"./ReferenceLine-D4taJbAX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BdJ0G1gd.js";import"./index-BoYHIswN.js";import"./index-CyB2tElA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CeALBfEq.js";import"./isWellBehavedNumber-MwCzfGE9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DCy9svnE.js";import"./axisSelectors-CIwAjqs7.js";import"./d3-scale-Do0_JEbV.js";import"./index-kqeHVlrV.js";import"./index-CT88W_qc.js";import"./renderedTicksSlice-MhpbyeSe.js";import"./index-0t1fABOK.js";import"./CartesianChart-CccXTSFB.js";import"./chartDataContext-TCJzUoES.js";import"./CategoricalChart-BYZHR-yl.js";import"./CartesianAxis-CBKTwxf2.js";import"./Layer-DfNVM8Fr.js";import"./Text-DR2swdHV.js";import"./DOMUtils-BDBx2TYe.js";import"./useId-B0oD1V4p.js";import"./useBackwardsCompatibleTheme-CUWKt_Td.js";import"./Label-CvRLouIN.js";import"./ZIndexLayer-BpIepiPk.js";import"./types-DUuownuR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CiXwsAAl.js";import"./step-JufzNNlH.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dweh6qvQ.js";import"./useAnimationId-BF3NsOWV.js";import"./ActivePoints-CmDJ2stf.js";import"./Dot-CVbI_zwl.js";import"./RegisterGraphicalItemId-Bdmh3jKn.js";import"./ErrorBarContext-B0Gjb9Ej.js";import"./GraphicalItemClipPath-7jxlsFlx.js";import"./SetGraphicalItem-DlBXFH4y.js";import"./getRadiusAndStrokeWidthFromDot-CkcS_CHs.js";import"./ActiveShapeUtils-qHfZYwQx.js";import"./useGraphicalItemIdentity-QKGsdlin.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
