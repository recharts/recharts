import{r as n,e as t}from"./iframe-DTgyoVvk.js";import{L as p}from"./LineChart-DgRpSIRN.js";import{R as s}from"./arrayEqualityCheck-EHbEP26L.js";import{C as c}from"./CartesianGrid-BOtFk4fE.js";import{X as l}from"./XAxis-BkL5cMjG.js";import{Y as d}from"./YAxis-CeCrGO4m.js";import{L as y}from"./Legend-CH5sFI1F.js";import{L as h}from"./Line-BiUeNFy3.js";import{T as u}from"./Tooltip-BCMvRAtG.js";import{R as g}from"./RechartsHookInspector-CEM_bNOG.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Chfcl0hS.js";import"./index-BZ07V7b0.js";import"./immer-Cali6Ur_.js";import"./hooks-C2ewgjKA.js";import"./axisSelectors-etAOI9l8.js";import"./d3-scale-OH59Lrba.js";import"./zIndexSlice-C5hUHulT.js";import"./renderedTicksSlice-lIBtZyXl.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-3k35313H.js";import"./chartDataContext-DEXCwpe8.js";import"./CategoricalChart-tWQ6qvk8.js";import"./resolveDefaultProps-D6qERWpv.js";import"./CartesianAxis-BkWnH6i3.js";import"./Layer-CN_vGRpI.js";import"./Text-DzAJvHlo.js";import"./DOMUtils-BzN38qwO.js";import"./Label-Ceoi0MO2.js";import"./ZIndexLayer-BR0xXhbH.js";import"./types-CFHwNx79.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DIOiPUYO.js";import"./symbol-DLAst82x.js";import"./step-C7wlxZdo.js";import"./useElementOffset-D954DiA4.js";import"./uniqBy-BLib71RJ.js";import"./iteratee-DowDcm4g.js";import"./ReactUtils-BYwaZR_U.js";import"./ActivePoints-kvFI_pNp.js";import"./Dot-DzhxTZg1.js";import"./RegisterGraphicalItemId-B8FdEXiZ.js";import"./ErrorBarContext-DyEpq3qQ.js";import"./GraphicalItemClipPath-fMgbbWOb.js";import"./SetGraphicalItem-DlupFmAY.js";import"./useAnimationId-fmEgFYYy.js";import"./getRadiusAndStrokeWidthFromDot-DnU7-Gnj.js";import"./ActiveShapeUtils-D1UYsbu-.js";import"./isPlainObject-cO95R4gJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-pA7LeOq9.js";import"./Trapezoid-C0NYHdgo.js";import"./Sector-lyZE52ex.js";import"./Curve-DHT2OdXm.js";import"./Cross-CaCIF03z.js";import"./index-BSHSP00B.js";import"./ChartSizeDimensions-DEWYFyG1.js";import"./OffsetShower-DkHEZ74E.js";import"./PlotAreaShower-VzN6bTnW.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
