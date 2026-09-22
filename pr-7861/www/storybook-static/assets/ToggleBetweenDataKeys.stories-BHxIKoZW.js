import{r as p,R as t}from"./iframe-Bnv6kU7L.js";import{L as n}from"./LineChart-CjHOueXW.js";import{R as s}from"./zIndexSlice-DX-eN-rE.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DrNrDduO.js";import{X as d}from"./XAxis-DBNaBuJh.js";import{Y as y}from"./YAxis-I5CDR0a7.js";import{L as u}from"./Legend-CbXtisxS.js";import{L as h}from"./Line-D6sVYIrE.js";import{T as g}from"./Tooltip-BrDTZwiK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BdebKPLC.js";import"./resolveDefaultProps-C4JEpLWp.js";import"./get-C2VjdU0L.js";import"./axisSelectors-W-alhPkw.js";import"./throttle-C8n004OX.js";import"./index-6B8fwti2.js";import"./index-B1qZkGH5.js";import"./isWellBehavedNumber-p1Jk9e7e.js";import"./d3-scale-BHEdKRtF.js";import"./index-DLmKm2EF.js";import"./index-C7lLa1F-.js";import"./renderedTicksSlice-B5DhdENT.js";import"./index-DoLpWonQ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-4rkSr6qB.js";import"./chartDataContext-DQDeMryS.js";import"./CategoricalChart-a21GUZij.js";import"./CartesianAxis-BurxlCSY.js";import"./Layer-LCeVZLuX.js";import"./Text--hmlT8ZH.js";import"./DOMUtils-CsnJkvN_.js";import"./useId-6CZAolK0.js";import"./useBackwardsCompatibleTheme-C_K8id13.js";import"./Label-IhJ6Pxyk.js";import"./ZIndexLayer-BRXf-lni.js";import"./types-CI78TRyx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DjB5nWGx.js";import"./symbol-BzvQQSq9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BltoDhzS.js";import"./uniqBy-CZFb8bra.js";import"./iteratee-CP0Pza9x.js";import"./Curve-CLFCklxA.js";import"./step-DsteWZ2Z.js";import"./AnimatedItems-BMX-ziY5.js";import"./useAnimationId-DYSRVMST.js";import"./ActivePoints-DPnTwfCa.js";import"./Dot-CcU1d5Kn.js";import"./RegisterGraphicalItemId-DzNK_j43.js";import"./ErrorBarContext-B1AHLu2R.js";import"./GraphicalItemClipPath-H0CINiNQ.js";import"./SetGraphicalItem-Gy1IhQNd.js";import"./getRadiusAndStrokeWidthFromDot-CAEUp3rE.js";import"./ActiveShapeUtils-BfWUUsmh.js";import"./useGraphicalItemIdentity-CQh8XILo.js";import"./Cross-60F11PdV.js";import"./Rectangle-CCZI10F2.js";import"./util-Dxo8gN5i.js";import"./Sector-C6wVCyaa.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
