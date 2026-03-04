import{e as t}from"./iframe-D83ZSNbz.js";import{R as c}from"./arrayEqualityCheck-BGA4RwPN.js";import{C as d}from"./ComposedChart-B5Ky6_S3.js";import{A as l}from"./Area-CLV9qlmu.js";import{R as h}from"./RechartsHookInspector-BWsm2Zwo.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BQFmif0Y.js";import"./immer-CVep4-EU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-6kLXfAE0.js";import"./index-8b00PKjq.js";import"./hooks-DCtmV1SZ.js";import"./axisSelectors-DsPqnEOY.js";import"./d3-scale-yzqdTiSJ.js";import"./zIndexSlice-z-sDwpjP.js";import"./renderedTicksSlice-Bt6P6Lqy.js";import"./CartesianChart-Zohr5k9I.js";import"./chartDataContext-DzOegroB.js";import"./CategoricalChart-BH19QtA5.js";import"./Curve-VgEiMVDm.js";import"./types-CQ4rEtgJ.js";import"./step-DnRHTEfS.js";import"./Layer-CzMDOsc5.js";import"./ReactUtils-Dwz5eB4M.js";import"./Label-CPoQ7ALx.js";import"./Text-BHw_uujw.js";import"./DOMUtils-Bml6CSWG.js";import"./ZIndexLayer-BlsfoIRs.js";import"./ActivePoints-xgfu-OUk.js";import"./Dot-CeVblkN7.js";import"./RegisterGraphicalItemId-DBtbwGke.js";import"./GraphicalItemClipPath-DCwYUI8F.js";import"./SetGraphicalItem-CVQEh09-.js";import"./useAnimationId-DC1LkXPL.js";import"./getRadiusAndStrokeWidthFromDot-C8XAklJz.js";import"./graphicalItemSelectors-CeivcGR-.js";import"./index-CSluNsr9.js";import"./ChartSizeDimensions--X_0ARq3.js";import"./OffsetShower-CvSCKQiO.js";import"./PlotAreaShower-BKASkiMz.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
