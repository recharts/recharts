import{r as n,R as t}from"./iframe-CgifVdGo.js";import{L as p}from"./LineChart-Bdkffcny.js";import{R as s}from"./zIndexSlice-cYNAtEFZ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Chud-6bi.js";import{X as d}from"./XAxis-CZyFu1IP.js";import{Y as y}from"./YAxis-CdCViLx5.js";import{L as u}from"./Legend-7_W2X7gA.js";import{L as h}from"./Line-Bk8sgUVU.js";import{T as g}from"./Tooltip-CqjX73dw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bdtf4nFv.js";import"./index-B-WSnDkr.js";import"./index-BIPnoVIq.js";import"./index-CE-jOOb9.js";import"./index-2TSMvrpE.js";import"./throttle-RNDoIp5v.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CdxlE0u2.js";import"./axisSelectors-BoKC2N9p.js";import"./resolveDefaultProps-BWqJsMaX.js";import"./isWellBehavedNumber-B5I1Y8ko.js";import"./d3-scale-B4rm30Tj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-5X0OU6Ae.js";import"./chartDataContext-Cgkpv-Wp.js";import"./CategoricalChart-gWPq6G-r.js";import"./CartesianAxis-5D6mywdN.js";import"./Layer-CeyNxq54.js";import"./Text-CP2PjM28.js";import"./DOMUtils-D8x8v_7W.js";import"./Label-TzQ7qbgp.js";import"./ZIndexLayer-D9Ef8fDH.js";import"./types-IwSvkxMz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Cv5yDpJ-.js";import"./symbol-DQfiD1hp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ddd5eBYU.js";import"./uniqBy-B-PlV6wf.js";import"./iteratee-Cmxxp19p.js";import"./Curve-kzqc65C_.js";import"./step-BTn_xVWj.js";import"./AnimatedItems-wyY7R1ar.js";import"./useAnimationId-B2JL6a3u.js";import"./ActivePoints-CRIrUZTw.js";import"./Dot-ki06ENMH.js";import"./RegisterGraphicalItemId-DWqGyRZG.js";import"./ErrorBarContext-CK5Inlk3.js";import"./GraphicalItemClipPath-ChEyBJAa.js";import"./SetGraphicalItem-DiTEFY4D.js";import"./getRadiusAndStrokeWidthFromDot-CVuDAoNN.js";import"./ActiveShapeUtils-PZHl54QD.js";import"./Cross--7zgNnvK.js";import"./Rectangle-0uJ_DBQ4.js";import"./util-Dxo8gN5i.js";import"./Sector-DZQjM1rK.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
