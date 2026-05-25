import{u as n,e as t}from"./iframe-D1Y9TY-u.js";import{L as p}from"./LineChart-CVOR8k8h.js";import{g as s}from"./arrayEqualityCheck-DPvIBees.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-qdbsk9vU.js";import{X as d}from"./XAxis-5BMZV76c.js";import{Y as u}from"./YAxis-D2V4IA3o.js";import{L as y}from"./Legend-DsviXKmW.js";import{L as h}from"./Line-DINGk1Pq.js";import{T as g}from"./Tooltip-BHl68J2G.js";import{R as K}from"./RechartsHookInspector-DlKiXr8l.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B0rnCwdR.js";import"./index-D5E_lAb8.js";import"./immer-CxQQPMht.js";import"./hooks-CFGEq-6u.js";import"./axisSelectors-DhcMUj02.js";import"./d3-scale-BrKRNhi9.js";import"./zIndexSlice-CgFHZos-.js";import"./renderedTicksSlice-W-15kQDb.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B6m73if6.js";import"./chartDataContext-C5ZGItfB.js";import"./CategoricalChart-DcwMFRg_.js";import"./resolveDefaultProps-DD8L0n44.js";import"./CartesianAxis-BWlWM6yy.js";import"./Layer-B3bXBbbL.js";import"./Text-Dd-bZYpK.js";import"./DOMUtils-DyWiHKN-.js";import"./Label-DE2OURwo.js";import"./ZIndexLayer-CfpM-rLj.js";import"./types-BaB5y5-3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CqvIZRje.js";import"./symbol-DNxYcXd2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BtDVv38m.js";import"./uniqBy-EEMST3z6.js";import"./iteratee-DqKHEi3O.js";import"./Curve-5XiXyCEh.js";import"./step-kC9Mr0-h.js";import"./ReactUtils-Cn5gX129.js";import"./ActivePoints-B66CzNHK.js";import"./Dot-DAICBiMe.js";import"./RegisterGraphicalItemId-Bn3tPr19.js";import"./ErrorBarContext-BTNYxynC.js";import"./GraphicalItemClipPath-BvycXnEO.js";import"./SetGraphicalItem-B11RgMwt.js";import"./useAnimationId-BZgLvOHt.js";import"./getRadiusAndStrokeWidthFromDot-Ba8qt8Pw.js";import"./ActiveShapeUtils-D80gxDtc.js";import"./Cross-DRBTP43X.js";import"./Rectangle-D0lkTSKk.js";import"./Sector-B-PcoM_O.js";import"./index-twG5rrjJ.js";import"./ChartSizeDimensions-BkxRlTbK.js";import"./OffsetShower-XnxI6Cxg.js";import"./PlotAreaShower-BNnVE1WV.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,Lt as default};
