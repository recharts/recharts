import{R as r}from"./iframe-BKSHRT_S.js";import{R as c}from"./zIndexSlice-BLeuW80U.js";import{C as d}from"./ComposedChart-CD-HLwTO.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CQNX5NAH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DcYWqzkb.js";import"./throttle-BkygAiqr.js";import"./index-D7MQE7Za.js";import"./index-D-jrioKU.js";import"./RechartsWrapper-BDEQp4gV.js";import"./axisSelectors-8rGbG1Qd.js";import"./polarAxisSelectors-CQ3ogHuY.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-A-Zbe_Tu.js";import"./index-rcRigKCu.js";import"./index-D9GCJXOs.js";import"./renderedTicksSlice-uVEXaARu.js";import"./index-Cjyk5lan.js";import"./CartesianChart-Bg8a12nJ.js";import"./chartDataContext-vZViOemf.js";import"./CategoricalChart-rdB1CfJb.js";import"./Layer-BzU6Nn69.js";import"./activeStyles-BKkkdbj0.js";import"./Label-DbF58v67.js";import"./Text-B6tKJAid.js";import"./pageBackground-DKWjelca.js";import"./useId-PjG3o87t.js";import"./ZIndexLayer-Dc3T9ZED.js";import"./dataEntryStyles-DoThh5sG.js";import"./useAnimationId-Nyn64y9A.js";import"./ActivePoints-2BgjqPQF.js";import"./Dot-BLeFqc4M.js";import"./types-DNwq_ZGY.js";import"./RegisterGraphicalItemId-D_NDQyK2.js";import"./SetGraphicalItem-DaNVol4K.js";import"./getRadiusAndStrokeWidthFromDot-DfUPMR_R.js";import"./ActiveShapeUtils-DPuoYgwg.js";import"./Curve-LNcUa8Cn.js";import"./step-OqTpatbN.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-B8W36a2Q.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
