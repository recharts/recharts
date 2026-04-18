import{e}from"./iframe-C4HM3tOf.js";import{R as n}from"./arrayEqualityCheck-pVd2ZEAL.js";import{C as p}from"./ComposedChart-1kQax0ra.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BbPisY8H.js";import{X as f}from"./XAxis-BK6oNET2.js";import{Y as l}from"./YAxis-BtziLXcq.js";import{L as d}from"./Line--jw4iogU.js";import{R as h}from"./ReferenceLine-D15Xe3Ua.js";import{R as w}from"./RechartsHookInspector-Dl-njr8g.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DIrfype3.js";import"./immer-DKT0L4DC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsUVNyak.js";import"./index-fnqQxzGI.js";import"./hooks-BGwRhZ9s.js";import"./axisSelectors-q2a6ivV9.js";import"./d3-scale-LcYjb00Y.js";import"./zIndexSlice-B6fkFiXD.js";import"./renderedTicksSlice-D0u-pzQU.js";import"./CartesianChart-zslZnBEv.js";import"./chartDataContext-11WBovGQ.js";import"./CategoricalChart-CnCIIeeu.js";import"./CartesianAxis-BrQUtBdm.js";import"./Layer-BI5SY9Q3.js";import"./Text-Cpkro7uK.js";import"./DOMUtils-CuJDrrCS.js";import"./Label-95NTi3lP.js";import"./ZIndexLayer-hyQhvrxG.js";import"./types-DhPv2WtL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-NJDufUbJ.js";import"./ActivePoints-BfIabrgE.js";import"./Dot-V_SCRyyA.js";import"./RegisterGraphicalItemId-lR-7WV2p.js";import"./ErrorBarContext-CuIz_GNg.js";import"./GraphicalItemClipPath-BLanLC3n.js";import"./SetGraphicalItem-Cgab4IqB.js";import"./useAnimationId-G20N3axR.js";import"./getRadiusAndStrokeWidthFromDot-xmz8CGWl.js";import"./ActiveShapeUtils-CmP6-7kE.js";import"./isPlainObject-CF48X339.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DkO9lidd.js";import"./Trapezoid-nYgyRJct.js";import"./Sector-D93eAIbO.js";import"./Symbols-DcdiuJ8X.js";import"./symbol-CU7O9hm_.js";import"./step-Bw_J3Aex.js";import"./Curve-CTxT4HGO.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D1Vpw6AQ.js";import"./ChartSizeDimensions-C5dCDLnk.js";import"./OffsetShower-DOxYEgNi.js";import"./PlotAreaShower-BwQpOYoG.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
