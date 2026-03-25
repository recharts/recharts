import{e}from"./iframe-CYwaFdjn.js";import{R as n}from"./arrayEqualityCheck-h7hJTZeM.js";import{C as p}from"./ComposedChart-Bhc9oZML.js";import{C as s}from"./CartesianGrid-CVf3yzRL.js";import{X as c}from"./XAxis-BQk_GJ5z.js";import{Y as f}from"./YAxis-CQZmEXrz.js";import{L as l}from"./Line-cPCVztzu.js";import{R as d}from"./ReferenceLine-Bt2n0LsI.js";import{R as h}from"./RechartsHookInspector-Cc3cBFx4.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-4Ca1v930.js";import"./immer-5b19dBsP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cjgjDUYZ.js";import"./index-DPTx4Thk.js";import"./hooks-GLHTS7XJ.js";import"./axisSelectors-EAo2gJk2.js";import"./d3-scale-DeBKatuR.js";import"./zIndexSlice-Ccl7S4Cq.js";import"./renderedTicksSlice-CJ6ZtBLo.js";import"./CartesianChart-C448597b.js";import"./chartDataContext-Cd6g7rnb.js";import"./CategoricalChart-DF3SypHH.js";import"./CartesianAxis-Ba5E8SnI.js";import"./Layer-B_rFu8MB.js";import"./Text-BJUH7gc5.js";import"./DOMUtils-PiUaL3gF.js";import"./Label-C4yjQiQy.js";import"./ZIndexLayer-Bzm3_eCs.js";import"./types-DF6SdF0Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DjhHO1D7.js";import"./ActivePoints-lICUnLRA.js";import"./Dot-C9RSUdFa.js";import"./RegisterGraphicalItemId-p7bSWKiK.js";import"./ErrorBarContext-RG0zKOh-.js";import"./GraphicalItemClipPath-Csh7Z4rj.js";import"./SetGraphicalItem-B2q6sSST.js";import"./useAnimationId-CHCcDWBw.js";import"./getRadiusAndStrokeWidthFromDot-anW380QN.js";import"./ActiveShapeUtils-BW0Zun0m.js";import"./isPlainObject-ObIkW0y8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DbpIXD2p.js";import"./Trapezoid-CF7b4JF3.js";import"./Sector-CKQzsyW5.js";import"./Symbols-V-F_xCkR.js";import"./symbol-Co63Deza.js";import"./step-BGhwLfjY.js";import"./Curve-DtLfkKFm.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CEnowju6.js";import"./ChartSizeDimensions-CH8vjifh.js";import"./OffsetShower-DG_CC1wX.js";import"./PlotAreaShower-CPSVbCba.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
