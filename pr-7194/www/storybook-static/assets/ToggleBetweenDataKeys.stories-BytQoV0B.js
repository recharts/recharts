import{r as n,e as t}from"./iframe-C4ae8FtK.js";import{L as p}from"./LineChart-5meVzTJp.js";import{R as s}from"./arrayEqualityCheck-lfrA5Bq2.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-ANQ7z1Ly.js";import{X as d}from"./XAxis-D-4HgMe7.js";import{Y as y}from"./YAxis-BwAcKPAC.js";import{L as h}from"./Legend-BdA3SfnJ.js";import{L as u}from"./Line-B3yovMU-.js";import{T as g}from"./Tooltip-DoSmRs3p.js";import{R as K}from"./RechartsHookInspector-BUlLV83W.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-tTigpQ5n.js";import"./index-BAPPw7tY.js";import"./immer-JFltD55q.js";import"./hooks-CXUA9yEr.js";import"./axisSelectors-DobMcDEZ.js";import"./d3-scale-Bqdags1w.js";import"./zIndexSlice-CgotL-NA.js";import"./renderedTicksSlice-Cj9ny3Ly.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DasFBtUo.js";import"./chartDataContext-DPN8Z90E.js";import"./CategoricalChart-D917O6MX.js";import"./resolveDefaultProps-CeAK8DLj.js";import"./CartesianAxis-2J4hk8WJ.js";import"./Layer-N4FzZ7QF.js";import"./Text-CIi3nsya.js";import"./DOMUtils-Ds2y4XHZ.js";import"./Label-DBvzFRUp.js";import"./ZIndexLayer-Cm0MOpfC.js";import"./types-C9HDIMgp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CuAJ11rV.js";import"./symbol-BxTsEubx.js";import"./step-ycAKK8HO.js";import"./useElementOffset-CieEfFFN.js";import"./uniqBy-CvZhzRu8.js";import"./iteratee-BegIMKsU.js";import"./ReactUtils-DyI5Xl8b.js";import"./ActivePoints-uVv69XEr.js";import"./Dot-RR5mO9JR.js";import"./RegisterGraphicalItemId-CypQFo50.js";import"./ErrorBarContext-BJJjhQzu.js";import"./GraphicalItemClipPath-DrPrMemX.js";import"./SetGraphicalItem-C5fi9q2Q.js";import"./useAnimationId-DYnPgr1F.js";import"./getRadiusAndStrokeWidthFromDot-D5WZgZMm.js";import"./ActiveShapeUtils-CpUyToQw.js";import"./isPlainObject-NFlPGfOx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-36uwRJjR.js";import"./Trapezoid-PDWBfkS4.js";import"./Sector-CiJRQ-kP.js";import"./Curve-DBFjwflq.js";import"./Cross-akEj_rhy.js";import"./index-DYmzarGE.js";import"./ChartSizeDimensions-DrJNk4HA.js";import"./OffsetShower-CscpLTCd.js";import"./PlotAreaShower-LJKqGtZ8.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
