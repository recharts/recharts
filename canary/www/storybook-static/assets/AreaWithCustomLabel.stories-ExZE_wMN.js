import{R as r}from"./iframe-DQsNmxmG.js";import{R as c}from"./zIndexSlice-fYCbSPba.js";import{C as d}from"./ComposedChart-CViFtKa3.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D8rkr2Ju.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C9L4dsEq.js";import"./throttle-zQAbuFwu.js";import"./index-6jBLt3fF.js";import"./index-DieS8gnr.js";import"./RechartsWrapper-MEg26Y_7.js";import"./axisSelectors-BsRkt3Xk.js";import"./polarAxisSelectors-B-0rkllN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BIy4_L5R.js";import"./index-CbIjVRAX.js";import"./index-CCZsgeAv.js";import"./renderedTicksSlice-vSa4eBxF.js";import"./index-Cq0Y-kP9.js";import"./fillDefinitions-CxoYZDG2.js";import"./CartesianChart-B32Zddgy.js";import"./chartDataContext-S0JtTO97.js";import"./CategoricalChart-CKZnphjR.js";import"./Layer-JjdEQyi5.js";import"./dataEntryStyles-CArKPFy6.js";import"./Label-BGoCqB35.js";import"./Text-Qtf5nEek.js";import"./ZIndexLayer-DJNsuc82.js";import"./ActivePoints-BlJUvkga.js";import"./Dot-CyU-jpb1.js";import"./types-wkisKABV.js";import"./activeStyles-BgO2Wbsx.js";import"./useAnimationId-CfQHWCsS.js";import"./Symbols-CXxuzOPp.js";import"./symbol-0bvODblh.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BG-GEzcM.js";import"./getRadiusAndStrokeWidthFromDot-B1d6CA7m.js";import"./ActiveShapeUtils-t6nFfTlu.js";import"./Curve-C5fpylM9.js";import"./step-pQrH6ncJ.js";import"./useEffectiveDataKey-CR-coZ9_.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
