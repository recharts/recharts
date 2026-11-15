import{R as r}from"./iframe-CQK5cKb5.js";import{R as c}from"./zIndexSlice-B7W_lSrS.js";import{C as d}from"./ComposedChart-BPNXxxpF.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CUObnf1Z.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-sIKj046z.js";import"./throttle-CtjoOnFV.js";import"./index-Dm38SIQa.js";import"./index-BKYCEKLA.js";import"./RechartsWrapper-DIL7xA5W.js";import"./axisSelectors-CFm2aUpt.js";import"./polarAxisSelectors-CGBkjniO.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DXQtVXGL.js";import"./index-CB2LtrSa.js";import"./index-FJUFiiDw.js";import"./renderedTicksSlice-CfjQzOiB.js";import"./index-vF-n4YF_.js";import"./fillDefinitions-R6mNXYbM.js";import"./CartesianChart-CdwXekNk.js";import"./chartDataContext-LfCv8xRO.js";import"./CategoricalChart-DiRS6s-r.js";import"./Layer-urQEAooy.js";import"./dataEntryStyles-B4J35a5k.js";import"./Label-CQ2HjeWR.js";import"./Text-Z2ey8U7p.js";import"./ZIndexLayer-9k2RLX5n.js";import"./ActivePoints-C-llUCjP.js";import"./Dot-DqwBwinu.js";import"./types-DmMnI0O_.js";import"./activeStyles-DkKN9Gb1.js";import"./useAnimationId-C1Da615s.js";import"./Symbols-BYEI9G2W.js";import"./symbol-CDkSHUUS.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-u5-88p1b.js";import"./getRadiusAndStrokeWidthFromDot-B0dUD5K2.js";import"./ActiveShapeUtils-DSt9b1dG.js";import"./Curve-B0cUpmBX.js";import"./step-D2yChQSN.js";import"./useEffectiveDataKey-C9n3TkLL.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
