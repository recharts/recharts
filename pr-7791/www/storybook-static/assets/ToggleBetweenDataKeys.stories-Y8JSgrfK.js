import{r as p,R as t}from"./iframe-C3cMgs7N.js";import{L as n}from"./LineChart-Db6zzajj.js";import{R as s}from"./zIndexSlice-D-L1krEw.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-SbwHlYTA.js";import{X as d}from"./XAxis-FEXGRCPo.js";import{Y as y}from"./YAxis-CPQEML-M.js";import{L as u}from"./Legend-bmgZmqHj.js";import{L as h}from"./Line-qJZBDGuF.js";import{T as g}from"./Tooltip-armKHNsC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BBL8LSCF.js";import"./resolveDefaultProps-VIGlyQ4Q.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CyFo4akS.js";import"./throttle-CwKbnzuB.js";import"./index-mPjB9LZ5.js";import"./index-DWDQXKDL.js";import"./isWellBehavedNumber-loxwPj_L.js";import"./d3-scale-D9HAsSWg.js";import"./index-iS8UOd73.js";import"./index-CbpSVjN5.js";import"./renderedTicksSlice-BLxMgK4j.js";import"./index-CK2o4ASw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BYHp5epD.js";import"./chartDataContext-CUGiPJA1.js";import"./CategoricalChart-BrdbHA9J.js";import"./CartesianAxis-Cm_mWvUj.js";import"./Layer-B4ssOgoe.js";import"./Text-BJKUimah.js";import"./DOMUtils-DEPBoe7u.js";import"./useId-B00C84E0.js";import"./useBackwardsCompatibleTheme-yxpwTzAk.js";import"./Label-p42oyH6O.js";import"./ZIndexLayer-Beq1j20z.js";import"./types-BRZWQnVt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DFH8MDwp.js";import"./symbol-Cl7JEJ3q.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C6z2yXVE.js";import"./uniqBy-D9evTCTx.js";import"./iteratee-DQXLPY2T.js";import"./Curve-Cd2PH3uW.js";import"./step-BchzuBRK.js";import"./AnimatedItems-CeXZD4iR.js";import"./useAnimationId-Bsfqf9JH.js";import"./ActivePoints-CeVGeC-b.js";import"./Dot-DHWsLk6I.js";import"./RegisterGraphicalItemId-Ce557wgI.js";import"./ErrorBarContext-Bcyk1pto.js";import"./GraphicalItemClipPath-6iwmqxiy.js";import"./SetGraphicalItem-NnzstWhO.js";import"./getRadiusAndStrokeWidthFromDot-Bp5N-w6q.js";import"./ActiveShapeUtils-CBqTe_nx.js";import"./useGraphicalItemIdentity-BrYniqkC.js";import"./Cross-C79SN9P2.js";import"./Rectangle-CfdBkyVH.js";import"./util-Dxo8gN5i.js";import"./Sector-31CjT2g4.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
