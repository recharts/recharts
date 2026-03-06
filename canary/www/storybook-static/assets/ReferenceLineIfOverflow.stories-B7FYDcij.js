import{e}from"./iframe-6EykQKfG.js";import{R as n}from"./arrayEqualityCheck-CqC3jwM6.js";import{C as p}from"./ComposedChart-D9Ylu3vF.js";import{C as s}from"./CartesianGrid-DVK0Bf9z.js";import{X as c}from"./XAxis-Bq0FFrPR.js";import{Y as f}from"./YAxis-EuersLOS.js";import{L as l}from"./Line-BA8V0JUx.js";import{R as d}from"./ReferenceLine-D-lFpM-d.js";import{R as h}from"./RechartsHookInspector-De58Dhu7.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZLGh6RG.js";import"./immer-DZYxGOvJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B-8Vi1YZ.js";import"./index-C5RNfFWo.js";import"./hooks-C3ySExDc.js";import"./axisSelectors-FAny2dXm.js";import"./d3-scale-ZR-RinUh.js";import"./zIndexSlice-C6kP2rU-.js";import"./renderedTicksSlice-ChlibOAb.js";import"./CartesianChart-yFNUOVem.js";import"./chartDataContext-vZs3YuCl.js";import"./CategoricalChart-B0C_vbjT.js";import"./CartesianAxis-DTiDbYgb.js";import"./Layer-DsfYNbWJ.js";import"./Text-ByiAR9HY.js";import"./DOMUtils-BptD102S.js";import"./Label-AanK--nR.js";import"./ZIndexLayer-Dj7WhaOm.js";import"./types-DI1ZOnYm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CfLs9KKR.js";import"./ActivePoints-BuDRjoco.js";import"./Dot-CjdQs5Xf.js";import"./RegisterGraphicalItemId-SLc1E9Mg.js";import"./ErrorBarContext-BKEDiamV.js";import"./GraphicalItemClipPath-CyC67rpY.js";import"./SetGraphicalItem-D4EZqEL5.js";import"./useAnimationId-SK1GTTks.js";import"./getRadiusAndStrokeWidthFromDot-BPPKe8oa.js";import"./ActiveShapeUtils-BzU2hCU1.js";import"./isPlainObject-CAtj_e7X.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle--9HeXx83.js";import"./Trapezoid-DdvROJEh.js";import"./Sector-NFqcE7L7.js";import"./Symbols-DRjofMjK.js";import"./symbol-VuSYaHfl.js";import"./step-DU4Jxd72.js";import"./Curve-BHG7-tm7.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DoXoLnYR.js";import"./ChartSizeDimensions-4WehLi-t.js";import"./OffsetShower-DPGgRtYl.js";import"./PlotAreaShower-DJZyMIDk.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
