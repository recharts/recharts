import{r as n,e as t}from"./iframe-CLIMsGOZ.js";import{L as p}from"./LineChart-BD8zBV7g.js";import{R as s}from"./arrayEqualityCheck-CbYFkYA0.js";import{C as c}from"./CartesianGrid-EVwWbDqI.js";import{X as l}from"./XAxis-D0rBjGgi.js";import{Y as d}from"./YAxis-BCedXT45.js";import{L as y}from"./Legend-CAXkYAPU.js";import{L as h}from"./Line-CzJhKYEj.js";import{T as u}from"./Tooltip-nbxtuPQY.js";import{R as g}from"./RechartsHookInspector-B158dvGO.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-lPK7Cxev.js";import"./hooks-DenE5nGN.js";import"./axisSelectors-GOM-QLi6.js";import"./zIndexSlice-DazYr2Iy.js";import"./resolveDefaultProps-E8mWkwf6.js";import"./PolarUtils-BIAYT_Jm.js";import"./CartesianChart-q3xsLMrE.js";import"./chartDataContext-B4asjYes.js";import"./CategoricalChart-DAMhxPe3.js";import"./CartesianAxis-tT7FqCIW.js";import"./Layer-l9L2Sb8o.js";import"./Text-BeJ5iM47.js";import"./DOMUtils-BnxK2rS8.js";import"./Label-QzDxpC8q.js";import"./ZIndexLayer-5xiPbIim.js";import"./types-HWBumAOZ.js";import"./Symbols-DbV1O1CF.js";import"./Curve-DXQteT8k.js";import"./useElementOffset-CLqe_5PL.js";import"./iteratee-Bt0H2n0P.js";import"./ReactUtils-Bk0OFjED.js";import"./ActivePoints-CDJdQAvR.js";import"./Dot-TT6qKL70.js";import"./RegisterGraphicalItemId-46GsKK8-.js";import"./ErrorBarContext-D97KkegB.js";import"./GraphicalItemClipPath-D_8sBR8P.js";import"./SetGraphicalItem-C8e1XdZ2.js";import"./useAnimationId-wMl1lWMr.js";import"./getRadiusAndStrokeWidthFromDot-B1AObu-M.js";import"./ActiveShapeUtils-YEQ3f73b.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-JG6TvpVB.js";import"./Trapezoid-D79jjH6v.js";import"./Sector-C08coEZ4.js";import"./Cross-AXdduUCv.js";import"./index-8YxDhDRV.js";import"./ChartSizeDimensions-4XerZwXh.js";import"./OffsetShower-CTodD9i0.js";import"./PlotAreaShower-BoV_Aqat.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};
