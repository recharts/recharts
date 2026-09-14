import{R as e}from"./iframe-BWDwgK_D.js";import{R as a}from"./zIndexSlice-C1O5MBWY.js";import{C as p}from"./ComposedChart-CGi5sLu_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D9ve2T0S.js";import{X as f}from"./XAxis-CrYBQ4mi.js";import{Y as l}from"./YAxis-DWY-SSge.js";import{L as d}from"./Line-B2_MzMwu.js";import{R as h}from"./ReferenceLine-CNBP9QE7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BcZmZghI.js";import"./index-B49xXNHt.js";import"./index-CCaysGPM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bp_p1EHk.js";import"./isWellBehavedNumber-WNu-UqrG.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DvAFqpAd.js";import"./axisSelectors-e9-Lmas5.js";import"./d3-scale-BpMJuDGQ.js";import"./index-kktikCBK.js";import"./index-DFG57tTU.js";import"./renderedTicksSlice-xUJav-aw.js";import"./index-y3EgPNWn.js";import"./CartesianChart-B6ulmZoL.js";import"./chartDataContext-D0xRn858.js";import"./CategoricalChart-D3lIPbNt.js";import"./CartesianAxis-CMJX9mZH.js";import"./Layer-DAcTuudf.js";import"./Text-BizBnj_T.js";import"./DOMUtils-iBBTwtfH.js";import"./useId-D1g06gFI.js";import"./useBackwardsCompatibleTheme-BYeMUCh_.js";import"./Label-BKEGIlSz.js";import"./ZIndexLayer-DRdRjEOe.js";import"./types-loTHP4vv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BJ0_3V4P.js";import"./step-BAFgT2Gg.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BustB_TV.js";import"./useAnimationId-_CO00dkp.js";import"./ActivePoints-nPDtSH3W.js";import"./Dot-ClXgqV3o.js";import"./RegisterGraphicalItemId-DRBnYmKx.js";import"./ErrorBarContext-DvedyHFP.js";import"./GraphicalItemClipPath-BC50Hrc5.js";import"./SetGraphicalItem-CmL2KxpU.js";import"./getRadiusAndStrokeWidthFromDot-VGRijqjA.js";import"./ActiveShapeUtils-CRD4kYgV.js";import"./useGraphicalItemIdentity-D6QbUwzB.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
