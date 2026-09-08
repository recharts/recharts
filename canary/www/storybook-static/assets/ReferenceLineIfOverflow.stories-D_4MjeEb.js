import{R as e}from"./iframe-DwQ960mE.js";import{R as a}from"./zIndexSlice-CRshAYou.js";import{C as p}from"./ComposedChart-njiJAHmg.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-EseD34jE.js";import{X as f}from"./XAxis-C3ApfTuq.js";import{Y as l}from"./YAxis-BMPG6Jn9.js";import{L as d}from"./Line-BsyPe3kF.js";import{R as h}from"./ReferenceLine-CqrGOtd2.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CBpng8v-.js";import"./index-934SWzTj.js";import"./index-BoR0gZ14.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-yLRPEvQ6.js";import"./isWellBehavedNumber-C8IRNLp2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CV7KCZiE.js";import"./axisSelectors-BuM-hXsR.js";import"./d3-scale-CB-MSXXc.js";import"./index-D_T8BRhY.js";import"./index-Dhp6LnMJ.js";import"./renderedTicksSlice-ByN1eXqa.js";import"./index-Cfk5_Nje.js";import"./CartesianChart-D1gjFL-f.js";import"./chartDataContext-XXv1Y0Lr.js";import"./CategoricalChart-puUF4rGm.js";import"./CartesianAxis-B1j0Zzpr.js";import"./Layer-nbNG3urG.js";import"./Text-D31azkqa.js";import"./DOMUtils-jWrmId9V.js";import"./useId-Do6UThpj.js";import"./useBackwardsCompatibleTheme-1nd_EnAF.js";import"./Label-BnvMog58.js";import"./ZIndexLayer-CNwoXSbx.js";import"./types-BF5horUV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DlR_mCFH.js";import"./step-fQiYLSQ2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems--DCjDL7v.js";import"./useAnimationId-CgdCBqIf.js";import"./ActivePoints-Dl85NR7O.js";import"./Dot-B_Wd5Y7s.js";import"./RegisterGraphicalItemId-zN7Xc-Dd.js";import"./ErrorBarContext-C6-51rId.js";import"./GraphicalItemClipPath-BwWJK4tk.js";import"./SetGraphicalItem-DQfhPOxL.js";import"./getRadiusAndStrokeWidthFromDot-Bgbvlm_y.js";import"./ActiveShapeUtils-DQGjc9Is.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
