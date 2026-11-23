import{R as r}from"./iframe-CsBzJ_oY.js";import{R as c}from"./zIndexSlice-DMNrA3gR.js";import{C as d}from"./ComposedChart-DxnPzYcP.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Dqyro4kI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DTmgUguK.js";import"./throttle-BC8XINhc.js";import"./index-ZIwCGu9j.js";import"./index-ANSegWuD.js";import"./RechartsWrapper-BbLnuVBa.js";import"./axisSelectors-C9oSyHKr.js";import"./polarAxisSelectors-DNMiXlqe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-eAFxYw1v.js";import"./index-BQIdRebQ.js";import"./index-CyJaGzTs.js";import"./renderedTicksSlice-DmEF733K.js";import"./index-Dtk6Fc20.js";import"./fillDefinitions-CiGFpPDU.js";import"./CartesianChart-BkZkGsdO.js";import"./chartDataContext-C_pMILpz.js";import"./CategoricalChart-DGDB_d9-.js";import"./getRadiusAndStrokeWidthFromDot-Hya4Z7ii.js";import"./Layer-DasxrL-P.js";import"./dataEntryStyles-BxNkTaqU.js";import"./Label-BqIt3uIU.js";import"./Text-_hT2aORY.js";import"./ZIndexLayer-BgP2DxGj.js";import"./ActivePoints-BGfIVtPb.js";import"./Dot-CnEc0IvV.js";import"./types-BTltodPN.js";import"./activeStyles-CWJgi0Pp.js";import"./useAnimationId-CwEH45Ii.js";import"./Symbols-u-7YXq8E.js";import"./symbol-BqQr48xZ.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-Cd415TqE.js";import"./ActiveShapeUtils-DlQXgIQN.js";import"./Curve-FGayhVFg.js";import"./step-HvxF_Jgn.js";import"./useEffectiveDataKey-P2OtOQRT.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
