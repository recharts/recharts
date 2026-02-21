import{e}from"./iframe-BI_pAXBB.js";import{R as n}from"./arrayEqualityCheck-BKrbAl8r.js";import{C as p}from"./ComposedChart-BqcTxN08.js";import{C as s}from"./CartesianGrid-w7B05F1z.js";import{X as c}from"./XAxis-CGb1kgb2.js";import{Y as f}from"./YAxis-BlCMhds7.js";import{L as l}from"./Line-fl9wl9em.js";import{R as d}from"./ReferenceLine-CFkzoz0x.js";import{R as h}from"./RechartsHookInspector-BVifdKxh.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BfThY2qm.js";import"./immer-DS7uv6B4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DROe6fuT.js";import"./index-BzE7Pa11.js";import"./hooks-B_MXrk3m.js";import"./axisSelectors-CXWTfjJ6.js";import"./d3-scale-CUPcwIhM.js";import"./zIndexSlice-Blq0MPxS.js";import"./renderedTicksSlice-CafZfga-.js";import"./CartesianChart-KFRCLVOt.js";import"./chartDataContext-VgXSPlUI.js";import"./CategoricalChart-NTGK7QHa.js";import"./CartesianAxis-D76QbbPe.js";import"./Layer-BbCwBMrP.js";import"./Text-DDIiPn9R.js";import"./DOMUtils-Clx04LAZ.js";import"./Label-BRAbHYpb.js";import"./ZIndexLayer-BIA7rzZS.js";import"./types-CyZr-7-n.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C8LT_WKY.js";import"./ActivePoints-CKakRG7P.js";import"./Dot-IX9Hy7RV.js";import"./RegisterGraphicalItemId-DUukUl_8.js";import"./ErrorBarContext-wf0IFZx-.js";import"./GraphicalItemClipPath-Bfi93Jqz.js";import"./SetGraphicalItem-d6KR3BLJ.js";import"./useAnimationId-CIydZ5LQ.js";import"./getRadiusAndStrokeWidthFromDot-RglsRcI2.js";import"./ActiveShapeUtils-BVb3C7rS.js";import"./isPlainObject-D710pF_7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BlZgVPa6.js";import"./Trapezoid-NjnAs4CK.js";import"./Sector-CeaItBuI.js";import"./Symbols-D26WGzjl.js";import"./symbol-DK6vMZu2.js";import"./step-aPk3qf3o.js";import"./Curve-C08bjkMC.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D4zEKe7v.js";import"./ChartSizeDimensions-B1IFVDHL.js";import"./OffsetShower-PutuTgHL.js";import"./PlotAreaShower-CbV6UHYA.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
