import{R as e}from"./iframe-qT01O9Sv.js";import{R as a}from"./zIndexSlice-CQsHAgGp.js";import{C as p}from"./ComposedChart-Cdt083mL.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DadbDxyY.js";import{X as f}from"./XAxis-DvY9B2Zg.js";import{Y as l}from"./YAxis-BCysskQY.js";import{L as d}from"./Line-C5MJ3vW-.js";import{R as h}from"./ReferenceLine-CFI7KpFC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D76jGjFc.js";import"./index-CMK8nXr3.js";import"./index-CZve0KBd.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CLCbJ4OP.js";import"./isWellBehavedNumber-D5wQM5xZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-5WR8ig5Z.js";import"./axisSelectors-Ciilyz6p.js";import"./d3-scale-DNrxalK8.js";import"./index-Be2AoQLY.js";import"./index-DrjB0Jj4.js";import"./renderedTicksSlice-CJBkl3kj.js";import"./index-ej6C5682.js";import"./CartesianChart-WF9by-pK.js";import"./chartDataContext-Bb09oFLY.js";import"./CategoricalChart-DQ-LhVLQ.js";import"./CartesianAxis-CbAqj6_Z.js";import"./Layer-CgXLDOPB.js";import"./Text-DKzR6dpy.js";import"./DOMUtils-fvdo4GSp.js";import"./useId-CyAqziAf.js";import"./useBackwardsCompatibleTheme-BN2NPKue.js";import"./Label-dJvVWn2Q.js";import"./ZIndexLayer-D8adGQSs.js";import"./types-B4toHZjd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C2aosV7t.js";import"./step-C8r8uJ0U.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-ByVfA06q.js";import"./useAnimationId-CmZNawFJ.js";import"./ActivePoints-6Ngyl1w3.js";import"./Dot-5BUC2hEg.js";import"./RegisterGraphicalItemId-CjZ2fJX7.js";import"./ErrorBarContext-E3DYF7br.js";import"./GraphicalItemClipPath-FAcvdPD9.js";import"./SetGraphicalItem-BfkU9VdL.js";import"./getRadiusAndStrokeWidthFromDot-avuw4vHy.js";import"./ActiveShapeUtils-BBHh2Hrz.js";import"./useGraphicalItemIdentity-CvGdzJl8.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
