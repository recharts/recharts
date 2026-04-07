import{e}from"./iframe-BbLTqg_I.js";import{R as n}from"./arrayEqualityCheck-CBxHnj40.js";import{C as p}from"./ComposedChart-D4zp_1Is.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-8ldLZAOH.js";import{X as f}from"./XAxis-WOMOBxy0.js";import{Y as l}from"./YAxis-DbPxFlg1.js";import{L as d}from"./Line-D-ePJ61S.js";import{R as h}from"./ReferenceLine-BmDQ9Tev.js";import{R as w}from"./RechartsHookInspector-D5b-YMWc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DeEvTvqp.js";import"./immer-0I19eR8v.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-sXCJwmzA.js";import"./index-t2-XMrpS.js";import"./hooks-lBsi1Lte.js";import"./axisSelectors-Bham5zd3.js";import"./d3-scale-DytBNPzq.js";import"./zIndexSlice-DaNYP2h4.js";import"./renderedTicksSlice-mAMVqgeM.js";import"./CartesianChart-6nDSe5MW.js";import"./chartDataContext-CkbwJfZ5.js";import"./CategoricalChart-CiUZR458.js";import"./CartesianAxis-BQlJw0QH.js";import"./Layer-De7FJLXT.js";import"./Text-Doa3jS46.js";import"./DOMUtils-_WjkpCG3.js";import"./Label-Dp17yuaT.js";import"./ZIndexLayer-CG-7pAPx.js";import"./types-BQQUehNG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BKGICeIT.js";import"./ActivePoints-BtWDyisY.js";import"./Dot-BQWhfV5T.js";import"./RegisterGraphicalItemId-BMAYZOJ5.js";import"./ErrorBarContext-DVSsr0NQ.js";import"./GraphicalItemClipPath-BQ69dXZ4.js";import"./SetGraphicalItem-BZCA2PlV.js";import"./useAnimationId-Dzq-5vwQ.js";import"./getRadiusAndStrokeWidthFromDot-CwIeBf7B.js";import"./ActiveShapeUtils-DIUxAYHp.js";import"./isPlainObject--uBpLfXE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-oP2ZElLD.js";import"./Trapezoid-CEWsUmUR.js";import"./Sector-DvZKa3JR.js";import"./Symbols-DHvudbT_.js";import"./symbol-C3VSVIbg.js";import"./step-DZPsS0dg.js";import"./Curve-Bfkmy_Vr.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-BvC3nlY0.js";import"./ChartSizeDimensions-BXlHCl-n.js";import"./OffsetShower-ifdzBZ5-.js";import"./PlotAreaShower-CxkyObXY.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
