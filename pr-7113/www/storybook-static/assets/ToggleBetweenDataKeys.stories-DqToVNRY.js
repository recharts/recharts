import{r as n,e as t}from"./iframe-DujSE0UK.js";import{L as p}from"./LineChart-BLzGdaPb.js";import{R as s}from"./arrayEqualityCheck-D8VjMjvf.js";import{C as c}from"./CartesianGrid-DMmCJ2YK.js";import{X as l}from"./XAxis-YY1xwgnu.js";import{Y as d}from"./YAxis-DGH9UPdi.js";import{L as y}from"./Legend-ppfsaZvO.js";import{L as h}from"./Line-D-gcbtsu.js";import{T as u}from"./Tooltip-ZKuMVIqS.js";import{R as g}from"./RechartsHookInspector-CRMB31G9.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CZxyCKqo.js";import"./index-BzWEaTVN.js";import"./immer-DoffRpuJ.js";import"./hooks-BfEZyruk.js";import"./axisSelectors-CplbQtmA.js";import"./d3-scale-DAOxFYCv.js";import"./zIndexSlice-DxmTVpDq.js";import"./renderedTicksSlice-qOFace14.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C8FLn_u-.js";import"./chartDataContext-C-qHRTgP.js";import"./CategoricalChart-H-u-kan4.js";import"./resolveDefaultProps-C48txAh5.js";import"./CartesianAxis-DVd0f2kI.js";import"./Layer-B-nUYb5l.js";import"./Text-qQLvw26P.js";import"./DOMUtils-CiKk1OJG.js";import"./Label-D6PynPvp.js";import"./ZIndexLayer-sSQKP7NE.js";import"./types-D6xVUDWG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-nyT1XPVO.js";import"./symbol-CaRsNxSw.js";import"./step-BqfvS8lo.js";import"./useElementOffset-BLNKdpxK.js";import"./uniqBy-3iDuyky4.js";import"./iteratee-BYf5_rS8.js";import"./ReactUtils-CJKtjJwj.js";import"./ActivePoints-BzgKbyfb.js";import"./Dot-Bc7S1y82.js";import"./RegisterGraphicalItemId-CBH-yQFt.js";import"./ErrorBarContext-D8NP2kg_.js";import"./GraphicalItemClipPath-SL3od_yD.js";import"./SetGraphicalItem-BsRnOhvR.js";import"./useAnimationId-DcYOTGVs.js";import"./getRadiusAndStrokeWidthFromDot-BIQm3Qe0.js";import"./ActiveShapeUtils-CfdmikBA.js";import"./isPlainObject-PvV2F2dX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-SsDZNd-D.js";import"./Trapezoid-C4tWIuQV.js";import"./Sector-FLQA7LtL.js";import"./Curve-BIsIHsFZ.js";import"./Cross-BrrDcBeB.js";import"./index-B_iM8tEy.js";import"./ChartSizeDimensions-DEiQIg5P.js";import"./OffsetShower-CF4VV-Vy.js";import"./PlotAreaShower-CLUz5lpa.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
