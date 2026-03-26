import{e}from"./iframe-Dt4aI4cx.js";import{R as n}from"./arrayEqualityCheck-Cy9OM50o.js";import{C as p}from"./ComposedChart-Dj62jzJB.js";import{C as s}from"./CartesianGrid-BQzKRVVy.js";import{X as c}from"./XAxis-Cp9OOhUB.js";import{Y as f}from"./YAxis-hzK6Shx7.js";import{L as l}from"./Line-UFT70g__.js";import{R as d}from"./ReferenceLine-CYPU-pRT.js";import{R as h}from"./RechartsHookInspector-DwUwNTd-.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CnBFDAwN.js";import"./immer-yH4a-Hlo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQTEnB61.js";import"./index-DfJHLdb0.js";import"./hooks-Dm9h8rk1.js";import"./axisSelectors-gtHn-lFq.js";import"./d3-scale-BYMZZ-q_.js";import"./zIndexSlice-w9XFtOqX.js";import"./renderedTicksSlice-DE3C--Q6.js";import"./CartesianChart-vzcLi1ES.js";import"./chartDataContext-F8MoEuAy.js";import"./CategoricalChart-yI3i5yFY.js";import"./CartesianAxis-C1sXhNsX.js";import"./Layer-XX14EpjR.js";import"./Text-LG7Y1Qb6.js";import"./DOMUtils-5HA3g2TS.js";import"./Label-Dmj78U1Q.js";import"./ZIndexLayer-GPk988Ay.js";import"./types-CrM7aEhh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-As56lGLj.js";import"./ActivePoints-DSq6xApl.js";import"./Dot-DWaeMyCd.js";import"./RegisterGraphicalItemId-BZJpY04p.js";import"./ErrorBarContext-DF-ZGRah.js";import"./GraphicalItemClipPath-CzTif6uL.js";import"./SetGraphicalItem-ByAuxD-G.js";import"./useAnimationId-Bl7aTw__.js";import"./getRadiusAndStrokeWidthFromDot-DFYx_98L.js";import"./ActiveShapeUtils-CylnP5Yt.js";import"./isPlainObject-CAtbLXkb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDlQaAI4.js";import"./Trapezoid-DzQkp94u.js";import"./Sector-CDC7yo8h.js";import"./Symbols-QnBNzaPT.js";import"./symbol-BLeS_YRk.js";import"./step-BxKH8omU.js";import"./Curve-ZdoQmbTm.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D9ndWW50.js";import"./ChartSizeDimensions-DFLxu7GA.js";import"./OffsetShower-BVHtCcND.js";import"./PlotAreaShower-BLT7b5XW.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
