import{e as t}from"./iframe-CagDbm-R.js";import{P as a}from"./PlotAreaShower-B8l1iW5J.js";import{Y as p}from"./hooks-DvlDA_Iq.js";import{g as s}from"./arrayEqualityCheck-Bn08yLiN.js";import{C as n}from"./ComposedChart-CFPuckpi.js";import{p as l}from"./Page-DPte-9pC.js";import{L as d}from"./Line-DjE5KLPa.js";import{X as h}from"./XAxis-CyILEj33.js";import{Y as c}from"./YAxis-Qo8_bXaH.js";import{L as g}from"./Legend-CBThwByF.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DNx0LPdc.js";import"./immer-DWuco0BF.js";import"./axisSelectors-Cqpe6Z2t.js";import"./d3-scale-BKLsEBZa.js";import"./string-yHBgcFlJ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BrU5Uy_m.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DdluFIAh.js";import"./index-DXI37oHl.js";import"./zIndexSlice-Tvm87iuX.js";import"./renderedTicksSlice-71Fk0cz1.js";import"./CartesianChart-BXvauOXS.js";import"./chartDataContext-DU5Nphzy.js";import"./CategoricalChart-DAMUlb45.js";import"./Layer-D2JglvMB.js";import"./Curve-DbLnFn1T.js";import"./types-D2ON-SRi.js";import"./step-CjVrG-vW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-HQORsnaH.js";import"./Label-COowhm97.js";import"./Text-BNs6VPhb.js";import"./DOMUtils-Bw-DvePw.js";import"./ZIndexLayer-BqsAA_KH.js";import"./useAnimationId-BEBp-SWr.js";import"./ActivePoints-DbdvGaCl.js";import"./Dot-BHIp2EY6.js";import"./RegisterGraphicalItemId-WhTYY9X4.js";import"./ErrorBarContext-txnn70dD.js";import"./GraphicalItemClipPath-DMoOkNN1.js";import"./SetGraphicalItem-aSNUvlix.js";import"./getRadiusAndStrokeWidthFromDot-B6ftvxTH.js";import"./ActiveShapeUtils-4DOuAOib.js";import"./CartesianAxis-6zuZSvBM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BeiYXLsa.js";import"./symbol-BcJh2PD3.js";import"./useElementOffset-Bs1684WT.js";import"./uniqBy-CNxClo-U.js";import"./iteratee-DsFpFkHV.js";const ct={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["UsePlotArea"];export{e as UsePlotArea,gt as __namedExportsOrder,ct as default};
