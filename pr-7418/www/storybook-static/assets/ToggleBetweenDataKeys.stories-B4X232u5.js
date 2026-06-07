import{r as n,R as t}from"./iframe-B32UfMsX.js";import{L as p}from"./LineChart-DeauXXCJ.js";import{R as s}from"./zIndexSlice-DkyNtvIV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dkr60wUu.js";import{X as d}from"./XAxis-DsOSB3OX.js";import{Y as y}from"./YAxis-4E9uo8Up.js";import{L as u}from"./Legend-9mbWf1fU.js";import{L as h}from"./Line-Bf6u9d83.js";import{T as g}from"./Tooltip-C_vmEps_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BXDb61uY.js";import"./index-DzoQc6cZ.js";import"./index-Q93duC2Q.js";import"./index-BAP72phy.js";import"./index-wjzF3nV2.js";import"./immer-BidytqCU.js";import"./get-CT3OO5rn.js";import"./renderedTicksSlice-DtIdXCHL.js";import"./axisSelectors-B8hXjmBG.js";import"./d3-scale-BwqG5DLv.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-SHHlCQDD.js";import"./isWellBehavedNumber-B3ho9k16.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-s4vgD_mJ.js";import"./chartDataContext-d3sJv4oK.js";import"./CategoricalChart-svLbPFL5.js";import"./CartesianAxis-CrAWHyC2.js";import"./Layer-M7lMUPI2.js";import"./Text-DenoxlLY.js";import"./DOMUtils-qhHnbbUp.js";import"./Label-Ba3mw93_.js";import"./ZIndexLayer-DIk8UPq9.js";import"./types-BFdTLIuF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-C2ESKxkV.js";import"./symbol-CXCFISh0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dj3OO3b3.js";import"./uniqBy-DT8uU73i.js";import"./iteratee-CxBZkxbt.js";import"./Curve-BQ-BZdGC.js";import"./step-DXYrSD7K.js";import"./AnimatedItems-CWOjCZuo.js";import"./useAnimationId-kKOEl60u.js";import"./ActivePoints-BOP5iqzh.js";import"./Dot-oj-oSIki.js";import"./RegisterGraphicalItemId-BPd8SjvM.js";import"./ErrorBarContext-CC6gZVl6.js";import"./GraphicalItemClipPath-DtFSmlFx.js";import"./SetGraphicalItem-CLuszb-H.js";import"./getRadiusAndStrokeWidthFromDot-BZUf4vDk.js";import"./ActiveShapeUtils-rTJK82Vs.js";import"./Cross-Dpp9czJE.js";import"./Rectangle-Chp3lP1V.js";import"./Sector-BPld6y2i.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
