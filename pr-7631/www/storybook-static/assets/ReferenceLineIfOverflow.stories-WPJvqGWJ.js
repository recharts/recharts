import{R as e}from"./iframe-D8LGzSZk.js";import{R as n}from"./zIndexSlice-D4In7Qwm.js";import{C as p}from"./ComposedChart-DvTjgPom.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DKpR4i07.js";import{X as f}from"./XAxis-C_x0Pf4s.js";import{Y as l}from"./YAxis-D48rI8id.js";import{L as d}from"./Line-ZoXFLPkA.js";import{R as h}from"./ReferenceLine-IzMbYsOO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DBP8ZUoh.js";import"./index-NWBmwsqT.js";import"./index-BaqTm3t4.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BeJ0S4OV.js";import"./isWellBehavedNumber-D4yK7wtr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZZbYxLA.js";import"./index-fhqam811.js";import"./index-DA6ZImtD.js";import"./axisSelectors-BOb7-s4k.js";import"./d3-scale-MiqNvyLk.js";import"./renderedTicksSlice-CA4Xyl-r.js";import"./CartesianChart-D_d2iI6W.js";import"./chartDataContext-Cw__b2Gb.js";import"./CategoricalChart-CdB0xgvp.js";import"./CartesianAxis-B5BkrXXa.js";import"./Layer-BAr2SIyH.js";import"./Text-Ck4AHDur.js";import"./DOMUtils-wR-VJIN5.js";import"./Label-Bqhs0VHz.js";import"./ZIndexLayer-DHXeXlB8.js";import"./types-DdZOgyMd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CPh4O7nx.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DT0m8y-G.js";import"./step-DqFmeUpS.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CHvu2d7x.js";import"./useAnimationId-BUbByZru.js";import"./ActivePoints-OrQGZuXb.js";import"./Dot-Cpsl4ohG.js";import"./RegisterGraphicalItemId-Co71u55H.js";import"./ErrorBarContext-CERdVHDL.js";import"./graphicalItemIdentity-Cj_WIcRj.js";import"./SetGraphicalItem-CcV_dEEg.js";import"./getRadiusAndStrokeWidthFromDot-Cc17-_w5.js";import"./ActiveShapeUtils-325OC07p.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
