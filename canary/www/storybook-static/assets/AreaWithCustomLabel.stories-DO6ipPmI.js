import{R as r}from"./iframe-DzO9JHZD.js";import{R as c}from"./zIndexSlice-wXMOrHSA.js";import{C as d}from"./ComposedChart-nRRh8kX9.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Bj2U_LT-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-_6vD_mzO.js";import"./index-D6SCMRFc.js";import"./index-DBwiuZT2.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B5PLlTs_.js";import"./isWellBehavedNumber-F-o7IHqi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DFXgxjJb.js";import"./axisSelectors-Bktw6xhv.js";import"./d3-scale-BhZPhAmj.js";import"./index-HY8blrlW.js";import"./index-vlcan66w.js";import"./renderedTicksSlice-B6tapBnR.js";import"./index-DN5zS5di.js";import"./CartesianChart-aILzJ3W8.js";import"./chartDataContext-CW-xn50P.js";import"./CategoricalChart-BMeJEgn8.js";import"./Layer-CnogDsGN.js";import"./AnimatedItems-najEeKMC.js";import"./Label-CKmL6Jnj.js";import"./Text-CkTBNTFx.js";import"./DOMUtils-CiXbDn_A.js";import"./useId-BB5zPEe_.js";import"./useBackwardsCompatibleTheme-DXGk--5K.js";import"./ZIndexLayer-CYttbcyg.js";import"./useAnimationId-CV7fiXfg.js";import"./ActivePoints-3ZBjUYQf.js";import"./Dot-Bz-gpTQG.js";import"./types-Br-ctfN4.js";import"./RegisterGraphicalItemId-DbTCddMf.js";import"./GraphicalItemClipPath-DycxALBl.js";import"./SetGraphicalItem-CLQaaH2S.js";import"./getRadiusAndStrokeWidthFromDot-Dl1O25XE.js";import"./ActiveShapeUtils-CDs2CvAD.js";import"./Curve-Bq9mijgP.js";import"./step-CTH6I-yX.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CpX4qTkI.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
