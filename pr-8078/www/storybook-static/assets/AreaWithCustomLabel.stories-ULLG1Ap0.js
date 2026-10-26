import{R as r}from"./iframe-BofWz4pi.js";import{R as c}from"./zIndexSlice-DPHCingP.js";import{C as d}from"./ComposedChart-D_3KSeQ5.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DGIpuGYq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DKgUGYpY.js";import"./throttle-CD21hIR0.js";import"./index-Ch52J8fd.js";import"./index-budgZ99k.js";import"./RechartsWrapper-uhVYqXCO.js";import"./axisSelectors-BlRUD72R.js";import"./polarAxisSelectors-5SLj1vDB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BBiuonxv.js";import"./index-CCD_p5-C.js";import"./index-BTJxJJp6.js";import"./renderedTicksSlice-DguNpOt6.js";import"./index-DGPf-g6A.js";import"./CartesianChart-Bw0i9iF5.js";import"./chartDataContext-f6L6P8Kq.js";import"./CategoricalChart-DMR2DLHI.js";import"./Layer-bLQQfVOZ.js";import"./activeStyles-B7UPTptH.js";import"./Label-CCUawDng.js";import"./Text-Cod3bNx5.js";import"./pageBackground-CLiAzPgV.js";import"./useId-CsDd5jlc.js";import"./ZIndexLayer-ZOq897pe.js";import"./dataEntryStyles-EsxEhXM1.js";import"./useAnimationId-CM0h2zlX.js";import"./ActivePoints-DgVnIIPK.js";import"./Dot-DoIuuVTb.js";import"./types-Da0w2MOX.js";import"./RegisterGraphicalItemId-C_30UGno.js";import"./SetGraphicalItem-Cxhb9Qmq.js";import"./getRadiusAndStrokeWidthFromDot-Py8UGwCM.js";import"./ActiveShapeUtils-jlvddXY2.js";import"./Curve-CFeHUPSl.js";import"./step-A_Fv11J5.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-CF-diEWF.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
