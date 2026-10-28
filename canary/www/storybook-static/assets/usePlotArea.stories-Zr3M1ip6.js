import{R as t}from"./iframe-Bzny_MYO.js";import{z as a}from"./RechartsWrapper-DwCbU-k0.js";import{R as p}from"./zIndexSlice-MTgyOxcR.js";import{C as n}from"./ComposedChart-C-U97YwV.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-nynINyW7.js";import{X as l}from"./XAxis-D652bNH-.js";import{Y as h}from"./YAxis-CJm4ZJgn.js";import{L as c}from"./Legend-Cs8q_FQN.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DhnFRoYZ.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BEccdncb.js";import"./throttle-GvTGKSCT.js";import"./index-BR-DuKD2.js";import"./index-BNanU6AD.js";import"./polarAxisSelectors-Cax9tCz_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CLm70OA6.js";import"./index-B1Bw8GV_.js";import"./index-BO70CSrb.js";import"./renderedTicksSlice-IHCqVqCy.js";import"./index-BGYmHh9L.js";import"./CartesianChart-8QUHmRpr.js";import"./ZIndexPortal-CcFwSb_x.js";import"./CategoricalChart-BS5ujOqF.js";import"./Layer-DwImaMiy.js";import"./Curve-DvxHsU-S.js";import"./types-DppBMtwl.js";import"./step-Ck4pU_CH.js";import"./path-DyVhHtw_.js";import"./LabelList-DP5qLQcH.js";import"./Label-DTuGlMPs.js";import"./Text-fNDWB5Io.js";import"./pageBackground-3hrs4YVX.js";import"./ZIndexLayer-5vWyPJ-H.js";import"./ActivePoints-7LmcTnxb.js";import"./Dot-B0SoNECw.js";import"./activeStyles-D4lYsebj.js";import"./useAnimationId-DPjHdwMC.js";import"./dataEntryStyles-Dmke5Kqf.js";import"./Symbols-Dt4jbT5_.js";import"./symbol-BKCm_Bj0.js";import"./ErrorBarContext-B5xatTad.js";import"./SetGraphicalItem-C8_kNIod.js";import"./getRadiusAndStrokeWidthFromDot-B5e8MQ8V.js";import"./ActiveShapeUtils-cjVk6ERl.js";import"./useEffectiveDataKey-D9i-sft6.js";import"./CartesianAxis-CF7trjb7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-ZYBSOkTe.js";import"./uniqBy-CmMRn8Xg.js";import"./iteratee-DzeYmEiw.js";import"./isArguments-yB-y1yaH.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},At=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
