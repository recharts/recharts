import{r as p,R as t}from"./iframe-CKDPSKer.js";import{L as n}from"./LineChart-NqRkUPnH.js";import{R as s}from"./zIndexSlice-BPEXBnkz.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CJPTwDVx.js";import{X as d}from"./XAxis-A_9Io6kM.js";import{Y as y}from"./YAxis-aBoPLQiN.js";import{L as u}from"./Legend-Bov7jtG8.js";import{L as h}from"./Line-CTXdPCxP.js";import{T as g}from"./Tooltip-u3y7hq8k.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DXJuSLgb.js";import"./resolveDefaultProps-BHhxWlvh.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BCmNu8mb.js";import"./throttle-BxISGQ-D.js";import"./index-b8m7PcKP.js";import"./index-BCb8LTpu.js";import"./isWellBehavedNumber-B7M1fd8R.js";import"./d3-scale-b7USrreT.js";import"./index-Yn8E1RQt.js";import"./index-YNG8abLs.js";import"./renderedTicksSlice-D_KOvBCE.js";import"./index-CdVjfuR9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-8JudaFqK.js";import"./chartDataContext-BPq1GFdD.js";import"./CategoricalChart-C1cfNrgi.js";import"./CartesianAxis-CjGSghd8.js";import"./Layer-B33l4zSF.js";import"./Text-C2JOwhg7.js";import"./DOMUtils-YKVjc3tQ.js";import"./useId-Ci63Vlud.js";import"./useBackwardsCompatibleTheme-CrbUBK8p.js";import"./Label-dc-yhDIk.js";import"./ZIndexLayer-U3HIU8rZ.js";import"./types-CtnAz4fT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B54QlVgZ.js";import"./symbol-DL-3irLp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D8p3AvLo.js";import"./uniqBy-DYmmQrZx.js";import"./iteratee-DK5B7GVX.js";import"./Curve-Blt-RSy4.js";import"./step-Bgemofkp.js";import"./AnimatedItems-DQZ1vYlx.js";import"./useAnimationId-BJ5AGKlq.js";import"./ActivePoints-BaQ565al.js";import"./Dot-BHyvQM3b.js";import"./RegisterGraphicalItemId-DPP3dtMc.js";import"./ErrorBarContext-DUmIK13m.js";import"./GraphicalItemClipPath-CwqjQ5yI.js";import"./SetGraphicalItem-oK4eoPFb.js";import"./getRadiusAndStrokeWidthFromDot-jgRF4YSW.js";import"./ActiveShapeUtils-Wg41V-yZ.js";import"./useGraphicalItemIdentity-SlGiSA9D.js";import"./Cross-Ef96OJiJ.js";import"./Rectangle-B5okrLSf.js";import"./util-Dxo8gN5i.js";import"./Sector-C0kNvO3e.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
