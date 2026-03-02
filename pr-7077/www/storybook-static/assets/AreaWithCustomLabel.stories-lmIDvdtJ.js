import{e as t}from"./iframe-XFn8o3qI.js";import{R as c}from"./arrayEqualityCheck-DoWZ8Al-.js";import{C as d}from"./ComposedChart-CqHuuwTM.js";import{A as l}from"./Area-Cbxfqk2e.js";import{R as h}from"./RechartsHookInspector-D90IXMov.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DasUcEmR.js";import"./immer-Hw8ZlrcX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bqol093Z.js";import"./index-DNZJK2gS.js";import"./hooks-CgDMZSu6.js";import"./axisSelectors-B-8e66Qc.js";import"./d3-scale-BECtu2Jj.js";import"./zIndexSlice-BaTuqdfU.js";import"./renderedTicksSlice-Dl0HjFeM.js";import"./CartesianChart-CtYhkutQ.js";import"./chartDataContext-C4USeiES.js";import"./CategoricalChart-BM4cINHZ.js";import"./Curve-C3P9kzpN.js";import"./types-Bj0G5aQF.js";import"./step-DeRmKfqt.js";import"./Layer-DCadlIaL.js";import"./ReactUtils-B41U7gki.js";import"./Label-BlYwY5-1.js";import"./Text-Bl76oSnc.js";import"./DOMUtils-DhQP54ma.js";import"./ZIndexLayer-DWBavU2w.js";import"./ActivePoints-BMnMeirf.js";import"./Dot-BXU7GTUQ.js";import"./RegisterGraphicalItemId-JBTo95SG.js";import"./GraphicalItemClipPath-Cv74D6gd.js";import"./SetGraphicalItem-gSI2Cn_M.js";import"./useAnimationId-DlDP6-K6.js";import"./getRadiusAndStrokeWidthFromDot-YxhzX5we.js";import"./graphicalItemSelectors-Cido0Juo.js";import"./index-BCvGM1bQ.js";import"./ChartSizeDimensions-BgEuIf6D.js";import"./OffsetShower-2hoMWt5-.js";import"./PlotAreaShower-D2hH_gCG.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
