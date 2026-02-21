import{e}from"./iframe-BC-5LcYb.js";import{R as n}from"./arrayEqualityCheck-ChXaihMZ.js";import{C as p}from"./ComposedChart-CeA0TXnQ.js";import{C as s}from"./CartesianGrid-fHF5ZW2a.js";import{X as c}from"./XAxis-c4svWBsh.js";import{Y as f}from"./YAxis-DdqcUQaJ.js";import{L as l}from"./Line-valcrcoh.js";import{R as d}from"./ReferenceLine-CAwp0je7.js";import{R as h}from"./RechartsHookInspector-B75ZFa4B.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZYO2Ka-.js";import"./immer-ZiBWKhHb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B8Da5X0m.js";import"./index-DddLbDqU.js";import"./hooks-rB50_RV3.js";import"./axisSelectors-CxQAx9lZ.js";import"./d3-scale-PqmOg0fe.js";import"./zIndexSlice-BntL5RH1.js";import"./renderedTicksSlice-D9tlxui6.js";import"./CartesianChart-B_l4BcVo.js";import"./chartDataContext-w--Sw2J9.js";import"./CategoricalChart-CIq8dObJ.js";import"./CartesianAxis-B0mR8vIz.js";import"./Layer-DTseK4B8.js";import"./Text-BCKsJQhx.js";import"./DOMUtils-BFDtjzpb.js";import"./Label-DpYIsLw2.js";import"./ZIndexLayer-Dl-ZMGAP.js";import"./types-DPX13aC-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DTBTVl0S.js";import"./ActivePoints-CiWs6vAv.js";import"./Dot-DN8gKT9r.js";import"./RegisterGraphicalItemId-Bcc7KsZV.js";import"./ErrorBarContext-B8bfqZ6V.js";import"./GraphicalItemClipPath-DkytICF2.js";import"./SetGraphicalItem--aBLcxY1.js";import"./useAnimationId-1buHKKGB.js";import"./getRadiusAndStrokeWidthFromDot-D-M3bT9T.js";import"./ActiveShapeUtils-i3MObavq.js";import"./isPlainObject-CJKJH7Oc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BjlfkU01.js";import"./Trapezoid-JczkhOAH.js";import"./Sector-BhUjloQr.js";import"./Symbols-CjqMpyW7.js";import"./symbol-BKo09A-g.js";import"./step-CVSHTaSO.js";import"./Curve-28zddxeA.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D_pdBQCR.js";import"./ChartSizeDimensions-DlGGqx96.js";import"./OffsetShower-vrKiwX_5.js";import"./PlotAreaShower-D4359Ub-.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
