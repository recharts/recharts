import{R as e}from"./iframe-DRSW8ue2.js";import{R as c}from"./zIndexSlice-Bu-rrRtT.js";import{C as d}from"./ComposedChart-kVHcj-R_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C8tKUV98.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CUiRuHKg.js";import"./index-90eqwCh0.js";import"./index-p0Ur2FF4.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-raTiTqbb.js";import"./isWellBehavedNumber-DAnude9s.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DT9xTVvF.js";import"./index-CyOXcHUd.js";import"./index-iUHBfWdS.js";import"./renderedTicksSlice-Dq99djjA.js";import"./axisSelectors-D9B32UgG.js";import"./d3-scale-C6_vDDuq.js";import"./CartesianChart-CHa2q2rq.js";import"./chartDataContext-BFVcvsqe.js";import"./CategoricalChart-CyaAwA7K.js";import"./Layer-BXqs-IsN.js";import"./AnimatedItems-Dm8lwSRg.js";import"./Label-DWIM-PiW.js";import"./Text-DjqRVUg-.js";import"./DOMUtils-CyGXHzmH.js";import"./ZIndexLayer-CrpBbv8w.js";import"./useAnimationId-Dnplssp6.js";import"./ActivePoints-Bj6N22Y9.js";import"./Dot-BBNcCK9J.js";import"./types-CaXHGphp.js";import"./RegisterGraphicalItemId-D6Xem68n.js";import"./GraphicalItemClipPath-D8tm2vL2.js";import"./SetGraphicalItem-CM2WyRpW.js";import"./getRadiusAndStrokeWidthFromDot-BL9YvDb6.js";import"./ActiveShapeUtils-CyqwB66-.js";import"./Curve-BBQJYMka.js";import"./step-D-9g_k4w.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-63b_Enxj.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
