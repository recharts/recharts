import{R as e}from"./iframe-BqYy1R0H.js";import{R as n}from"./zIndexSlice-V534Dm1F.js";import{C as p}from"./ComposedChart-CrNF5qca.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B4_mJDYh.js";import{X as f}from"./XAxis-BqSBdy-L.js";import{Y as l}from"./YAxis-BqslSc7g.js";import{L as d}from"./Line-B-irt6PV.js";import{R as h}from"./ReferenceLine-CpA29uBP.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Bl4OFMGN.js";import"./index-aB2rylH4.js";import"./index-C5sdWpfd.js";import"./get-BmpbLRXi.js";import"./resolveDefaultProps-DF5EmNm0.js";import"./isWellBehavedNumber-Bh7WW-St.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cr-pgoDs.js";import"./index-Bep5EplS.js";import"./index--UqKWgbM.js";import"./renderedTicksSlice-DUFmYLd3.js";import"./axisSelectors-B5gEtu2k.js";import"./d3-scale-x-g3_XS_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-nuuk7Fog.js";import"./chartDataContext-Cg_GXcDk.js";import"./CategoricalChart-DKKEuBf1.js";import"./CartesianAxis-x5MMDJHG.js";import"./Layer-FvXx8y_M.js";import"./Text-Bb7f-h23.js";import"./DOMUtils-BM94Xuwo.js";import"./Label-NYQMjqVT.js";import"./ZIndexLayer-COarhLNo.js";import"./types-CKi3J98u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CjCX_hKZ.js";import"./step-eDccUZNe.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BbE46Kp8.js";import"./useAnimationId-BGeq3Yxk.js";import"./ActivePoints-CUtjERgT.js";import"./Dot-CRjCuWT2.js";import"./RegisterGraphicalItemId-CLltNWrh.js";import"./ErrorBarContext-DTNv6sWg.js";import"./GraphicalItemClipPath-CsvgNQl2.js";import"./SetGraphicalItem-CBYRQcWu.js";import"./getRadiusAndStrokeWidthFromDot-C-NmK4oc.js";import"./ActiveShapeUtils--vnzUd2H.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
