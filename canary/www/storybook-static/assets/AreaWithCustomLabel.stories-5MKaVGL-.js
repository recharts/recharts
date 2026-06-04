import{R as e}from"./iframe-D7yt-ZhS.js";import{R as c}from"./zIndexSlice-B3_xMC6k.js";import{C as d}from"./ComposedChart-Bl4WegRH.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B180swj1.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-HxqS16dW.js";import"./index-CHXGCi4x.js";import"./index-nuP2vluJ.js";import"./get-Cebs6l6-.js";import"./resolveDefaultProps-BUJk688E.js";import"./isWellBehavedNumber-NaDCVAJY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CArYIH40.js";import"./index-CglBtasG.js";import"./index-8zJni8A2.js";import"./renderedTicksSlice-DNerh-qI.js";import"./axisSelectors-CW8UYJLW.js";import"./d3-scale-BUBb-XjW.js";import"./string-B6fdYHAA.js";import"./CartesianChart-C6SOYYpl.js";import"./chartDataContext-_IqHUZU5.js";import"./CategoricalChart-CMCxIWsh.js";import"./Layer-B34T8oTs.js";import"./AnimatedItems-CUAQ84gk.js";import"./Label-C0p1CWe9.js";import"./Text-DWwT0_EQ.js";import"./DOMUtils-DoEzEhWE.js";import"./ZIndexLayer-BjlE0UF2.js";import"./useAnimationId-gSm0_FsD.js";import"./ActivePoints-KBOJcLZ_.js";import"./Dot-CAfCQdRP.js";import"./types-CuLQosun.js";import"./RegisterGraphicalItemId-Bj0awerq.js";import"./GraphicalItemClipPath-CSwP3plz.js";import"./SetGraphicalItem-BFSgsIRt.js";import"./getRadiusAndStrokeWidthFromDot-BmHXs1fo.js";import"./ActiveShapeUtils-C4okiOLS.js";import"./Curve-DbP7_Dvx.js";import"./step-OtS6f_xO.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-C0X08UDC.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
