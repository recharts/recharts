import{e}from"./iframe-D2xkh5VA.js";import{g as n}from"./arrayEqualityCheck-BcvopYI_.js";import{C as p}from"./ComposedChart-oF9YiWjC.js";import{p as s}from"./Page-DPte-9pC.js";import{C as c}from"./CartesianGrid-DkShnBeV.js";import{X as f}from"./XAxis-8irwFxlw.js";import{Y as l}from"./YAxis-Bb2589BF.js";import{L as d}from"./Line-C-3S5d4g.js";import{R as h}from"./ReferenceLine-Dn43ciGK.js";import{R as w}from"./RechartsHookInspector-BNLXTPTn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ba1qBB1K.js";import"./immer-CX6PUSO2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAWcFgQP.js";import"./index-DQcqmY6q.js";import"./hooks-BYxDncjb.js";import"./axisSelectors-7PXIpU8J.js";import"./d3-scale-CrDd0VeH.js";import"./zIndexSlice-BbkJeUOK.js";import"./renderedTicksSlice-C-KOSoJD.js";import"./CartesianChart-BJzueQ6r.js";import"./chartDataContext-DR1VP15t.js";import"./CategoricalChart-BDCy0ysN.js";import"./CartesianAxis-DAZlFlgD.js";import"./Layer-DhOsa-t6.js";import"./Text-hIOc-MSS.js";import"./DOMUtils-BkYWFWy3.js";import"./Label-DeRbtMqy.js";import"./ZIndexLayer-C7En4AyY.js";import"./types-CxiHHYTB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DLNzalYA.js";import"./step-C9rAKZ37.js";import"./path-DyVhHtw_.js";import"./ReactUtils-Bwb7QYmO.js";import"./ActivePoints-BGHqbzdd.js";import"./Dot-I5Kzo50C.js";import"./RegisterGraphicalItemId-D_8matpL.js";import"./ErrorBarContext-CJXaSsld.js";import"./GraphicalItemClipPath-DFyECcqW.js";import"./SetGraphicalItem-DpgyXd2u.js";import"./useAnimationId-DiNRYHAi.js";import"./getRadiusAndStrokeWidthFromDot-BhBat3wy.js";import"./ActiveShapeUtils-B5QqFS4A.js";import"./isPlainObject-BMKBAZsK.js";import"./isPlainObject-BSutPv-K.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-bibejZah.js";import"./ChartSizeDimensions-1DNJC0TT.js";import"./OffsetShower-CUjzMbk1.js";import"./PlotAreaShower-BjwPr_87.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const xe=["IfOverflow"];export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
