import{R as e}from"./iframe-BMarL12M.js";import{R as n}from"./zIndexSlice-C3zFoeWv.js";import{C as p}from"./ComposedChart-DmXgJ0VK.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Z6_HDZb4.js";import{X as f}from"./XAxis-HDWpUUwS.js";import{Y as l}from"./YAxis-hUo2hZ05.js";import{L as d}from"./Line-BwUTPDsI.js";import{R as h}from"./ReferenceLine-BT-SJV_m.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-szqIxzqv.js";import"./index-Dlh6vJO1.js";import"./index-D9BBRgqz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C6wBzGKi.js";import"./isWellBehavedNumber-DBs0imhW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C2ncjDjR.js";import"./index-rELjxh9R.js";import"./index-vTpJvilY.js";import"./axisSelectors-DONKf7kg.js";import"./d3-scale-C4M2cZc9.js";import"./renderedTicksSlice-BGVDzAbm.js";import"./CartesianChart-Bsi6NNhA.js";import"./chartDataContext-BcZuDILO.js";import"./CategoricalChart-D3itWTr1.js";import"./CartesianAxis-CxMr6rDg.js";import"./Layer-DPtUoMDp.js";import"./Text-CGkcqRdd.js";import"./DOMUtils-DSG72bMg.js";import"./useBackwardsCompatibleTheme-DDTyJRfe.js";import"./Label-wMX0Bukp.js";import"./ZIndexLayer-4Y9-7gYz.js";import"./types-B-ESMolm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CqaRxmR5.js";import"./step-B2Vat6Ch.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BsByAcaR.js";import"./useAnimationId-W_lOfRkr.js";import"./ActivePoints-CaZ5IFfg.js";import"./Dot-BRm5AFxN.js";import"./RegisterGraphicalItemId-CxNs_80A.js";import"./ErrorBarContext-GzARO3dP.js";import"./GraphicalItemClipPath-CUFqqD93.js";import"./SetGraphicalItem-B6tJU4_Z.js";import"./getRadiusAndStrokeWidthFromDot-qR9Ssn50.js";import"./ActiveShapeUtils-_BzuEdws.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,he={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const we=["IfOverflow"];export{t as IfOverflow,we as __namedExportsOrder,he as default};
