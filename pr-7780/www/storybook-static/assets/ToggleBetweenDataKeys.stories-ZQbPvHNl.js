import{r as p,R as t}from"./iframe-CrjMmK-P.js";import{L as n}from"./LineChart-t4VMNNkZ.js";import{R as s}from"./zIndexSlice-BjJGmtkk.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C7-EdVI_.js";import{X as d}from"./XAxis-Bf99Djp-.js";import{Y as y}from"./YAxis-WGtSziYB.js";import{L as u}from"./Legend-BTJZwqGx.js";import{L as h}from"./Line-BdPUp7B4.js";import{T as g}from"./Tooltip-CPrKDQ9h.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-W15Lm7G0.js";import"./resolveDefaultProps-1lRPudDL.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CArdhpNf.js";import"./throttle-DvPRoUwa.js";import"./index-C29X7Fc2.js";import"./index-BDweFuqO.js";import"./isWellBehavedNumber-i-P4IxnU.js";import"./d3-scale-60bYpT2W.js";import"./index-DhUbeUHh.js";import"./index-C0KmE10p.js";import"./renderedTicksSlice-CoKKbA57.js";import"./index-p1bk8TMl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CtX-pqzv.js";import"./chartDataContext-rtr64WFG.js";import"./CategoricalChart-RhdZ5xjE.js";import"./CartesianAxis-B8LyCo9q.js";import"./Layer-D9-s7BIj.js";import"./Text-CvoG-yND.js";import"./DOMUtils-BLhe2-Wn.js";import"./useId-BEuvre-A.js";import"./useBackwardsCompatibleTheme-C_kcEgOz.js";import"./Label-BUscAhBU.js";import"./ZIndexLayer-BnhEIQdT.js";import"./types-DQIGWyvO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Cq-tJzaV.js";import"./symbol-VRPjbWYE.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D3QBqJsK.js";import"./uniqBy-BOWmp87N.js";import"./iteratee-5CO9aB2p.js";import"./Curve-DmmzRQeA.js";import"./step-XIk4Qxhk.js";import"./AnimatedItems-DhhQShtD.js";import"./useAnimationId-yNh7qZi1.js";import"./ActivePoints-l6QKzYun.js";import"./Dot-BglkAryw.js";import"./RegisterGraphicalItemId-BtD1DcTG.js";import"./ErrorBarContext-DVTSO5_6.js";import"./GraphicalItemClipPath-d2m1y1AJ.js";import"./SetGraphicalItem-Cz1BmFYo.js";import"./getRadiusAndStrokeWidthFromDot-BZvBgzm6.js";import"./ActiveShapeUtils-DNRW1wio.js";import"./useGraphicalItemIdentity-D4eInQUL.js";import"./Cross-CcupEozg.js";import"./Rectangle-4U1uwwED.js";import"./util-Dxo8gN5i.js";import"./Sector-DVSg-Fqk.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
