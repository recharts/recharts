import{e}from"./iframe-ZP7E3tAE.js";import{R as n}from"./arrayEqualityCheck-BZegdwCU.js";import{C as p}from"./ComposedChart-Ict3xZeX.js";import{C as s}from"./CartesianGrid-DHIJoitw.js";import{X as c}from"./XAxis-CN_uVChz.js";import{Y as f}from"./YAxis-BhI8CLrp.js";import{L as l}from"./Line-8udFf86z.js";import{R as d}from"./ReferenceLine-CcVyRG19.js";import{R as h}from"./RechartsHookInspector-Bzs4iZ_z.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-79J5uOQE.js";import"./immer-DfBDygba.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CXTZX0lw.js";import"./index-B6UrQqZ7.js";import"./hooks-DCx4ALdg.js";import"./axisSelectors-jiBsETiM.js";import"./d3-scale-Y646Y1FN.js";import"./zIndexSlice-DYNjVLba.js";import"./renderedTicksSlice-DWiQ850g.js";import"./CartesianChart-CyeIpcsP.js";import"./chartDataContext-Cn5Bk3lF.js";import"./CategoricalChart-BiLT_62I.js";import"./CartesianAxis-BqPQSvc8.js";import"./Layer-BHiu2mcd.js";import"./Text-Fmn2R1e8.js";import"./DOMUtils-B5v93EaI.js";import"./Label-DQuLGrHO.js";import"./ZIndexLayer-CQ2HcABX.js";import"./types-BY0ZtJ6u.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Jyyk6uCy.js";import"./ActivePoints-DeU0k1bK.js";import"./Dot-DDX9j8Ax.js";import"./RegisterGraphicalItemId-Cw_F4O-7.js";import"./ErrorBarContext-BLxncd0z.js";import"./GraphicalItemClipPath-D_6vSzHc.js";import"./SetGraphicalItem-Cf9rfdg9.js";import"./useAnimationId-DzP9W11z.js";import"./getRadiusAndStrokeWidthFromDot-DY7k2y1V.js";import"./ActiveShapeUtils-DrBMRVee.js";import"./isPlainObject-DdPleWLd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MC9ihyGv.js";import"./Trapezoid-DEV19aif.js";import"./Sector-BSueo3lX.js";import"./Symbols-DjU9F7j-.js";import"./symbol-Db4XPyyX.js";import"./step-DXK9R3Qh.js";import"./Curve-BPu6gFcf.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-B9IDBt-R.js";import"./ChartSizeDimensions-B4BdsRyY.js";import"./OffsetShower-CpH9si2J.js";import"./PlotAreaShower-DFApfivg.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
