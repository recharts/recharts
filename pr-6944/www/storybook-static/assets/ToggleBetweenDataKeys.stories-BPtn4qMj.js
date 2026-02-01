import{r as n,e as t}from"./iframe-BJ3b3BfY.js";import{L as p}from"./LineChart-D--QU74w.js";import{R as s}from"./arrayEqualityCheck-Bo2Wnkh3.js";import{C as c}from"./CartesianGrid-DzBAtk5H.js";import{X as l}from"./XAxis-DGMxd97y.js";import{Y as d}from"./YAxis-CF3zWZoV.js";import{L as y}from"./Legend-Ci_rcxum.js";import{L as h}from"./Line-B0J8rKMr.js";import{T as u}from"./Tooltip-WOCtSrYq.js";import{R as g}from"./RechartsHookInspector-ORt5Hm4G.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CKiG0ykq.js";import"./hooks-C3LIgo6e.js";import"./axisSelectors-CqG3KyC6.js";import"./zIndexSlice-CWsPu_90.js";import"./resolveDefaultProps-BwYlSIqL.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-dQ-XbzLC.js";import"./chartDataContext-CMXdzaII.js";import"./CategoricalChart-Bg2hOV4d.js";import"./CartesianAxis-LraHpKTU.js";import"./Layer-B4_ys6we.js";import"./Text-Ch5Da2lM.js";import"./DOMUtils-UovAGbSR.js";import"./Label-DeB84C01.js";import"./ZIndexLayer-CUGD5-lC.js";import"./types-mvH4HYXR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DMZSC_-N.js";import"./Curve-Kded-2mW.js";import"./useElementOffset-C8BBA2eJ.js";import"./iteratee-0l_7-KwK.js";import"./ReactUtils-zwc7yRgu.js";import"./ActivePoints-BlpW6YCS.js";import"./Dot-C_Q3jwW2.js";import"./RegisterGraphicalItemId-DQUBtM_I.js";import"./ErrorBarContext-C1pIVCq0.js";import"./GraphicalItemClipPath-DbsTfdnw.js";import"./SetGraphicalItem-MDKWBLr9.js";import"./useAnimationId-PYCZu_AY.js";import"./getRadiusAndStrokeWidthFromDot-CafT4P9y.js";import"./ActiveShapeUtils-CxNZmNtv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B2kMW3VJ.js";import"./Trapezoid-DF2tlYWx.js";import"./Sector-BHT4ZWAz.js";import"./Cross-CMDGLIFy.js";import"./index-vodQRtzb.js";import"./ChartSizeDimensions-C-iWuIdI.js";import"./OffsetShower-CldxxWXJ.js";import"./PlotAreaShower-CYDRIz5k.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
