import{R as e}from"./iframe-DxWIhncV.js";import{R as n}from"./zIndexSlice-CvFttmX7.js";import{C as p}from"./ComposedChart-VHLo6-eR.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-KtGV8CEV.js";import{X as f}from"./XAxis-B9Vxe31q.js";import{Y as l}from"./YAxis-Dejd3ooC.js";import{L as d}from"./Line-DhAbYBrl.js";import{R as h}from"./ReferenceLine-DiYc0noi.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C5bM6B-L.js";import"./index-OyYFMy4T.js";import"./index-BKRCm9JK.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-V7Mvhtws.js";import"./isWellBehavedNumber-DTEIR8Fb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5eKH7dT.js";import"./index-CHkzAMA5.js";import"./index-39_4eaUE.js";import"./axisSelectors-CaYZoQ6p.js";import"./d3-scale-DFkdR_XV.js";import"./renderedTicksSlice-CNtjsUso.js";import"./CartesianChart-DMs5RbVK.js";import"./chartDataContext-BpCWz6pa.js";import"./CategoricalChart-CQ97Eg67.js";import"./CartesianAxis-Dlus29TQ.js";import"./Layer-BXKPNUYf.js";import"./Text-4TpGVjWK.js";import"./DOMUtils-B8BFdTtq.js";import"./useId-Dpmp0CEj.js";import"./useBackwardsCompatibleTheme-BcpIawcL.js";import"./Label-CAN8FPPW.js";import"./ZIndexLayer-A4oI6laB.js";import"./types-B27w_GlE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BX3Cphj_.js";import"./step-DblRmU4B.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cm27eF4G.js";import"./useAnimationId-CS78eYs3.js";import"./ActivePoints-Dh0odHQM.js";import"./Dot-Bcw6SvmA.js";import"./RegisterGraphicalItemId-gsLQrx3F.js";import"./ErrorBarContext-Co5aZWql.js";import"./GraphicalItemClipPath-BD7TyuJB.js";import"./SetGraphicalItem-CWf4S0Af.js";import"./getRadiusAndStrokeWidthFromDot-Lj51QhJv.js";import"./ActiveShapeUtils-BEf0C1mK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ve=["IfOverflow"];export{t as IfOverflow,ve as __namedExportsOrder,we as default};
