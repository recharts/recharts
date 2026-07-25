import{R as e}from"./iframe-5yXyXnaZ.js";import{R as c}from"./zIndexSlice-BDAt33KO.js";import{C as d}from"./ComposedChart-Dwgw5DNZ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D9L80gxp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cv9w3d5_.js";import"./index-Bglp-BB_.js";import"./index-B8ryNKY3.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DO3cHs1F.js";import"./isWellBehavedNumber-CjXf4Ny0.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DA6sibZ3.js";import"./index-BHMzx10I.js";import"./index-sztAkQPC.js";import"./renderedTicksSlice-C1OGHM2B.js";import"./axisSelectors-BXq32W01.js";import"./d3-scale-qreNZqM_.js";import"./CartesianChart-9hlK9pZx.js";import"./chartDataContext-CuGicOh1.js";import"./CategoricalChart-DQJ8zgbM.js";import"./Layer-DvsJVPiG.js";import"./AnimatedItems-B7Ugi4uF.js";import"./Label-BYYKCmSa.js";import"./Text-CgBcsLfs.js";import"./DOMUtils-BV08T-c-.js";import"./ZIndexLayer-DtzoUjMA.js";import"./useAnimationId-C0yd1tvr.js";import"./ActivePoints-CqHCG0xk.js";import"./Dot-Dqwh_5PD.js";import"./types-D9gPTTpR.js";import"./RegisterGraphicalItemId-BWyrz_yh.js";import"./GraphicalItemClipPath-C3T_bjgu.js";import"./SetGraphicalItem-ChFugbQc.js";import"./getRadiusAndStrokeWidthFromDot-CDO922ey.js";import"./ActiveShapeUtils-C8Wl3VBj.js";import"./Curve-BJjaxUht.js";import"./step-7JpJFPkO.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BCn9O9wd.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
