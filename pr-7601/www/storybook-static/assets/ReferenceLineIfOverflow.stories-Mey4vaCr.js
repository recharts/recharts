import{R as e}from"./iframe-B1mwOZ4B.js";import{R as n}from"./zIndexSlice-DpKDqXzy.js";import{C as p}from"./ComposedChart-BJ29ova_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DBXsj84G.js";import{X as f}from"./XAxis-BJXCAx8k.js";import{Y as l}from"./YAxis-CJdoflUo.js";import{L as d}from"./Line-Doz1RfmB.js";import{R as h}from"./ReferenceLine-5aR0Jj5F.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B9hrHP2z.js";import"./index-CGmAV-n6.js";import"./index-DfE0c-YN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C5OuETHs.js";import"./isWellBehavedNumber-CJikzJGt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CO3J1RuZ.js";import"./index-h2iP9BkR.js";import"./index-CErrAQ9r.js";import"./renderedTicksSlice-CU0BXE-7.js";import"./axisSelectors-CHibCpWI.js";import"./d3-scale-C-ENdXUt.js";import"./CartesianChart-0J6AxZg0.js";import"./chartDataContext-4XOxxqNR.js";import"./CategoricalChart-aKqfV8G8.js";import"./CartesianAxis-DVp2DYfW.js";import"./Layer-BPIZMWg2.js";import"./Text-BvU8EdL8.js";import"./DOMUtils-j3EH7wUz.js";import"./Label-B_N5n860.js";import"./ZIndexLayer-Dgr6-NYc.js";import"./types-D3n9ld0M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-ATwIj2YD.js";import"./isBuffer-Crkas5dz.js";import"./Curve-BdmH34os.js";import"./step-CnGXO0Ja.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CP4Ed5tB.js";import"./useAnimationId-DOfhPbEn.js";import"./ActivePoints-HVYpWw6k.js";import"./Dot-DiSbgsbS.js";import"./RegisterGraphicalItemId-CNYa3zPu.js";import"./ErrorBarContext-BUi-bCeZ.js";import"./GraphicalItemClipPath-B5MjopOD.js";import"./SetGraphicalItem-D7FiLvSi.js";import"./getRadiusAndStrokeWidthFromDot-CB_M050h.js";import"./ActiveShapeUtils-CKuXh55Z.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
