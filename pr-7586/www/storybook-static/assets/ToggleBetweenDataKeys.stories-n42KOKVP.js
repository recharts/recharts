import{r as n,R as t}from"./iframe-Bj-yQnc2.js";import{L as p}from"./LineChart-jPI1RMxb.js";import{R as s}from"./zIndexSlice-DO4y32gA.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-GSqP8gjh.js";import{X as d}from"./XAxis-XI4N_gb4.js";import{Y as y}from"./YAxis-Bs6EndY5.js";import{L as u}from"./Legend-BoQEqAEy.js";import{L as h}from"./Line-DVqKkASG.js";import{T as g}from"./Tooltip-DzJ5ZKak.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BjwBN1rR.js";import"./index-npMcpUBc.js";import"./index-CUdhCrp9.js";import"./index-CXIrlcaX.js";import"./index-C2KJTwEF.js";import"./throttle-CZQMCJbJ.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CagdShEY.js";import"./axisSelectors-DPyctkFQ.js";import"./resolveDefaultProps-7WXWf9aL.js";import"./isWellBehavedNumber-A843S5PG.js";import"./d3-scale-rY2RSZRS.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-lhfYoKGZ.js";import"./chartDataContext-CFjDBvvT.js";import"./CategoricalChart-CavyJHAU.js";import"./CartesianAxis-Dfz3FhFq.js";import"./Layer-BLp5IiBu.js";import"./Text-RzD6k6DF.js";import"./DOMUtils-DVhKp59x.js";import"./Label-Cm9vMlt2.js";import"./ZIndexLayer-CZNNIEzh.js";import"./types-YXwkeCBT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols--a3ZeWIs.js";import"./symbol-p1Xv4L39.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DuhsEaES.js";import"./uniqBy-C6ba-9WF.js";import"./iteratee-CVYjgau1.js";import"./Curve-CeWd9qmA.js";import"./step-C2Z_nim4.js";import"./AnimatedItems-DUyUCCX0.js";import"./useAnimationId-Yo_b-bos.js";import"./ActivePoints-BIrCi9Or.js";import"./Dot-B130eiz7.js";import"./RegisterGraphicalItemId-DueteZ3j.js";import"./ErrorBarContext-ft-NJLsc.js";import"./GraphicalItemClipPath-B-sHbKa-.js";import"./SetGraphicalItem-DWNEhJuv.js";import"./getRadiusAndStrokeWidthFromDot-BwxuSyAu.js";import"./ActiveShapeUtils-BoActjfk.js";import"./Cross-CzBQbfZ3.js";import"./Rectangle-D4kIWx5v.js";import"./util-Dxo8gN5i.js";import"./Sector-2PtdjaaC.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};
