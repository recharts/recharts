import{r as n,e as t}from"./iframe-NOjYqVDf.js";import{L as p}from"./LineChart-DGWHeUew.js";import{R as s}from"./arrayEqualityCheck-CKPvr2Sv.js";import{C as c}from"./CartesianGrid-CbxaQV6M.js";import{X as l}from"./XAxis-gQef3nNh.js";import{Y as d}from"./YAxis-R69UNor-.js";import{L as y}from"./Legend-AKmFhtK1.js";import{L as h}from"./Line-1TE9oZ2s.js";import{T as u}from"./Tooltip-DIQtDjfj.js";import{R as g}from"./RechartsHookInspector-CZuAKH0J.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CYtF97y_.js";import"./hooks-DkToD0vA.js";import"./axisSelectors-_b35tTPj.js";import"./zIndexSlice-Doe50Ljr.js";import"./renderedTicksSlice-CNdDn6G4.js";import"./resolveDefaultProps-B4jksYlp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DlSo8JUa.js";import"./chartDataContext-BCOGOXd9.js";import"./CategoricalChart-BxTZW61W.js";import"./CartesianAxis-DmPLGWaH.js";import"./Layer-C5eEc_aO.js";import"./Text-C7FUzYMA.js";import"./DOMUtils-BMDxU690.js";import"./Label-DSmhxnyp.js";import"./ZIndexLayer-CmnykYAa.js";import"./types-Cdrp97aK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CYsc0tYe.js";import"./Curve-DR3tx7PX.js";import"./useElementOffset-DoeCbbnP.js";import"./iteratee-Bgpf0Y4J.js";import"./ReactUtils-B9O68L3J.js";import"./ActivePoints-CQfp67or.js";import"./Dot-B8-r0lP5.js";import"./RegisterGraphicalItemId-YVRRFCp2.js";import"./ErrorBarContext-BzRoxPBz.js";import"./GraphicalItemClipPath-C6swNonr.js";import"./SetGraphicalItem-BeKk8_xu.js";import"./useAnimationId-DyWolGb_.js";import"./getRadiusAndStrokeWidthFromDot-Cr1dXyad.js";import"./ActiveShapeUtils-BNzKmu3G.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B01634cJ.js";import"./Trapezoid-BprYBPWk.js";import"./Sector-Bz2V5crH.js";import"./Cross-DZ-7VkVV.js";import"./index-Ioy1DO1u.js";import"./ChartSizeDimensions-CVj6kL6N.js";import"./OffsetShower-BtzaIgV3.js";import"./PlotAreaShower-BDFeD2A4.js";const Kt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,ft as __namedExportsOrder,Kt as default};
