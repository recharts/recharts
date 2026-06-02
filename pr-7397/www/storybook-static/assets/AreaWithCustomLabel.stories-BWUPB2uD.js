import{c as e}from"./iframe-DCxmmXwr.js";import{g as c}from"./zIndexSlice-D5dh4jLY.js";import{C as d}from"./ComposedChart-CBS3HMO1.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-Cc7NRsm3.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-SgEFwxUu.js";import"./index-DDgPfSlI.js";import"./index-Mzvapta9.js";import"./get-BGMlQ-Gx.js";import"./resolveDefaultProps-Dbw1fq_o.js";import"./isWellBehavedNumber-CpP0Zk3Z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BIau-2yw.js";import"./index-VwBqvb6i.js";import"./index-DgYh_LA8.js";import"./renderedTicksSlice-DSZVgTAV.js";import"./axisSelectors-dhV3Z94_.js";import"./d3-scale-Bu_zrpDn.js";import"./CartesianChart-D-fZCIkl.js";import"./chartDataContext-PHEEBUXD.js";import"./CategoricalChart-DfNs-HF3.js";import"./Curve-lML4pT7n.js";import"./types-gNnCO6KJ.js";import"./step-BzmHC3AY.js";import"./path-DyVhHtw_.js";import"./Layer-BBh4PyoV.js";import"./ReactUtils-UlfCGyqA.js";import"./Label-BxDF9pHP.js";import"./Text-BQlyDcDw.js";import"./DOMUtils-BtWg_eMC.js";import"./ZIndexLayer-DYE1lO3r.js";import"./ActivePoints-Dyjkd6x5.js";import"./Dot-CpTGA67i.js";import"./RegisterGraphicalItemId-Bf4FTeRp.js";import"./GraphicalItemClipPath-BgB5Pb70.js";import"./SetGraphicalItem-CTm0YcCQ.js";import"./useAnimationId-D36I95JC.js";import"./getRadiusAndStrokeWidthFromDot-BV7amyi3.js";import"./graphicalItemSelectors-Byb2PPwp.js";const rt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ot=["CustomizedLabel"];export{t as CustomizedLabel,ot as __namedExportsOrder,rt as default};
