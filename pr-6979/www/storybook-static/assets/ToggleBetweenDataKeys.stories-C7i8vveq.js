import{r as n,e as t}from"./iframe-Bm_dlztP.js";import{L as p}from"./LineChart-C2AEnur2.js";import{R as s}from"./arrayEqualityCheck-BKx_y40S.js";import{C as c}from"./CartesianGrid-D8kzHBwE.js";import{X as l}from"./XAxis-DiBdkzoV.js";import{Y as d}from"./YAxis-Dt19AUea.js";import{L as y}from"./Legend-Dzh3BOn7.js";import{L as h}from"./Line-CLMa4j3x.js";import{T as u}from"./Tooltip-D5YK1Rdo.js";import{R as g}from"./RechartsHookInspector-CZNQLUTJ.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BufFVb6a.js";import"./hooks-QfdSjeut.js";import"./axisSelectors-BUAas6a1.js";import"./zIndexSlice-Bq54Z1bK.js";import"./resolveDefaultProps-DAVx7IVS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BEFObzU7.js";import"./chartDataContext-D60asm_F.js";import"./CategoricalChart-DinCBVKr.js";import"./CartesianAxis-Df-SQWPS.js";import"./Layer-DqzpUDSE.js";import"./Text-BE0vw9O_.js";import"./DOMUtils-BT5kncNa.js";import"./Label-CDVZMFBi.js";import"./ZIndexLayer-BWJMOT1A.js";import"./types-DmFvG4SC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CIac5k7Z.js";import"./Curve-D1sI4FDZ.js";import"./useElementOffset-H-NWySai.js";import"./iteratee-C4Ua_ZlD.js";import"./ReactUtils-278YW1x2.js";import"./ActivePoints-CYA336oa.js";import"./Dot-DVC6PvDp.js";import"./RegisterGraphicalItemId-Fy4B400g.js";import"./ErrorBarContext-DrNk0Egn.js";import"./GraphicalItemClipPath-DBcACHox.js";import"./SetGraphicalItem-C3DJs7FG.js";import"./useAnimationId-DL43TA5B.js";import"./getRadiusAndStrokeWidthFromDot-zhMizOQu.js";import"./ActiveShapeUtils-CdMwlbl5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CF3NoYDn.js";import"./Trapezoid-BcjTe3fL.js";import"./Sector-Tp_jaJNZ.js";import"./Cross-Bc0M8izX.js";import"./index-DBvu736D.js";import"./ChartSizeDimensions-vZmS1AK4.js";import"./OffsetShower-D1dBuDTC.js";import"./PlotAreaShower-CncsJcTH.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [dataKey, setDataKey] = useState('pv');
    return <>
        <button type="button" onClick={() => {
        if (dataKey === 'pv') {
          setDataKey('uv');
        } else {
          setDataKey('pv');
        }
      }}>
          Change Data Key
        </button>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{
            r: 8
          }} />
            <Tooltip />
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};
