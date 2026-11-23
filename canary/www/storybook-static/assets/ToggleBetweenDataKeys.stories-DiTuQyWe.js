import{r as p,R as t}from"./iframe-Bo9DV_RF.js";import{L as n}from"./LineChart-CVAH-tM4.js";import{R as s}from"./zIndexSlice-ChGxP5I9.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Wpeq6wtu.js";import{X as d}from"./XAxis-hzMML8e7.js";import{Y as y}from"./YAxis-CK1muElb.js";import{L as u}from"./Legend-ujCCnnlq.js";import{L as h}from"./Line-A1JFBNP7.js";import{T as g}from"./Tooltip-CgTtgD3h.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D6SFyLdk.js";import"./resolveDefaultProps-D7E8wIuA.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BUIYbOzk.js";import"./throttle-CaIo9_rk.js";import"./index-Bm5Sdcd_.js";import"./index-BpsrDHro.js";import"./polarAxisSelectors-DgJeannD.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BoInTKj4.js";import"./index-Dj5W-yVu.js";import"./index-PvdQicqP.js";import"./renderedTicksSlice-BwP3mXWs.js";import"./index-9iDWVYtT.js";import"./fillDefinitions-CP3VVI6H.js";import"./CartesianChart-8vtQlYBx.js";import"./chartDataContext-PPXpQSNc.js";import"./CategoricalChart-BdPgBmoC.js";import"./CartesianAxis-_PdJmc1T.js";import"./Layer-C6lb2zxM.js";import"./Text-DQn8LN2h.js";import"./ZIndexLayer-D-AkOEB1.js";import"./Label-BywaPoTf.js";import"./types-DltK9JsS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CudC3e00.js";import"./symbol-4lof-nfP.js";import"./path-BBMZd4YL.js";import"./useElementOffset-UcOt8HAd.js";import"./uniqBy-Dalz8XIr.js";import"./iteratee-CXGy7xEC.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CqTAMhL0.js";import"./Curve-Dm-GvmWp.js";import"./step-5knHZEdX.js";import"./dataEntryStyles-DVGQZ3dA.js";import"./ActivePoints-CviyBCS_.js";import"./Dot-DxKRRRBk.js";import"./activeStyles-mw-DKPXy.js";import"./useAnimationId-TvJ5tZp1.js";import"./ErrorBarContext-BobbhAG8.js";import"./SetGraphicalItem-BA1U1Prk.js";import"./ActiveShapeUtils-Cnqk-jZd.js";import"./useEffectiveDataKey-Er14ucR5.js";import"./Cross-DKdlw8Q0.js";import"./Rectangle-RS1J8Vgk.js";import"./util-Dxo8gN5i.js";import"./Sector-DgCGLhDo.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
