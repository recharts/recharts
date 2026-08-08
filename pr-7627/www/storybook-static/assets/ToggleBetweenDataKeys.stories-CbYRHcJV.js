import{r as n,R as t}from"./iframe-BYCrCSPO.js";import{L as p}from"./LineChart-SPLgLygw.js";import{R as s}from"./zIndexSlice-DfD_-yb8.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DfZlxPOy.js";import{X as d}from"./XAxis-3U1NuGne.js";import{Y as y}from"./YAxis-BHhfAWGr.js";import{L as u}from"./Legend-Chf9Y7Al.js";import{L as h}from"./Line-I8NQ2nSn.js";import{T as g}from"./Tooltip-DXG5nMfp.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-1VDCfeR5.js";import"./index-B9LnnU9V.js";import"./index-CO8tfkky.js";import"./index-CduSCjJO.js";import"./index-DeTARG9l.js";import"./throttle-CwGaa8bA.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DCnkJbPP.js";import"./resolveDefaultProps-C_hnhA8j.js";import"./isWellBehavedNumber-CtO4Dltx.js";import"./d3-scale-CNobyPqZ.js";import"./renderedTicksSlice-D3LgmkWg.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D_hO4lZa.js";import"./chartDataContext-BmXIjLQW.js";import"./CategoricalChart-DdsYRdkY.js";import"./CartesianAxis-DLhz-nrZ.js";import"./Layer-B3NuQ3iV.js";import"./Text-C7UGFNRC.js";import"./DOMUtils-_2tJTcuL.js";import"./Label-KQ9JDhJq.js";import"./ZIndexLayer-DS2x7pWW.js";import"./types-FnkeMo1L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BUhvh7zS.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CoPXceqk.js";import"./symbol-CLcBLlqF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DAm24c5a.js";import"./uniqBy-C0-aqpga.js";import"./iteratee-C5dESqmm.js";import"./Curve-BSapy3_T.js";import"./step-C66rBaoI.js";import"./AnimatedItems-B1rFvs0f.js";import"./useAnimationId-BrMFsthS.js";import"./ActivePoints-BBy5laGi.js";import"./Dot-DcT0usF1.js";import"./RegisterGraphicalItemId-QO0ldivF.js";import"./ErrorBarContext-P2qv3dNI.js";import"./GraphicalItemClipPath-Co8e0UKg.js";import"./SetGraphicalItem-BOoa7F9Y.js";import"./getRadiusAndStrokeWidthFromDot-RcpXGE2w.js";import"./ActiveShapeUtils-DetheFMa.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-6xW5Htru.js";import"./Rectangle-C2QxPGJo.js";import"./util-Dxo8gN5i.js";import"./Sector-CqJZCm5-.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
