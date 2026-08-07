import{R as e}from"./iframe-CWxtgXuN.js";import{R as c}from"./zIndexSlice-DuNjPOIA.js";import{C as d}from"./ComposedChart-CHLSjXfe.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-B99vmJng.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DySWaKHI.js";import"./index-D3Okail2.js";import"./index-Co2hlbGQ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DB57oDCz.js";import"./isWellBehavedNumber-RhnC_be2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-cC4MiwtJ.js";import"./index-ClfrRk61.js";import"./index-Cgh7W-Sw.js";import"./axisSelectors-D3U5jtqo.js";import"./d3-scale-PJ0eA6WB.js";import"./renderedTicksSlice-DdR3Yk66.js";import"./CartesianChart-VS3m0tpN.js";import"./chartDataContext-BzVtDYqK.js";import"./CategoricalChart-CDL51AOI.js";import"./Layer-DvshJojd.js";import"./AnimatedItems-xrLxeBUX.js";import"./Label-B4Vj6wwG.js";import"./Text-Bzp-NWLm.js";import"./DOMUtils-B_ZEHGfF.js";import"./ZIndexLayer-BlQF_3Y8.js";import"./useAnimationId-N7_T0mrz.js";import"./ActivePoints-BZ5j9Isf.js";import"./Dot-BmDNDKDS.js";import"./types-CUZin1-8.js";import"./RegisterGraphicalItemId-DrgIbtZo.js";import"./GraphicalItemClipPath-C5JLsR_L.js";import"./SetGraphicalItem-DN47EjfQ.js";import"./graphicalItemIdentity-CLct0io8.js";import"./ActiveShapeUtils-CHtnvTAF.js";import"./Curve-D2bA3Qsr.js";import"./step-FW_ylVPK.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-DQSpDGj3.js";import"./graphicalItemSelectors-CE4_kVFF.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
