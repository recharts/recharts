import{R as e}from"./iframe-DwwIEbnV.js";import{R as n}from"./zIndexSlice-CQLOtaPs.js";import{C as p}from"./ComposedChart-Cmp_uiAi.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BIHoZcmB.js";import{X as f}from"./XAxis-Cz_Rnhgj.js";import{Y as l}from"./YAxis-Bawx2GP2.js";import{L as d}from"./Line-B-nrSDyv.js";import{R as h}from"./ReferenceLine-CHukn_jn.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Blsl_VHV.js";import"./index-8KuM36sP.js";import"./index-DybJUNaL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BAdQSn8_.js";import"./isWellBehavedNumber-8UixZU7J.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BuqxCVgz.js";import"./axisSelectors-Cxc5coFg.js";import"./d3-scale-DUeQ8AUA.js";import"./index-DnZ0PMCs.js";import"./index-Dy8lu7uT.js";import"./renderedTicksSlice-COQyRYk9.js";import"./index-DEjMF1lf.js";import"./CartesianChart-CyJUqNIj.js";import"./chartDataContext-UFw-Jz6V.js";import"./CategoricalChart-COFTchkj.js";import"./CartesianAxis-Duh3rzkN.js";import"./Layer-6Fp4VzoQ.js";import"./Text-CoeOXdGz.js";import"./DOMUtils-Da_EKwNY.js";import"./useId-ccy3SIu_.js";import"./useBackwardsCompatibleTheme-Fn2SpsbR.js";import"./Label-BBU3iKAi.js";import"./ZIndexLayer-B_JcFefp.js";import"./types-DYVbiWe3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DrEaRkOl.js";import"./step-CWAHA4V_.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Ds3KeOI2.js";import"./useAnimationId-Cx0Chyvr.js";import"./ActivePoints-DJFnJVEG.js";import"./Dot-DmrEwaiX.js";import"./RegisterGraphicalItemId-BM_5HpC8.js";import"./ErrorBarContext-BgIeQnXJ.js";import"./GraphicalItemClipPath-CajkPYvX.js";import"./SetGraphicalItem-jtaJvjxx.js";import"./getRadiusAndStrokeWidthFromDot-jdfKPlMV.js";import"./ActiveShapeUtils-D4ijpv1W.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ye=["IfOverflow"];export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
