import{r as n,R as t}from"./iframe-pNwHFSPW.js";import{L as p}from"./LineChart-CoXU5G4C.js";import{R as s}from"./zIndexSlice-DugJPvbP.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dvq79oxD.js";import{X as d}from"./XAxis-KNJz3bpH.js";import{Y as y}from"./YAxis-BhLAmjxa.js";import{L as u}from"./Legend-BqqQDt1e.js";import{L as h}from"./Line-CVgLMECr.js";import{T as g}from"./Tooltip-EUdUlDr7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DLpwYUVG.js";import"./index-BghrGVl-.js";import"./index-C8JT8QJm.js";import"./index-CPy1Xi6O.js";import"./index-PYvYT1WL.js";import"./throttle-B5IaBbRH.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BSoQDh0E.js";import"./resolveDefaultProps-DWmH-vKe.js";import"./isWellBehavedNumber-DROlGubD.js";import"./d3-scale-CYWGushN.js";import"./renderedTicksSlice-oWoSi7uM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DzTN0VjC.js";import"./chartDataContext-DWAHv7Ax.js";import"./CategoricalChart-CpM9_I3K.js";import"./CartesianAxis-Bs05prYp.js";import"./Layer-CjujILu-.js";import"./Text-BBlVElsZ.js";import"./DOMUtils-BNxHxmQg.js";import"./useBackwardsCompatibleTheme-Du48Xyly.js";import"./Label-Bzd_UlcO.js";import"./ZIndexLayer-CUbdM7HK.js";import"./types-DQ3XPolE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DB5gAyjY.js";import"./symbol-CY3ScH1D.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DBzzVBN1.js";import"./uniqBy-CN3CrqJk.js";import"./iteratee-uh7lygO_.js";import"./Curve-5mQV-JEl.js";import"./step-BsFkcvF5.js";import"./AnimatedItems-BZeu0cey.js";import"./useAnimationId-DPXGQUo9.js";import"./ActivePoints-CCq-PEMS.js";import"./Dot-ByamxSDz.js";import"./RegisterGraphicalItemId-Cqk6hpjs.js";import"./ErrorBarContext-DVdtlYtH.js";import"./GraphicalItemClipPath-CPEJp_aS.js";import"./SetGraphicalItem-nLd7ALhr.js";import"./getRadiusAndStrokeWidthFromDot-D0TIAu-Y.js";import"./ActiveShapeUtils-bOSJ1OgY.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BHm6uyaP.js";import"./Rectangle-CkjZyP7u.js";import"./util-Dxo8gN5i.js";import"./Sector-Db4NkV4b.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
