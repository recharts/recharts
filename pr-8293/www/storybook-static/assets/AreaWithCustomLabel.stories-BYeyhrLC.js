import{R as r}from"./iframe-BzxAUdBV.js";import{R as c}from"./zIndexSlice-CpYrgVZX.js";import{C as d}from"./ComposedChart-hvP_dJoC.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BMm807JR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DheJQ_-R.js";import"./throttle-C2l7QP8r.js";import"./index-DxuOyH9Y.js";import"./index-5gwlPTJD.js";import"./RechartsWrapper-BCictS_F.js";import"./axisSelectors-D1428BGH.js";import"./polarAxisSelectors-CqQp2e17.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BnAxRH73.js";import"./index-DwsBZD05.js";import"./index-D3M5mM9_.js";import"./renderedTicksSlice-DYvam8ud.js";import"./index-CIBNfLVZ.js";import"./fillDefinitions-fx1J2dmJ.js";import"./CartesianChart-Cryci4Uo.js";import"./chartDataContext-CextJDGM.js";import"./CategoricalChart-DzNtI-Go.js";import"./getRadiusAndStrokeWidthFromDot-ZLRSIrH1.js";import"./Layer-Df_NEF0m.js";import"./dataEntryStyles-C-ZfbqEc.js";import"./Label-9brnKF6Z.js";import"./Text-DPkQNMpB.js";import"./ZIndexLayer-BUHaqwT6.js";import"./ActivePoints-B380tDrW.js";import"./Dot-BeK6ZL_a.js";import"./types-djSleOln.js";import"./activeStyles-DjlDJ1Rs.js";import"./useAnimationId-CdQeQcKS.js";import"./Symbols-BU2g01-G.js";import"./symbol-DGFVgd7C.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-in8OQb6t.js";import"./ActiveShapeUtils-BTD3-pm6.js";import"./Curve-DIyQM0l3.js";import"./step-CAG0Ynz6.js";import"./useEffectiveDataKey-BLws13Ws.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
