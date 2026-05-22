import{e as r}from"./iframe-CagDbm-R.js";import{g}from"./utils-ePvtT4un.js";import{T as p}from"./TooltipArgs-B4vqbkYQ.js";import{T as a}from"./Tooltip-Bx81jUJN.js";import{g as c}from"./arrayEqualityCheck-Bn08yLiN.js";import{L as h}from"./LineChart-Bk45umwU.js";import{p as d}from"./Page-DPte-9pC.js";import{L as f}from"./Line-DjE5KLPa.js";import{R as l}from"./RechartsHookInspector-pMEJlnqX.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DWuco0BF.js";import"./clsx-B-dksMZM.js";import"./useAnimationId-BEBp-SWr.js";import"./resolveDefaultProps-BrU5Uy_m.js";import"./string-yHBgcFlJ.js";import"./useElementOffset-Bs1684WT.js";import"./uniqBy-CNxClo-U.js";import"./iteratee-DsFpFkHV.js";import"./RechartsWrapper-DdluFIAh.js";import"./index-DXI37oHl.js";import"./hooks-DvlDA_Iq.js";import"./axisSelectors-Cqpe6Z2t.js";import"./d3-scale-BKLsEBZa.js";import"./zIndexSlice-Tvm87iuX.js";import"./renderedTicksSlice-71Fk0cz1.js";import"./PolarUtils-CTnnDHZv.js";import"./types-D2ON-SRi.js";import"./Curve-DbLnFn1T.js";import"./step-CjVrG-vW.js";import"./path-DyVhHtw_.js";import"./Cross-WY-9lTvl.js";import"./Rectangle-B56fHVHN.js";import"./Sector-Cj_Alzct.js";import"./ZIndexLayer-BqsAA_KH.js";import"./CartesianChart-BXvauOXS.js";import"./chartDataContext-DU5Nphzy.js";import"./CategoricalChart-DAMUlb45.js";import"./Layer-D2JglvMB.js";import"./AnimatedItems-HQORsnaH.js";import"./Label-COowhm97.js";import"./Text-BNs6VPhb.js";import"./DOMUtils-Bw-DvePw.js";import"./ActivePoints-DbdvGaCl.js";import"./Dot-BHIp2EY6.js";import"./RegisterGraphicalItemId-WhTYY9X4.js";import"./ErrorBarContext-txnn70dD.js";import"./GraphicalItemClipPath-DMoOkNN1.js";import"./SetGraphicalItem-aSNUvlix.js";import"./getRadiusAndStrokeWidthFromDot-B6ftvxTH.js";import"./ActiveShapeUtils-4DOuAOib.js";import"./index-BDeX6XER.js";import"./ChartSizeDimensions-DNx0LPdc.js";import"./OffsetShower-BNTdFgyM.js";import"./PlotAreaShower-B8l1iW5J.js";const ur={argTypes:p,component:a},t={render:s=>{const[n,o]=[600,300];return r.createElement(c,{width:"100%",height:o},r.createElement(h,{width:n,height:o,margin:{top:20,right:20,bottom:20,left:20},data:d},r.createElement(f,{dataKey:"uv"}),r.createElement(a,{...s}),r.createElement(l,null)))},args:{...g(p),trigger:"hover",shared:!1,useTranslate3d:!1}};var e,i,m;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <LineChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <Line dataKey="uv" />
          {/* The target component */}
          <Tooltip {...args} />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    trigger: 'hover',
    shared: false,
    useTranslate3d: false
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Tr=["API"];export{t as API,Tr as __namedExportsOrder,ur as default};
