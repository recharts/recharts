import{R as r}from"./iframe-BGa_aXYV.js";import{R as c}from"./zIndexSlice-Ck6l0OZs.js";import{C as d}from"./ComposedChart-wHTG2hfS.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CgpgMU1Q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps--MxbOSxe.js";import"./throttle-odPHgumR.js";import"./index-wG94lJw7.js";import"./index-Bi5RYh62.js";import"./RechartsWrapper-BTlrgf4s.js";import"./axisSelectors-BhlTci4j.js";import"./polarAxisSelectors-DZZ_sV95.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D32hxSnZ.js";import"./index-CCS8tdiB.js";import"./index-_XAYd-SQ.js";import"./renderedTicksSlice-D_6jJO7k.js";import"./index-DF81NAeA.js";import"./CartesianChart-BVZLzzem.js";import"./ZIndexPortal-yBnaKAUB.js";import"./CategoricalChart-C-tokN3T.js";import"./Layer-Bzj9T_Rp.js";import"./LabelList-dSe8emrx.js";import"./Label-Bzq01dK8.js";import"./Text-mATLrig6.js";import"./pageBackground-BUMPEk7V.js";import"./ZIndexLayer-D3eS8Esu.js";import"./ActivePoints-CflJ3BqH.js";import"./Dot-DIjQdgeX.js";import"./types-BlkSdkM7.js";import"./activeStyles-DZX2Soqz.js";import"./useAnimationId-BY6DYNe9.js";import"./dataEntryStyles-3sm9ZLw4.js";import"./Symbols-D-n9Z7lT.js";import"./symbol-CZaSDg5i.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Ds0lF9cJ.js";import"./getRadiusAndStrokeWidthFromDot-Dl4gueRZ.js";import"./ActiveShapeUtils-Luuswf_P.js";import"./Curve-yqHv3532.js";import"./step-Bk4v6FYF.js";import"./useEffectiveDataKey-D5yK2eiQ.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
