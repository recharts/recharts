import{R as e}from"./iframe-BeltcMgq.js";import{R as n}from"./zIndexSlice-ChbQV9za.js";import{C as p}from"./ComposedChart-naju1Utf.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-HasRi3wP.js";import{X as f}from"./XAxis-DT2umrlt.js";import{Y as l}from"./YAxis-Dm0u982e.js";import{L as d}from"./Line-jXfK2EIu.js";import{R as h}from"./ReferenceLine-CeDXQ_dG.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BYDh_fcZ.js";import"./index-DdbLs963.js";import"./index-D1BJqAdU.js";import"./get-Blzhyn8O.js";import"./resolveDefaultProps-Bi5xr7q4.js";import"./isWellBehavedNumber-Ho-XzrAB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-afo15-1c.js";import"./index-DN-_Sx45.js";import"./index-BWKSKuqG.js";import"./renderedTicksSlice-BWzIqvlP.js";import"./axisSelectors-DoBuhKXQ.js";import"./d3-scale-D9qfoPRi.js";import"./CartesianChart-DU3tYN-2.js";import"./chartDataContext-BTBnexhV.js";import"./CategoricalChart-CYbFsyR9.js";import"./CartesianAxis-SUuO_eM5.js";import"./Layer-CtUZ3qxP.js";import"./Text-zWkWuZ8O.js";import"./DOMUtils-BiPI68kE.js";import"./Label-CRfC-ZbS.js";import"./ZIndexLayer-CXY-gIuZ.js";import"./types-BjpCNPaQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CGP8Kyx3.js";import"./step-BCv6lKfH.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dkw2Nvms.js";import"./useAnimationId-CnyBiRCJ.js";import"./ActivePoints-Ba7rTZZ7.js";import"./Dot-BQsxsBTP.js";import"./RegisterGraphicalItemId-B1kcHgmx.js";import"./ErrorBarContext-DUSNqADu.js";import"./GraphicalItemClipPath-CSrYVdhv.js";import"./SetGraphicalItem-D8n7ZbTI.js";import"./getRadiusAndStrokeWidthFromDot-BvOJydOS.js";import"./ActiveShapeUtils-BaRNo4pA.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const le=["IfOverflow"];export{t as IfOverflow,le as __namedExportsOrder,fe as default};
