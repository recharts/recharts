import{R as e}from"./iframe-BT2fAbbB.js";import{R as c}from"./zIndexSlice-0bHXttbZ.js";import{C as d}from"./ComposedChart-DdVrflO2.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-oZLhvBYJ.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-Cs_HwjFQ.js";import"./index-CVxrCFbF.js";import"./index-Doyfjfw4.js";import"./get-C017lSC3.js";import"./resolveDefaultProps-C3R0rg6J.js";import"./isWellBehavedNumber-LZ0iz-Mn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BdzpqzJC.js";import"./index-BploPkwU.js";import"./index-DkhzDGLz.js";import"./renderedTicksSlice-CiEsNdJ7.js";import"./axisSelectors-BROcexci.js";import"./d3-scale-DCH5M94w.js";import"./CartesianChart-kqjinDmq.js";import"./chartDataContext-BrLfw6WI.js";import"./CategoricalChart-CkHyoyCb.js";import"./Layer-CwmO2g8o.js";import"./AnimatedItems-B9eraKkz.js";import"./Label-BKr83VYg.js";import"./Text-Bl7vRhlA.js";import"./DOMUtils-BAS9saz0.js";import"./ZIndexLayer-vZErJXnS.js";import"./useAnimationId-B9b4cNZQ.js";import"./ActivePoints-DVgNgNPk.js";import"./Dot-BCEb4Rzy.js";import"./types-UgUXQeZV.js";import"./RegisterGraphicalItemId-rv099XyT.js";import"./GraphicalItemClipPath-BtLAGmDV.js";import"./SetGraphicalItem-C_0DsyJ6.js";import"./getRadiusAndStrokeWidthFromDot-CAQ9ByQw.js";import"./ActiveShapeUtils-aZ-707nn.js";import"./Curve-5RTqUT5x.js";import"./step-CJvEyRUy.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BFCuQBJA.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
