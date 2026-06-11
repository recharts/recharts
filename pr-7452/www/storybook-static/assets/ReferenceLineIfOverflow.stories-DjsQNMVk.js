import{R as e}from"./iframe-DBxFP3uX.js";import{R as n}from"./zIndexSlice-B_9s4KsU.js";import{C as p}from"./ComposedChart-CWD6KhhR.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-sOQxN6gG.js";import{X as f}from"./XAxis-CQTPr47R.js";import{Y as l}from"./YAxis-BneRoowy.js";import{L as d}from"./Line-_qToq4r1.js";import{R as h}from"./ReferenceLine-DFpJZXNR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DjG9xqx-.js";import"./index-DgF-9ML2.js";import"./index-DJo0-J4-.js";import"./get-CN0u3twK.js";import"./resolveDefaultProps-DCaDIMSr.js";import"./isWellBehavedNumber-BiB40tPr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DEp3al8N.js";import"./index-BcBtkybK.js";import"./index-CNd0a_qD.js";import"./renderedTicksSlice-BowbWmvp.js";import"./axisSelectors-B_9j14vR.js";import"./d3-scale-B06022wF.js";import"./string-B6fdYHAA.js";import"./CartesianChart-GxlalsIE.js";import"./chartDataContext-CZK58LYI.js";import"./CategoricalChart-CKuMbTEb.js";import"./CartesianAxis-tZocWrkt.js";import"./Layer-Buso2Ccs.js";import"./Text-CmyuUjWM.js";import"./DOMUtils-CU_Od2Bc.js";import"./Label-Dhv9vMg4.js";import"./ZIndexLayer-DBGeCZYh.js";import"./types-B2FPYU3d.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Dh6mi4Et.js";import"./step-CqGdUrTJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ooNl266t.js";import"./useAnimationId-54G3nUfQ.js";import"./ActivePoints-hNSOrLBT.js";import"./Dot-g-iDk6Aa.js";import"./RegisterGraphicalItemId-BzdV07RL.js";import"./ErrorBarContext-D7bc2l2n.js";import"./GraphicalItemClipPath-CDU2cR1P.js";import"./SetGraphicalItem-DoJqlCoL.js";import"./getRadiusAndStrokeWidthFromDot-CAXSoZ4P.js";import"./ActiveShapeUtils-Bhf79Nyo.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
