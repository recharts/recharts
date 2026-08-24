import{R as e}from"./iframe-vymQxHWj.js";import{R as n}from"./zIndexSlice-CKW_xCBG.js";import{C as p}from"./ComposedChart-Cp91ph6L.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CW3jgbLP.js";import{X as f}from"./XAxis-Bzr2Ibny.js";import{Y as l}from"./YAxis-C5MuLC6_.js";import{L as d}from"./Line-Cne7Fv2j.js";import{R as h}from"./ReferenceLine-C5l7_Riq.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BK01krp9.js";import"./index-DA8rq6pv.js";import"./index-BGTNdYjX.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D1QpgZPc.js";import"./isWellBehavedNumber-CX2OxNKy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-98W6zG7g.js";import"./index-Cl4zISxW.js";import"./index-C2Yz5dWj.js";import"./axisSelectors-qkXPFIdN.js";import"./d3-scale-shLsO6db.js";import"./renderedTicksSlice-_g-coWrV.js";import"./CartesianChart-D1QWtDZ4.js";import"./chartDataContext-CLrXA2d3.js";import"./CategoricalChart-htsvTMax.js";import"./CartesianAxis-CmNHn6lS.js";import"./Layer-DHaSl27L.js";import"./Text-BroBeAan.js";import"./DOMUtils-BKNZKxmm.js";import"./useId-DUfTRFy5.js";import"./useBackwardsCompatibleTheme-DlCKuGJZ.js";import"./Label-CMMqvv98.js";import"./ZIndexLayer-ChwVVG6J.js";import"./types-ZBx8sWKw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BcJWtVmj.js";import"./step-BtdsF4BX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BAUw0A61.js";import"./useAnimationId-DSN2oeL8.js";import"./ActivePoints-C-mtjouo.js";import"./Dot-QKBcefll.js";import"./RegisterGraphicalItemId-DsxpdmKR.js";import"./ErrorBarContext-D9mVK9PP.js";import"./GraphicalItemClipPath-LHrRH_dp.js";import"./SetGraphicalItem-BeZQQame.js";import"./getRadiusAndStrokeWidthFromDot-ClysWG4b.js";import"./ActiveShapeUtils-Uk3GF-jB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
