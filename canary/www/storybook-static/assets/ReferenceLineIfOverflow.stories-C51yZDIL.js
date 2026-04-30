import{e}from"./iframe-CIkWUaKQ.js";import{R as n}from"./arrayEqualityCheck-BBFq7eoK.js";import{C as p}from"./ComposedChart-Co3BTxvU.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D_3GbIWg.js";import{X as f}from"./XAxis-BerErBSJ.js";import{Y as l}from"./YAxis-DcHa1OqQ.js";import{L as d}from"./Line-Bx7wFRjl.js";import{R as h}from"./ReferenceLine-BWfqnAQX.js";import{R as w}from"./RechartsHookInspector-BuUCbDqR.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CLDluMEp.js";import"./immer-BHU9OU6q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-YxwXYQPU.js";import"./index-CbwLYB0M.js";import"./hooks-sjogQk2Y.js";import"./axisSelectors-BaK7cqC2.js";import"./d3-scale-BZ-edMt9.js";import"./zIndexSlice-Cbu3nPXF.js";import"./renderedTicksSlice-BjREbE6W.js";import"./CartesianChart-CjcihWnV.js";import"./chartDataContext-noqwwTdm.js";import"./CategoricalChart-BcDmeBuN.js";import"./CartesianAxis-ZLsdGGHc.js";import"./Layer-Dzvfyp4W.js";import"./Text-D4ohdNx9.js";import"./DOMUtils-BREdjKiT.js";import"./Label-SHiyMzcT.js";import"./ZIndexLayer-CUuZZhUK.js";import"./types-CPlIJWRj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-RCeASTt3.js";import"./ActivePoints-B2S0txC7.js";import"./Dot-CQ_am1YH.js";import"./RegisterGraphicalItemId-f4iA6laj.js";import"./ErrorBarContext-dR6dFvJy.js";import"./GraphicalItemClipPath-D13aRDH0.js";import"./SetGraphicalItem-0e33RWLj.js";import"./useAnimationId-DBBbISIM.js";import"./getRadiusAndStrokeWidthFromDot-DqAt7RU4.js";import"./ActiveShapeUtils-DT1OniMN.js";import"./isPlainObject-D-WQBCb_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CAWEyFEy.js";import"./Trapezoid-BDKa0CKl.js";import"./Sector-B07-nfVs.js";import"./Symbols-DLm1p1c0.js";import"./symbol-DsKaePiJ.js";import"./step-lfJzJxuy.js";import"./Curve-Cbg_n5d0.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-C6VPi8LL.js";import"./ChartSizeDimensions-C20x4d8E.js";import"./OffsetShower-B6J-0iMz.js";import"./PlotAreaShower-BBKrHEPi.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
