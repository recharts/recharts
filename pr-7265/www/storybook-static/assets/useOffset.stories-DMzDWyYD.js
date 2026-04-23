import{e as t}from"./iframe-B9O9PLmj.js";import{O as p}from"./OffsetShower-BZwyeReB.js";import{d as a}from"./hooks-BTzSQdIL.js";import{R as s}from"./arrayEqualityCheck-DC5CCiaX.js";import{C as n}from"./ComposedChart-GxkF_kkS.js";import{p as f}from"./Page-Cj8EiXz7.js";import{L as h}from"./Line-C5FWVrxM.js";import{X as d}from"./XAxis-B1EE7uVS.js";import{Y as g}from"./YAxis-BoxHjnQ7.js";import{L as c}from"./Legend-waBu6jOx.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-BLFdg5d7.js";import"./immer-CorX8m6_.js";import"./axisSelectors-D00_Gdzw.js";import"./d3-scale-CExCS1t0.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BG5-jm5o.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DGbm3XN2.js";import"./index-CAnKFVeM.js";import"./zIndexSlice-CXYg_MdN.js";import"./renderedTicksSlice-M3URujhE.js";import"./CartesianChart-CzHYXFWb.js";import"./chartDataContext-CXYcSTD1.js";import"./CategoricalChart-CMv5R2DQ.js";import"./Layer-CeeJrP8o.js";import"./ReactUtils-BBiT48UQ.js";import"./Label-CyHBMA3l.js";import"./Text-BILB17Zq.js";import"./DOMUtils-CwoLiA_U.js";import"./ZIndexLayer-DYfC-fux.js";import"./ActivePoints-DwZhrzjl.js";import"./Dot-CuQoBawd.js";import"./types-wS1CwaJ6.js";import"./RegisterGraphicalItemId-B6wW9i8n.js";import"./ErrorBarContext-CdQGiGFg.js";import"./GraphicalItemClipPath-CTLEHBag.js";import"./SetGraphicalItem-C1WNJGNc.js";import"./useAnimationId-CEyoSkEC.js";import"./getRadiusAndStrokeWidthFromDot-BJYT2kqZ.js";import"./ActiveShapeUtils-BZRBvXfn.js";import"./isPlainObject-DKUUO2R6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DD4TDJ91.js";import"./Trapezoid-BTKQS4gb.js";import"./Sector-Cr5FAs6h.js";import"./Symbols-CFtKhMEP.js";import"./symbol-gibfx3Ew.js";import"./step-DmhUsuIO.js";import"./Curve-CnUGNDOG.js";import"./CartesianAxis-D9MTlCrN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BDjp6GLr.js";import"./uniqBy-CjP1EF7z.js";import"./iteratee-D6c1MZ_S.js";const ut={title:"API/hooks/useOffset",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(s,{width:e.width,height:e.height},t.createElement(n,{data:f,margin:e.margin},t.createElement(h,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(g,null),t.createElement(c,null),t.createElement(p,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <OffsetShower />
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
    }
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ot=["UseOffset"];export{r as UseOffset,Ot as __namedExportsOrder,ut as default};
