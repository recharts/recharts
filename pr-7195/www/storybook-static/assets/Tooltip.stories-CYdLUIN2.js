import{e as r}from"./iframe-Ch1Isql8.js";import{g}from"./utils-ePvtT4un.js";import{T as p}from"./TooltipArgs-B4vqbkYQ.js";import{T as a}from"./Tooltip-9L4--RcN.js";import{R as c}from"./arrayEqualityCheck-BCEbDsDx.js";import{L as h}from"./LineChart-Dem0awf1.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-Cj_RlCcR.js";import{R as l}from"./RechartsHookInspector-DbN8VMTu.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-BTgrVrx0.js";import"./clsx-B-dksMZM.js";import"./useAnimationId-BC-9oBmZ.js";import"./resolveDefaultProps-C2WRALEr.js";import"./useElementOffset-BnNRxgQ2.js";import"./uniqBy-C0ShPv6b.js";import"./iteratee-BHbBqIkI.js";import"./RechartsWrapper-BHlnvpBC.js";import"./index-BQodkfcp.js";import"./hooks-DIQ-JHwY.js";import"./axisSelectors-0Ej_8yTo.js";import"./d3-scale-CrbEySHr.js";import"./zIndexSlice-CfYpWTyk.js";import"./renderedTicksSlice-B_3Gl1Hk.js";import"./PolarUtils-CTnnDHZv.js";import"./types-BJb3G4uR.js";import"./Curve-DgBmrfnw.js";import"./step-B9yE4hVt.js";import"./Cross-CFXnEOvU.js";import"./Rectangle-DcZ1nspL.js";import"./Sector-DNP4xewC.js";import"./ZIndexLayer-DjVbUmgd.js";import"./CartesianChart-CM5Qb5gP.js";import"./chartDataContext-jCxwHdJc.js";import"./CategoricalChart-DFR8bKN5.js";import"./Layer-BO4GuAqP.js";import"./ReactUtils-CsOHi-wi.js";import"./Label-DD8AaqpA.js";import"./Text-BVN_POYl.js";import"./DOMUtils-10gf_B-M.js";import"./ActivePoints-BoXPQfRa.js";import"./Dot-BiNuTUfQ.js";import"./RegisterGraphicalItemId-B38aETS6.js";import"./ErrorBarContext-B1gBZht8.js";import"./GraphicalItemClipPath-5ic9tQHz.js";import"./SetGraphicalItem-CK5a6DJE.js";import"./getRadiusAndStrokeWidthFromDot-CEWlgPHm.js";import"./ActiveShapeUtils-Ds4ws-40.js";import"./isPlainObject-CbEMMj1e.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-CyEP7tU2.js";import"./Symbols-hNJtZeth.js";import"./symbol-DKQgrSwN.js";import"./index-B9MqbPA_.js";import"./ChartSizeDimensions-Xxd3TXQk.js";import"./OffsetShower-CEfGPMuj.js";import"./PlotAreaShower-BXMcaFZq.js";const vr={argTypes:p,component:a},t={render:s=>{const[n,o]=[600,300];return r.createElement(c,{width:"100%",height:o},r.createElement(h,{width:n,height:o,margin:{top:20,right:20,bottom:20,left:20},data:d},r.createElement(f,{dataKey:"uv"}),r.createElement(a,{...s}),r.createElement(l,null)))},args:{...g(p),trigger:"hover",shared:!1,useTranslate3d:!1}};var e,i,m;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const yr=["API"];export{t as API,yr as __namedExportsOrder,vr as default};
