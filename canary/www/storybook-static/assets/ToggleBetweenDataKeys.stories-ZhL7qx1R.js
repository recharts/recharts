import{r as n,e as t}from"./iframe-Isp5DByQ.js";import{L as p}from"./LineChart-CmPNWGi8.js";import{R as s}from"./arrayEqualityCheck-DcSZTGrK.js";import{C as c}from"./CartesianGrid-B1FnrzVO.js";import{X as l}from"./XAxis-DbS-5SMi.js";import{Y as d}from"./YAxis-Earp8u6b.js";import{L as y}from"./Legend-DLS_raL_.js";import{L as h}from"./Line-iXWiESHH.js";import{T as u}from"./Tooltip-B72ehgGt.js";import{R as g}from"./RechartsHookInspector-BcUB3q5g.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DJiHoXCP.js";import"./hooks-CPGRTKzd.js";import"./axisSelectors-DKneri-4.js";import"./zIndexSlice-Kir1u83y.js";import"./resolveDefaultProps-CktQcWs0.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ad36dtSp.js";import"./chartDataContext-CCLXwYwB.js";import"./CategoricalChart-Cd3v81B-.js";import"./CartesianAxis-CtKR5av8.js";import"./Layer-BzTi7EcX.js";import"./Text-B3hJnr-O.js";import"./DOMUtils-DDV6GWvc.js";import"./Label-BIeSPvzh.js";import"./ZIndexLayer-B7yLevK6.js";import"./types-BUXZfUBK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CRejWEVT.js";import"./Curve-BVujXptJ.js";import"./useElementOffset-CNEWPoc2.js";import"./iteratee-BCfRLSuG.js";import"./ReactUtils-BG9wPH-d.js";import"./ActivePoints-CEokwuvu.js";import"./Dot-CxDulsX9.js";import"./RegisterGraphicalItemId-C0G4e2t3.js";import"./ErrorBarContext-CqPa7Fo7.js";import"./GraphicalItemClipPath-DhI7dbsH.js";import"./SetGraphicalItem-CEyRhP7A.js";import"./useAnimationId-BH36Yv-4.js";import"./getRadiusAndStrokeWidthFromDot-DQQ1a1Ar.js";import"./ActiveShapeUtils-Ch4UNesV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMTNFeQ6.js";import"./Trapezoid-BhaWvkYr.js";import"./Sector-DXk8yocg.js";import"./Cross-DvyKYPAa.js";import"./index-DhR5oTPc.js";import"./ChartSizeDimensions-CbTBC7na.js";import"./OffsetShower-34zfbzoW.js";import"./PlotAreaShower-DPXygzPM.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
