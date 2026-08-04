import{R as e}from"./iframe-CWA9dL1n.js";import{R as n}from"./zIndexSlice-aQmFZxtc.js";import{C as p}from"./ComposedChart-JYsLvtOs.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DQYoQUoz.js";import{X as f}from"./XAxis-DeVvUZ6V.js";import{Y as l}from"./YAxis-Crip943s.js";import{L as d}from"./Line-ClC6axgc.js";import{R as h}from"./ReferenceLine-BCQFmdZX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CO5aCb3a.js";import"./index-B9WDmcBs.js";import"./index-D3IuHkaK.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-3gLKwpWY.js";import"./isWellBehavedNumber-Bm4ocvOr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CId5I6PX.js";import"./index-C7DdHlxQ.js";import"./index-BzvjS6S7.js";import"./renderedTicksSlice-C0LhBYgl.js";import"./axisSelectors-kDLbJQaY.js";import"./d3-scale-CcIRMvmh.js";import"./CartesianChart-CjycZaTM.js";import"./chartDataContext-B92OI4-S.js";import"./CategoricalChart-19SPVwUn.js";import"./CartesianAxis-TOCYRN01.js";import"./Layer-DdfHe4zJ.js";import"./Text-B5gv-Qby.js";import"./DOMUtils-h2leYdBT.js";import"./Label-Ci3V9in7.js";import"./ZIndexLayer-DQgxZgR-.js";import"./types-Dm1l0pKT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-PN0Sf9X-.js";import"./isBuffer-BG75eWKN.js";import"./Curve-Cpe2XzR8.js";import"./step-DXLtdr_A.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-4dsj7PS2.js";import"./useAnimationId-BfVlpqgG.js";import"./ActivePoints-f0YyJDEU.js";import"./Dot-BzG5kAil.js";import"./RegisterGraphicalItemId-BY6CqeJu.js";import"./ErrorBarContext-CsfUMbkm.js";import"./GraphicalItemClipPath-CNA6w-35.js";import"./SetGraphicalItem-iurO2H6w.js";import"./graphicalItemIdentity--MezaesT.js";import"./ActiveShapeUtils-cijm59wq.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
