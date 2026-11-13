import{R as r}from"./iframe-B8oHBE2B.js";import{R as c}from"./zIndexSlice-CY69X-_e.js";import{C as d}from"./ComposedChart-D7HXrnrm.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DiffzYiv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CgUiyAYX.js";import"./throttle-CUYrrG0C.js";import"./index-DmSsi07Q.js";import"./index-cJCZbnBh.js";import"./RechartsWrapper-DFBUYq9O.js";import"./axisSelectors-Ds5h7JK9.js";import"./polarAxisSelectors-D2FYbhjQ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CbMuV4Xw.js";import"./index-DMrvH4_y.js";import"./index-DGZRfgJf.js";import"./renderedTicksSlice-a5-uxQKT.js";import"./index-BO756sza.js";import"./fillDefinitions-DKQEn6JZ.js";import"./CartesianChart-Cx94wGq6.js";import"./chartDataContext-DF9RfUto.js";import"./CategoricalChart-B_DdruJc.js";import"./Layer-d-LKmDNk.js";import"./dataEntryStyles-BdZkCN9m.js";import"./Label-Do0pS3hb.js";import"./Text-CvT3zU9x.js";import"./ZIndexLayer-ctGMKsDO.js";import"./ActivePoints-Cp4H5Nc6.js";import"./Dot-BJ0YQTw_.js";import"./types-pqA8tR2L.js";import"./activeStyles-B9e3PXPC.js";import"./useAnimationId-DstXvFRQ.js";import"./Symbols-DlTVDDFq.js";import"./symbol-DwKqx-k1.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CNXf_JK1.js";import"./getRadiusAndStrokeWidthFromDot-CwP227yr.js";import"./ActiveShapeUtils-DvU5i_JD.js";import"./Curve-DGAKYDzB.js";import"./step-BZkNkw_J.js";import"./useEffectiveDataKey-R28HVoPp.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
