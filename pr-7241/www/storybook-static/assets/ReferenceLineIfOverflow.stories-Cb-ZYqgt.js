import{e}from"./iframe-BjsnxMFa.js";import{R as n}from"./arrayEqualityCheck-D79Z1Ft6.js";import{C as p}from"./ComposedChart-szjriw08.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CHzDGc-u.js";import{X as f}from"./XAxis-CLgGW7JB.js";import{Y as l}from"./YAxis-BVFVddBL.js";import{L as d}from"./Line-BrfP0Qst.js";import{R as h}from"./ReferenceLine-CjqfUJ6M.js";import{R as w}from"./RechartsHookInspector-BHBsN4Jq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C6oA156h.js";import"./immer-Be7tY_HI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CW1Hf6N5.js";import"./index-jIvfCkDE.js";import"./hooks-CrPS60z-.js";import"./axisSelectors-DQ8vP1dP.js";import"./d3-scale-DFeGtgyL.js";import"./zIndexSlice-CqY4Aros.js";import"./renderedTicksSlice-BRzJlOTm.js";import"./CartesianChart-D_ZObIBU.js";import"./chartDataContext-CN9xXS5D.js";import"./CategoricalChart-CTcIqTOw.js";import"./CartesianAxis-CEeDfojt.js";import"./Layer-iA63SD1n.js";import"./Text-B0WMAGdM.js";import"./DOMUtils-BmB9R95C.js";import"./Label-j2useUX0.js";import"./ZIndexLayer-DSdMaSo2.js";import"./types-BiDeCyZf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BGdgbQc7.js";import"./ActivePoints-CfR2rHSN.js";import"./Dot-CjenfdSB.js";import"./RegisterGraphicalItemId-BPn4ir3H.js";import"./ErrorBarContext-BeXR1TDd.js";import"./GraphicalItemClipPath-DdpuzGUU.js";import"./SetGraphicalItem-CNGahdfh.js";import"./useAnimationId-B32Lfo5E.js";import"./getRadiusAndStrokeWidthFromDot-Dunai21J.js";import"./ActiveShapeUtils-BjYnAn6x.js";import"./isPlainObject-OzrxZJ1P.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CAvBODoh.js";import"./Trapezoid-BhCHPlaL.js";import"./Sector-Dfr3Hfmg.js";import"./Symbols-D6JP1e2h.js";import"./symbol-GAGGshWY.js";import"./step-CB61oaUG.js";import"./Curve-DKq8m8L2.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-Drwbgjrj.js";import"./ChartSizeDimensions-DSkMKFoU.js";import"./OffsetShower-DDkKAXZs.js";import"./PlotAreaShower-DJQQHQ-f.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
