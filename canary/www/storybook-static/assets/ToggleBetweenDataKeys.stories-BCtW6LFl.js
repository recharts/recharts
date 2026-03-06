import{r as n,e as t}from"./iframe-D0SJPJ1y.js";import{L as p}from"./LineChart-BMDbRDXn.js";import{R as s}from"./arrayEqualityCheck-CYS0izrw.js";import{C as c}from"./CartesianGrid-DpDtCUwn.js";import{X as l}from"./XAxis-CwSSbwpc.js";import{Y as d}from"./YAxis-DF4qEhbE.js";import{L as y}from"./Legend-JnfTeQE1.js";import{L as h}from"./Line-BC_Nvy_p.js";import{T as u}from"./Tooltip-CZUq6EK0.js";import{R as g}from"./RechartsHookInspector-4NIikMun.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DR1v2TsK.js";import"./index-CPz14I3O.js";import"./immer-BFjNfeIQ.js";import"./hooks-V_cOlgcg.js";import"./axisSelectors-Bl05SH9I.js";import"./d3-scale-CYyK-SUf.js";import"./zIndexSlice-CqQsXxK3.js";import"./renderedTicksSlice-oZMg51oo.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CwFfh_0J.js";import"./chartDataContext-Jo-HA9ql.js";import"./CategoricalChart-FrfPjT_B.js";import"./resolveDefaultProps-CnSf9MnV.js";import"./CartesianAxis-D59EO1CG.js";import"./Layer-Dax6EhgB.js";import"./Text-CvTZwd3j.js";import"./DOMUtils-DfKOz27u.js";import"./Label-Cf3oENl6.js";import"./ZIndexLayer-DYNk2l8y.js";import"./types-Cyc_Gww5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Doo8obb_.js";import"./symbol--3m7hGn6.js";import"./step-RKAN_I-J.js";import"./useElementOffset-DSoHOOe_.js";import"./uniqBy-BaRtkJAL.js";import"./iteratee-ssKXkiea.js";import"./ReactUtils-a6BVn4Bt.js";import"./ActivePoints-DG08NKKZ.js";import"./Dot-B2ZduEOn.js";import"./RegisterGraphicalItemId-CivjBHhq.js";import"./ErrorBarContext-Bzp3Zzcb.js";import"./GraphicalItemClipPath-637j1oGj.js";import"./SetGraphicalItem-C-583XhE.js";import"./useAnimationId-wUwzbzyQ.js";import"./getRadiusAndStrokeWidthFromDot-DToYTxGi.js";import"./ActiveShapeUtils-CH3V2Gcs.js";import"./isPlainObject-CjD1Y_nD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dj_IkvMc.js";import"./Trapezoid-Dz2cKjjq.js";import"./Sector-2V2J5PIx.js";import"./Curve-Cx3Ohe6s.js";import"./Cross-B51sRxFA.js";import"./index-CBc708fQ.js";import"./ChartSizeDimensions-ChXleD3h.js";import"./OffsetShower-D49YcvPA.js";import"./PlotAreaShower-BqwlsAkt.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
