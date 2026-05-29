import{e}from"./iframe-Dq2D9WMR.js";import{g as d}from"./zIndexSlice-CMIgpwRl.js";import{C as c}from"./ComposedChart-Ctt5r4_8.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-XAWM8X8a.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DBox_88Y.js";import"./get-Dg89qnmN.js";import"./resolveDefaultProps-CL0P-2Ye.js";import"./isWellBehavedNumber-CElaIhJa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Coa45hTw.js";import"./index-Vw7ge0ya.js";import"./index-toY2TPxE.js";import"./index-ComImMI9.js";import"./renderedTicksSlice-CfboEt5t.js";import"./axisSelectors-sK2-dJnb.js";import"./d3-scale-CJAlquTP.js";import"./CartesianChart-DTsAEBhV.js";import"./chartDataContext-DSYMXmV-.js";import"./CategoricalChart-DqFO3fer.js";import"./Curve-B4KKsiQU.js";import"./types-C93vTFKm.js";import"./step-uPZi_6ZX.js";import"./path-DyVhHtw_.js";import"./Layer-CNg3jf3H.js";import"./ReactUtils-CnckncOE.js";import"./Label-DafpBHua.js";import"./Text-DsY1ckdl.js";import"./DOMUtils-DuGpXxvH.js";import"./ZIndexLayer-BazpBvjE.js";import"./ActivePoints-Cd1Z09h4.js";import"./Dot-CjWxaC-Q.js";import"./RegisterGraphicalItemId-27foWtUc.js";import"./GraphicalItemClipPath-DwKkk3VM.js";import"./SetGraphicalItem-D7EoJphE.js";import"./useAnimationId-uSyAtuoQ.js";import"./getRadiusAndStrokeWidthFromDot-D25HmC7L.js";import"./graphicalItemSelectors-Di7DaTSh.js";const et={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=n=>{const{index:s,x:r,y:o}=n;return e.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(d,{width:"100%",height:i},e.createElement(c,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const rt=["CustomizedLabel"];export{t as CustomizedLabel,rt as __namedExportsOrder,et as default};
