import{R as e}from"./iframe-DD3MNlJs.js";import{R as c}from"./zIndexSlice-DsPtdaG-.js";import{C as d}from"./ComposedChart-Ch5rhd-f.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-ppAVnSzL.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BsgVdVzc.js";import"./index-Bck27UYR.js";import"./index-a_wokTdP.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bl223uSE.js";import"./isWellBehavedNumber-CNMhuHyW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CCnqh_-x.js";import"./index-DseUKmqi.js";import"./index-D7phJECN.js";import"./renderedTicksSlice-BfcmamU7.js";import"./axisSelectors-BHK7QjqO.js";import"./d3-scale-yWlQ4_Nx.js";import"./CartesianChart-aRdig7-B.js";import"./chartDataContext-B7qXvLbV.js";import"./CategoricalChart-Cq7n2KtT.js";import"./Layer-BSwpDfMb.js";import"./AnimatedItems--KiCkiyG.js";import"./Label-CTgAmEuq.js";import"./Text-BWwrC4eC.js";import"./DOMUtils-CKULAiMw.js";import"./ZIndexLayer-BIp4crEt.js";import"./useAnimationId-3wwsxOl9.js";import"./ActivePoints-DIeqY30s.js";import"./Dot-M9tiGPsp.js";import"./types-3SXpu3DM.js";import"./RegisterGraphicalItemId-UFa7fX9c.js";import"./GraphicalItemClipPath-NC5NbT5H.js";import"./SetGraphicalItem-BanwGypR.js";import"./getRadiusAndStrokeWidthFromDot-bkIsgxom.js";import"./ActiveShapeUtils-DNZIetEU.js";import"./Curve-Bmu0g7Ld.js";import"./step-C2Nk1uI6.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-wIYvHEz-.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
