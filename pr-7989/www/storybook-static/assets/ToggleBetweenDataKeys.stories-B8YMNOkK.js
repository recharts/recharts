import{r as p,R as t}from"./iframe-DjRBpX_P.js";import{L as n}from"./LineChart-BX_dDeTp.js";import{R as s}from"./zIndexSlice-iVSWW5BV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dfbvt5wl.js";import{X as d}from"./XAxis-Y0oUf3sW.js";import{Y as y}from"./YAxis-B51h7pP8.js";import{L as u}from"./Legend-BLRADEwo.js";import{L as h}from"./Line-Cy3PGKP5.js";import{T as g}from"./Tooltip-qAbEtBN7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ckb52kl2.js";import"./resolveDefaultProps-BjSk0Y1m.js";import"./get-C2VjdU0L.js";import"./axisSelectors-D79DWiWx.js";import"./throttle-DnOef0ju.js";import"./index-DZq52GAk.js";import"./index-CzfBY83M.js";import"./isWellBehavedNumber-CpHNoBah.js";import"./d3-scale-FJpOhRlp.js";import"./index-C-_IQ3AX.js";import"./index-ypDDL202.js";import"./renderedTicksSlice-FU13a2Gq.js";import"./index-CvqQYFRa.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DZEnNXBj.js";import"./chartDataContext-BtLlHBCM.js";import"./CategoricalChart-CAmdUyZx.js";import"./CartesianAxis-D3pH7M3P.js";import"./Layer-C9YefTas.js";import"./Text-yVr7Mz0m.js";import"./pageBackground-GeoRz0Dn.js";import"./useId-BfPQ7TvO.js";import"./useBackwardsCompatibleTheme-C4WhBG8E.js";import"./Label-CnRbgzX5.js";import"./ZIndexLayer-Dbtf4y40.js";import"./types-BdVZogP6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CNnoj2D4.js";import"./symbol-DsS9qHk8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CNPJvaJQ.js";import"./uniqBy-BbsWZnIf.js";import"./iteratee-aih5jQ4Q.js";import"./Curve-CdVM2yHm.js";import"./step-CX_rIxxT.js";import"./activeStyles-D2vPCQTd.js";import"./useAnimationId-DPppjou0.js";import"./dataEntryStyles-CrSg03Wv.js";import"./ActivePoints-CPY1nzmN.js";import"./Dot-C0cfWCUu.js";import"./ErrorBarContext-4DLGaDei.js";import"./GraphicalItemClipPath-Dm-UOdIc.js";import"./SetGraphicalItem-BKY1gJK1.js";import"./getRadiusAndStrokeWidthFromDot-CkoSzgY_.js";import"./ActiveShapeUtils-tgtgWXQ1.js";import"./useEffectiveDataKey-Tusm1QhA.js";import"./Cross-2f4ua_UC.js";import"./Rectangle-iHdnnD4v.js";import"./util-Dxo8gN5i.js";import"./Sector-CHux40iq.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
