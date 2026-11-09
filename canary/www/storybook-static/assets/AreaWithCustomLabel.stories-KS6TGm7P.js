import{R as r}from"./iframe-CMDkES_H.js";import{R as c}from"./zIndexSlice-CEXNkTXm.js";import{C as d}from"./ComposedChart-AN7xQ-23.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DY_zDCI6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BBu38DQb.js";import"./throttle-BV0akTiG.js";import"./index-nmLk2qd-.js";import"./index-Cycxm7rW.js";import"./RechartsWrapper-YdCgLXYS.js";import"./axisSelectors-BgqFub1M.js";import"./polarAxisSelectors-B2-HhSnm.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Vem8QkvK.js";import"./index-CDFg-t_S.js";import"./index-CQ6GchDM.js";import"./renderedTicksSlice-BzpVxRSL.js";import"./index-Dwicv9nR.js";import"./fillDefinitions-aMvFJMZF.js";import"./CartesianChart-D9ZN9vwZ.js";import"./chartDataContext-U2SqLEu1.js";import"./CategoricalChart-CNCtCgVg.js";import"./Layer-Dxo4pAJK.js";import"./dataEntryStyles-CQKyrMQS.js";import"./Label-DkUV91yB.js";import"./Text-CXN2lt2h.js";import"./ZIndexLayer-Dr7m0amd.js";import"./ActivePoints-BkO0kzKb.js";import"./Dot-DVBxqdJG.js";import"./types-BRdSNrFn.js";import"./activeStyles-uNCwuaQZ.js";import"./useAnimationId-Br5Fw6SL.js";import"./Symbols-KRGqLXgG.js";import"./symbol-CkUX_hdb.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BWtk-2FX.js";import"./getRadiusAndStrokeWidthFromDot-DhdxEzB3.js";import"./ActiveShapeUtils-BI-HqHtF.js";import"./Curve-lt9C0hSq.js";import"./step-CtpAouP5.js";import"./useEffectiveDataKey-DEHLWy8h.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
