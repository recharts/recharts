import{r as p,R as t}from"./iframe-UgRt0vcp.js";import{L as n}from"./LineChart-DMQN47zq.js";import{R as s}from"./zIndexSlice-B7qjUnDG.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CLHuENG3.js";import{X as d}from"./XAxis-4W0ht619.js";import{Y as y}from"./YAxis-CJZXqV3k.js";import{L as u}from"./Legend-SEzvkhHd.js";import{L as h}from"./Line-Dipve1CO.js";import{T as g}from"./Tooltip-DArRYZES.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-EuqqM12a.js";import"./resolveDefaultProps-BXcWlbHp.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DIh-l85l.js";import"./throttle-DuwfTuib.js";import"./index-Bv-jl5LW.js";import"./index-Bvm9MNt8.js";import"./isWellBehavedNumber-ysV-_8Aq.js";import"./d3-scale-Cn-9twYV.js";import"./index-BUuQQxxl.js";import"./index-BtCdhKy_.js";import"./renderedTicksSlice-rspC5CNs.js";import"./index-NRyuBWjq.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DoGcO1A-.js";import"./chartDataContext-BKXebmD7.js";import"./CategoricalChart-BbYkYnOT.js";import"./CartesianAxis-RT1RuzF2.js";import"./Layer-C1js-4J0.js";import"./Text-CIcS1Cht.js";import"./DOMUtils-hZ-h7K-C.js";import"./useId-nYKyJk56.js";import"./useBackwardsCompatibleTheme-DJK5Z4IB.js";import"./Label-Ct2bC8Rh.js";import"./ZIndexLayer-A1V94IPq.js";import"./types-BQX4mfvu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DD6r1Zt-.js";import"./symbol-C00MPWxj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BV51zAtA.js";import"./uniqBy-C0AvOEm-.js";import"./iteratee-BGbr-Qh6.js";import"./Curve-BaJYpKaM.js";import"./step-BAtXOj-E.js";import"./AnimatedItems-BpS1OD2e.js";import"./useAnimationId-DPVBY7S8.js";import"./ActivePoints-BWaxPFAB.js";import"./Dot-DphG9sPw.js";import"./RegisterGraphicalItemId-Cu5milgY.js";import"./ErrorBarContext-g5uku85c.js";import"./GraphicalItemClipPath-C-zprDgr.js";import"./SetGraphicalItem-1hTkIljj.js";import"./getRadiusAndStrokeWidthFromDot-CKTCh4hG.js";import"./ActiveShapeUtils-B_uanDrb.js";import"./useGraphicalItemIdentity-DyOG4GgF.js";import"./Cross-BOwfVrty.js";import"./Rectangle-f5SbKkB1.js";import"./util-Dxo8gN5i.js";import"./Sector-ySzx3TZd.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
