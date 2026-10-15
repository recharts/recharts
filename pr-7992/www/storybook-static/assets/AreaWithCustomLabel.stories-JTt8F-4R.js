import{R as r}from"./iframe-DpdlAHMd.js";import{R as c}from"./zIndexSlice-D40A4F5S.js";import{C as d}from"./ComposedChart-zgSZL8eg.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DfGytBZj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bui1B-A-.js";import"./index-CKGLfYUI.js";import"./index-D9RL9gGT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DK3XJvDH.js";import"./isWellBehavedNumber-ccQ0ki_-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dd9femQq.js";import"./axisSelectors-DQOroxWm.js";import"./d3-scale-DPtZvEea.js";import"./index-Dgc5VXFD.js";import"./index-CPgT1QoG.js";import"./renderedTicksSlice-BduPU7I5.js";import"./index-938zI0LN.js";import"./CartesianChart-Dhk6ePqg.js";import"./chartDataContext-t_vCqpmk.js";import"./CategoricalChart-Bt7APlp3.js";import"./Layer-B8bai4JO.js";import"./activeStyles-D6HKGU7f.js";import"./Label-E3aXJx_S.js";import"./Text-CoXwYvwY.js";import"./pageBackground-D9ogOXyk.js";import"./useId-CnP1W382.js";import"./useBackwardsCompatibleTheme-CGJLu250.js";import"./ZIndexLayer-lKfC9naY.js";import"./useAnimationId-BE4SknEb.js";import"./dataEntryStyles-YsQ_uBBL.js";import"./ActivePoints-CLGOJg0k.js";import"./Dot-B-SHSrYh.js";import"./types-BGps8a2x.js";import"./GraphicalItemClipPath-Cs7E0DKS.js";import"./SetGraphicalItem-KfOC3T9M.js";import"./getRadiusAndStrokeWidthFromDot-DY_fHX61.js";import"./ActiveShapeUtils-fnlRVR3C.js";import"./Curve-jCmK9z3l.js";import"./step-D1wWY9HN.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-jGEWZ8Yk.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
