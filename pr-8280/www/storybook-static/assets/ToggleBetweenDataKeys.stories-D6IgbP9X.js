import{r as p,R as t}from"./iframe-BU2uaiQT.js";import{L as n}from"./LineChart-DxccN4nX.js";import{R as s}from"./zIndexSlice-B7Ww3qol.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DTrh7iQN.js";import{X as d}from"./XAxis-BnGZclY4.js";import{Y as y}from"./YAxis-D8lRSYCy.js";import{L as u}from"./Legend-BRb4WwmG.js";import{L as h}from"./Line-D-cMfYZE.js";import{T as g}from"./Tooltip-Di5rd_WR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DJs7SFO5.js";import"./resolveDefaultProps-C2wLywwD.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D_lL4SFu.js";import"./throttle-CcBx4b7F.js";import"./index-DgFA6NAr.js";import"./index-BrUaXQP2.js";import"./polarAxisSelectors-NZrfm7K-.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmCizgpV.js";import"./index-KnqMoSVw.js";import"./index-Y51TWOSn.js";import"./renderedTicksSlice-CbO7RmCe.js";import"./index-BmKufkZC.js";import"./fillDefinitions-CvAEkStr.js";import"./CartesianChart-C6-Tr1WN.js";import"./chartDataContext-C2FLfdfd.js";import"./CategoricalChart-LCCfHS5i.js";import"./CartesianAxis-CdjY0Szh.js";import"./Layer-Bk2JkGA1.js";import"./Text-DcepGaW8.js";import"./ZIndexLayer-DWfXGHkj.js";import"./Label-CM1LVEBq.js";import"./types-BGeljdCR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D3wHF1gQ.js";import"./symbol-4tNLkD_c.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BuXfzakd.js";import"./uniqBy-BDVNLrho.js";import"./iteratee-CgzDSGu2.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-EXJcUNWf.js";import"./Curve-CAcSf3Dw.js";import"./step-B9D1ky0j.js";import"./dataEntryStyles-BQSK-138.js";import"./ActivePoints-BVY4H7tc.js";import"./Dot-tdH7rvCo.js";import"./activeStyles-C3KdIcht.js";import"./useAnimationId-DGhOgRI0.js";import"./ErrorBarContext-CIErDLim.js";import"./SetGraphicalItem-DIE9SpoX.js";import"./ActiveShapeUtils-BmdPhGHL.js";import"./useEffectiveDataKey-u5bBQA4i.js";import"./Cross-CmIGzPmv.js";import"./Rectangle-uMWe5cKm.js";import"./util-Dxo8gN5i.js";import"./Sector-PvLx7sIM.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
