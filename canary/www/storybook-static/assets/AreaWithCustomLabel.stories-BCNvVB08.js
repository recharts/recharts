import{R as r}from"./iframe-Bo9DV_RF.js";import{R as c}from"./zIndexSlice-ChGxP5I9.js";import{C as d}from"./ComposedChart-BSjH4eO6.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DAh3WMXg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D7E8wIuA.js";import"./throttle-CaIo9_rk.js";import"./index-Bm5Sdcd_.js";import"./index-BpsrDHro.js";import"./RechartsWrapper-D6SFyLdk.js";import"./axisSelectors-BUIYbOzk.js";import"./polarAxisSelectors-DgJeannD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BoInTKj4.js";import"./index-Dj5W-yVu.js";import"./index-PvdQicqP.js";import"./renderedTicksSlice-BwP3mXWs.js";import"./index-9iDWVYtT.js";import"./fillDefinitions-CP3VVI6H.js";import"./CartesianChart-8vtQlYBx.js";import"./chartDataContext-PPXpQSNc.js";import"./CategoricalChart-BdPgBmoC.js";import"./getRadiusAndStrokeWidthFromDot-CqTAMhL0.js";import"./Layer-C6lb2zxM.js";import"./dataEntryStyles-DVGQZ3dA.js";import"./Label-BywaPoTf.js";import"./Text-DQn8LN2h.js";import"./ZIndexLayer-D-AkOEB1.js";import"./ActivePoints-CviyBCS_.js";import"./Dot-DxKRRRBk.js";import"./types-DltK9JsS.js";import"./activeStyles-mw-DKPXy.js";import"./useAnimationId-TvJ5tZp1.js";import"./Symbols-CudC3e00.js";import"./symbol-4lof-nfP.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-BA1U1Prk.js";import"./ActiveShapeUtils-Cnqk-jZd.js";import"./Curve-Dm-GvmWp.js";import"./step-5knHZEdX.js";import"./useEffectiveDataKey-Er14ucR5.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
