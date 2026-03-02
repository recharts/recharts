import{e}from"./iframe-D-0IUJGK.js";import{R as n}from"./arrayEqualityCheck-C2_-Uu4b.js";import{C as p}from"./ComposedChart-COT4sTDA.js";import{C as s}from"./CartesianGrid-wYYb_ETo.js";import{X as c}from"./XAxis-CVV4DzFI.js";import{Y as f}from"./YAxis-DgsPqkY3.js";import{L as l}from"./Line-CSAZjpQX.js";import{R as d}from"./ReferenceLine-C_ZNcCmf.js";import{R as h}from"./RechartsHookInspector-ByAlRvo4.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-6ZRnbExh.js";import"./immer-BqKqj1gc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CufL0AhU.js";import"./index-BKZ6_UMT.js";import"./hooks-DdYzpI7S.js";import"./axisSelectors-I9kb0cKY.js";import"./d3-scale-bTazPGJf.js";import"./zIndexSlice-DSGfPW9M.js";import"./renderedTicksSlice-CBi406A9.js";import"./CartesianChart-D1C4weRi.js";import"./chartDataContext-CpBPNMx6.js";import"./CategoricalChart-Cvik2JIp.js";import"./CartesianAxis-BpaKC44j.js";import"./Layer-CTviFarP.js";import"./Text-7HuLOFJ_.js";import"./DOMUtils-CyqmOfaO.js";import"./Label-CQuheRKb.js";import"./ZIndexLayer-dNEhzNo8.js";import"./types-D1PFdIYW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DhoIBDOK.js";import"./ActivePoints-D-j70f6P.js";import"./Dot-9wQhAS5v.js";import"./RegisterGraphicalItemId-BG4vqgbk.js";import"./ErrorBarContext-CnqimuFK.js";import"./GraphicalItemClipPath-6R7g6XV3.js";import"./SetGraphicalItem-WLE6T4Wd.js";import"./useAnimationId-C9TFjIVY.js";import"./getRadiusAndStrokeWidthFromDot-CyGkBVNU.js";import"./ActiveShapeUtils-BDOyHxHs.js";import"./isPlainObject-BJcM5Fjp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-xceTB-v2.js";import"./Trapezoid-D-5x7DqH.js";import"./Sector-SAKjVkNh.js";import"./Symbols-CM5rDsvy.js";import"./symbol-DIeWOW3k.js";import"./step-DIrgAirM.js";import"./Curve-CUbaL9A5.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CvEiFoUh.js";import"./ChartSizeDimensions-BThuhk--.js";import"./OffsetShower-DnIfcGdO.js";import"./PlotAreaShower-BUKTEC4c.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,Re as default};
