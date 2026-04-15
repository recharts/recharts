import{e}from"./iframe-BXY1ZxMw.js";import{R as n}from"./arrayEqualityCheck-DcA-4E3i.js";import{C as p}from"./ComposedChart-DqLYQ7wE.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CyDuqZtF.js";import{X as f}from"./XAxis-C1AEexQD.js";import{Y as l}from"./YAxis-BQsY6Xkn.js";import{L as d}from"./Line-njRk575c.js";import{R as h}from"./ReferenceLine-DwvDuUQk.js";import{R as w}from"./RechartsHookInspector-BjXhKyjD.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C-HKPb9Y.js";import"./immer-BIFs4B-N.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D-QVGmW9.js";import"./index-3g6pKTEF.js";import"./hooks-BMNZaKTW.js";import"./axisSelectors-DujQk2mS.js";import"./d3-scale-CVGboYSt.js";import"./zIndexSlice-Ce-rItNm.js";import"./renderedTicksSlice-9b_yiBc1.js";import"./CartesianChart-RUN03By5.js";import"./chartDataContext-ktNnxBdo.js";import"./CategoricalChart-BRmwchnd.js";import"./CartesianAxis-Cu56U0d6.js";import"./Layer-CSlcUsPH.js";import"./Text-khHsIcyp.js";import"./DOMUtils-DRNBButz.js";import"./Label-DBppt7lW.js";import"./ZIndexLayer-NUbH9u4P.js";import"./types-6ITthLWo.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-jvyP91Ey.js";import"./ActivePoints-ChJ6-xNu.js";import"./Dot-fq0sMsij.js";import"./RegisterGraphicalItemId-Bn5vI_pp.js";import"./ErrorBarContext-D19syQ9l.js";import"./GraphicalItemClipPath-BRuIkpbH.js";import"./SetGraphicalItem-CZGya2Pz.js";import"./useAnimationId-CLslbl-_.js";import"./getRadiusAndStrokeWidthFromDot-BYlpFOLw.js";import"./ActiveShapeUtils-DDyUax94.js";import"./isPlainObject-CCgYT477.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BFSTpqGq.js";import"./Trapezoid-OWqREu8T.js";import"./Sector-DCuOMg7b.js";import"./Symbols-DIWprCIn.js";import"./symbol-CgR1B8Aj.js";import"./step-BxTVkj_h.js";import"./Curve-yQu46FzN.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-LDL5x1G-.js";import"./ChartSizeDimensions-BO7SfmPn.js";import"./OffsetShower-CGdvmPYD.js";import"./PlotAreaShower-kl-KbyOo.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}),e.createElement(w,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
