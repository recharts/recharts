import{R as r}from"./iframe-DlCdq56B.js";import{R as c}from"./zIndexSlice-AxtVyY3Z.js";import{C as d}from"./ComposedChart-D-HLNOcj.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CSh65bNW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BUW76FaL.js";import"./throttle-DEcvUi6F.js";import"./index-DRrdDGzH.js";import"./index-D0nmcM1A.js";import"./RechartsWrapper-fp3cwEAp.js";import"./axisSelectors-CSfGPpIK.js";import"./polarAxisSelectors-B-SnaQvT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-3Jo-Yey1.js";import"./index-Dl9VO4In.js";import"./index-CPJJsZF5.js";import"./renderedTicksSlice-xGoci0dc.js";import"./index-CVrMJXNG.js";import"./fillDefinitions-P9YSjlZq.js";import"./CartesianChart-DAQanSbx.js";import"./chartDataContext-BiLGYApi.js";import"./CategoricalChart-DEbdQdFq.js";import"./getRadiusAndStrokeWidthFromDot-9hVd_OrB.js";import"./Layer-DYaOGPQe.js";import"./dataEntryStyles-BQcljHLn.js";import"./Label-DhxtC2yH.js";import"./Text-DCVc9tCi.js";import"./ZIndexLayer-DoM1zDnE.js";import"./ActivePoints-Ve_riuMJ.js";import"./Dot-B5biZeEa.js";import"./types-CGD2CGOX.js";import"./activeStyles-WuCpdruK.js";import"./useAnimationId-DvgYyN8a.js";import"./Symbols-Dqo2PD8d.js";import"./symbol-BfVO91QA.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-DVkPEJIv.js";import"./ActiveShapeUtils-BhCU4_aJ.js";import"./Curve-lp641HWe.js";import"./step-DukoPJ0d.js";import"./useEffectiveDataKey-dLwdu-vi.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
