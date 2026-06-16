import{r as n,R as t}from"./iframe-DmhIhH2M.js";import{L as p}from"./LineChart-2nPrNSar.js";import{R as s}from"./zIndexSlice-DeBpIagA.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BJf1gxhT.js";import{X as d}from"./XAxis-CY-yJKaB.js";import{Y as y}from"./YAxis-Bd-9gvNF.js";import{L as u}from"./Legend-FVCMzRGs.js";import{L as h}from"./Line-D1lDVI0J.js";import{T as g}from"./Tooltip-CScVRDo5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bp3OJDnk.js";import"./index-DVATRPgd.js";import"./index-DTLQy6FQ.js";import"./index-jeKHcbLZ.js";import"./index-DoUdCFad.js";import"./immer-lqUHKS7P.js";import"./get-BMOKRRSC.js";import"./renderedTicksSlice-ChRjHL_p.js";import"./axisSelectors-BcE8uUaD.js";import"./d3-scale-BlfVJ3Lp.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-Bb5qdflA.js";import"./isWellBehavedNumber-yi49kod_.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BNQnxap5.js";import"./chartDataContext-Bz86G8Ko.js";import"./CategoricalChart-Be8j81vN.js";import"./CartesianAxis-C8QhC4vv.js";import"./Layer-BQ4TD7AW.js";import"./Text-DpOGyDW1.js";import"./DOMUtils-qv8kyUnk.js";import"./Label-C1lSOaos.js";import"./ZIndexLayer-qAObD_uq.js";import"./types-ChCyCTKP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-bmVrm1PP.js";import"./symbol-DzNzzMDl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CH7D-mqI.js";import"./uniqBy-CFMs929K.js";import"./iteratee-GpL_6Bp3.js";import"./Curve-CUt78Byo.js";import"./step-Cfvx5huc.js";import"./AnimatedItems-D_A-W6sA.js";import"./useAnimationId-CIds5Px0.js";import"./ActivePoints-Bn_C34jU.js";import"./Dot-D4RDD7gw.js";import"./RegisterGraphicalItemId-qPPfux8b.js";import"./ErrorBarContext-3q49-f4F.js";import"./GraphicalItemClipPath-CjnHXIjf.js";import"./SetGraphicalItem-BDK57120.js";import"./getRadiusAndStrokeWidthFromDot-C1-mcmXd.js";import"./ActiveShapeUtils-D7yUxD2X.js";import"./Cross-6N8YKHWm.js";import"./Rectangle-BUGLdKb8.js";import"./Sector-D-2Yrtfy.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
