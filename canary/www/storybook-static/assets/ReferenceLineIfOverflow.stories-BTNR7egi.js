import{R as e}from"./iframe-BO6kNEfQ.js";import{R as a}from"./zIndexSlice-CSvwJ_UT.js";import{C as p}from"./ComposedChart-BIhV4Cn8.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-sQS0RZSA.js";import{X as f}from"./XAxis-DUMRPyWG.js";import{Y as l}from"./YAxis-Bpx19asJ.js";import{L as d}from"./Line-By4A7qsj.js";import{R as h}from"./ReferenceLine-0kL2xUR3.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CC5fq1IH.js";import"./index-C9e-3BIk.js";import"./index-CAnCLEru.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DeeWTLmP.js";import"./isWellBehavedNumber-B-Ulh-Re.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjhorxtA.js";import"./axisSelectors-clIGt-1m.js";import"./d3-scale-B89J0uLC.js";import"./index-CTBq7QCd.js";import"./index-BiTwoYeC.js";import"./renderedTicksSlice-CyXD3owy.js";import"./index-DGFWSvO2.js";import"./CartesianChart-DbU3p1bm.js";import"./chartDataContext-C8PMDwYi.js";import"./CategoricalChart-BBSMzdqi.js";import"./CartesianAxis-DkQVUKnt.js";import"./Layer-DAnsZuJj.js";import"./Text-CvDq8Z5Q.js";import"./DOMUtils-DjzhJzRg.js";import"./useId-CAIxAqit.js";import"./useBackwardsCompatibleTheme-DwFWyF9F.js";import"./Label-ktTcBfs2.js";import"./ZIndexLayer-BVG745mx.js";import"./types-CrvIZc3a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-hgySA8iE.js";import"./step-BjM5lwd1.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-FM3uBbR2.js";import"./useAnimationId-NFss7X44.js";import"./ActivePoints--BVAgljg.js";import"./Dot-Bps0tpeZ.js";import"./RegisterGraphicalItemId-DXmwJq0A.js";import"./ErrorBarContext-DAb2_Ge3.js";import"./GraphicalItemClipPath-CqCtj_pv.js";import"./SetGraphicalItem-CMnburaU.js";import"./getRadiusAndStrokeWidthFromDot-TV6VUSJm.js";import"./ActiveShapeUtils-CRw266nd.js";import"./useGraphicalItemIdentity-BOcRclg4.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
