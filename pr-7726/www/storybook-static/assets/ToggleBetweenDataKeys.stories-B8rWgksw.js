import{r as n,R as t}from"./iframe-BKk44VOT.js";import{L as p}from"./LineChart-CD5nW8Y-.js";import{R as s}from"./zIndexSlice-BjWKOBUm.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CGCqXQ0o.js";import{X as d}from"./XAxis-2cJ7kaI0.js";import{Y as y}from"./YAxis-DPFxody7.js";import{L as u}from"./Legend-C8H3bsT4.js";import{L as h}from"./Line-BvewL5vb.js";import{T as g}from"./Tooltip-BgcLf1vL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CVGPHljF.js";import"./resolveDefaultProps-CzfJP_I-.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BiJJw6in.js";import"./throttle-BdnDrpLZ.js";import"./index-BTZJ4Yum.js";import"./index-D9YNF8fg.js";import"./isWellBehavedNumber-BPjqRkxS.js";import"./d3-scale-rR_TqiZM.js";import"./index-BjsXzqOC.js";import"./index-CvfG5lr1.js";import"./renderedTicksSlice-BYjFoixx.js";import"./index-TeAPTJXJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DS36pb4k.js";import"./chartDataContext-O1WSQyDv.js";import"./CategoricalChart-C8xt7Kx0.js";import"./CartesianAxis-D8EUtvdL.js";import"./Layer-6OjQkfig.js";import"./Text-BtR9CUIB.js";import"./DOMUtils-Dil5o6Lr.js";import"./useId-hvzCLp2v.js";import"./useBackwardsCompatibleTheme-VDOEj1kR.js";import"./Label-BPr6N2Q-.js";import"./ZIndexLayer-wqOp9Wsh.js";import"./types-CjNR6i_K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BAM533G2.js";import"./symbol-BvEjq6Qb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CnoXh3Na.js";import"./uniqBy-CnjkiirN.js";import"./iteratee-Dk_Av1Hh.js";import"./Curve-Bl3ua7_T.js";import"./step-Dtmfv3UM.js";import"./AnimatedItems-_iMVf6zS.js";import"./useAnimationId-DT580Fuf.js";import"./ActivePoints-RMI7wAiF.js";import"./Dot-CWbOoqzR.js";import"./RegisterGraphicalItemId-DFS7YVx4.js";import"./ErrorBarContext-BlzVudvo.js";import"./GraphicalItemClipPath-Bj844YW0.js";import"./SetGraphicalItem-BFQOKK6x.js";import"./getRadiusAndStrokeWidthFromDot-nIjLU3ma.js";import"./ActiveShapeUtils-DDxo2n_b.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D2ZCW4Jl.js";import"./Rectangle-CN77nqgF.js";import"./util-Dxo8gN5i.js";import"./Sector-BJAdyxZt.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
