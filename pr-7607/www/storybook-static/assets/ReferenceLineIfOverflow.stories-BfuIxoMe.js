import{R as e}from"./iframe-Da76_689.js";import{R as n}from"./zIndexSlice-a0xNinnk.js";import{C as p}from"./ComposedChart--w51xXk6.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CnvFZ9BI.js";import{X as f}from"./XAxis-DepWA4im.js";import{Y as l}from"./YAxis-Dp_F69G6.js";import{L as d}from"./Line-Cqr58geY.js";import{R as h}from"./ReferenceLine-DVUiJz0F.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-COYVVxZg.js";import"./index-C8Z1S5Pt.js";import"./index-DUt0bfqM.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BpFPYIFo.js";import"./isWellBehavedNumber-CH2-kpaa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BJISCefM.js";import"./index-DhFXp8vM.js";import"./index-JDhekbA3.js";import"./renderedTicksSlice-ObOqR6xe.js";import"./axisSelectors-Bw6517Pm.js";import"./d3-scale-DyCdYIOY.js";import"./CartesianChart-Cprw1vi1.js";import"./chartDataContext-BxrKQ5f-.js";import"./CategoricalChart-D82DfAs8.js";import"./CartesianAxis-BQNrFnRM.js";import"./Layer-BItCE877.js";import"./Text-C0rNKqCf.js";import"./DOMUtils-B2_jGy5F.js";import"./Label-BNqYKN1e.js";import"./ZIndexLayer-DP22msHm.js";import"./types-Dy7AAOTV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BbZg4AjH.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BZ7uJ3AN.js";import"./step-fSL6Yfr6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-TTrqb8VQ.js";import"./useAnimationId-hnsh8Uwf.js";import"./ActivePoints-XUjLYmrr.js";import"./Dot-Clx9ykW3.js";import"./RegisterGraphicalItemId-DiJJvqsF.js";import"./ErrorBarContext-rSCCD8H3.js";import"./GraphicalItemClipPath-BO9b33Ly.js";import"./SetGraphicalItem-Bzc-F73M.js";import"./graphicalItemIdentity-HzAIj0MZ.js";import"./ActiveShapeUtils-Da9-43zR.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
