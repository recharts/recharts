import{e}from"./iframe-DOwSMESw.js";import{R as n}from"./arrayEqualityCheck-CX9-bfYH.js";import{C as p}from"./ComposedChart-DebGIEfT.js";import{C as s}from"./CartesianGrid-DEbxUIAb.js";import{X as c}from"./XAxis-BPbWU4yR.js";import{Y as f}from"./YAxis-DIarP6QG.js";import{L as l}from"./Line-BMz_1-bi.js";import{R as d}from"./ReferenceLine-BiJdE3GL.js";import{R as h}from"./RechartsHookInspector-CcCJcHZ5.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ChqUwM3U.js";import"./immer-ZyDpTiiy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ls6tVJyv.js";import"./index-BBfb_97C.js";import"./hooks-xQD_-akz.js";import"./axisSelectors-BKSMdbwV.js";import"./d3-scale-D4rgCaup.js";import"./zIndexSlice-DitFxlYL.js";import"./renderedTicksSlice-B9YC84oJ.js";import"./CartesianChart-DFwJmcFp.js";import"./chartDataContext-CzK82F7Z.js";import"./CategoricalChart-CxUtgmSG.js";import"./CartesianAxis-BJnnwpTK.js";import"./Layer-Dw0puBgf.js";import"./Text-DHnTXj9j.js";import"./DOMUtils-DbGofJNd.js";import"./Label-CGJJW7mt.js";import"./ZIndexLayer-Dk3cu7q_.js";import"./types-BVuvkN0T.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D4p-v0tr.js";import"./ActivePoints-Bwmmy_Xm.js";import"./Dot-aBSUYWpk.js";import"./RegisterGraphicalItemId-BYUuyceh.js";import"./ErrorBarContext-CtE8_zM3.js";import"./GraphicalItemClipPath-CYCx10_G.js";import"./SetGraphicalItem-CB9uDBjU.js";import"./useAnimationId-B99eNrnj.js";import"./getRadiusAndStrokeWidthFromDot-BkGX9HE7.js";import"./ActiveShapeUtils-C94C_QYl.js";import"./isPlainObject-sPJsBjkd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMknbwVL.js";import"./Trapezoid-AfdP-1uh.js";import"./Sector-BzLVEcjl.js";import"./Symbols-Vm2a1c-r.js";import"./symbol-5SXgtl89.js";import"./step-CPI5XPf7.js";import"./Curve-HyoTL5em.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-aBvahWCN.js";import"./ChartSizeDimensions-BCHrYjTL.js";import"./OffsetShower-DAQHvvGL.js";import"./PlotAreaShower-CtS1URyh.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
