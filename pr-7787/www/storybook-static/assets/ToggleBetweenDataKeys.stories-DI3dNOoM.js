import{r as p,R as t}from"./iframe-BkEvAth1.js";import{L as n}from"./LineChart-CSg4GSx3.js";import{R as s}from"./zIndexSlice-nf1W2Gc-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Tz_AP_fP.js";import{X as d}from"./XAxis-RdR0TVxW.js";import{Y as y}from"./YAxis-DLVoYarI.js";import{L as u}from"./Legend-BXo1MJNw.js";import{L as h}from"./Line-BktN_626.js";import{T as g}from"./Tooltip-CCPcn5n7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQMoxy31.js";import"./resolveDefaultProps-0lxOPE_6.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Tv8O7Qi2.js";import"./throttle-D101QSOu.js";import"./index-WgwKlZAp.js";import"./index-DEguUzrn.js";import"./isWellBehavedNumber-CFPi8ujN.js";import"./d3-scale-CLBHc1rG.js";import"./index-B8WpKNcF.js";import"./index-BRKc8NTQ.js";import"./renderedTicksSlice-DA-CVNBV.js";import"./index-BKOJ-Qmj.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ByLTz-Wk.js";import"./chartDataContext-DQU-1klM.js";import"./CategoricalChart-CFWcsDQS.js";import"./CartesianAxis-BTQZoIY0.js";import"./Layer-B86MwzYN.js";import"./Text-BZ3mS1RC.js";import"./DOMUtils-BcdnRDzA.js";import"./useId-C4p8DCEP.js";import"./useBackwardsCompatibleTheme-C9UXAGCH.js";import"./Label-C6aq5sgc.js";import"./ZIndexLayer-CV-ewbAJ.js";import"./types-CCpLRaHh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Cfz0iFpH.js";import"./symbol-Cndg8C7R.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CNOTyxbq.js";import"./uniqBy-vII-2Sju.js";import"./iteratee-V58mN6Z0.js";import"./Curve-oC0QJw4U.js";import"./step-2sMLUC-_.js";import"./AnimatedItems-DAE7yXHk.js";import"./useAnimationId-BXkgTCLA.js";import"./ActivePoints-BpS_UUeT.js";import"./Dot-DqgMg3tu.js";import"./RegisterGraphicalItemId-7FSphn26.js";import"./ErrorBarContext-TeZDWbxG.js";import"./GraphicalItemClipPath-B-LRUwBU.js";import"./SetGraphicalItem-CKJc8ABb.js";import"./getRadiusAndStrokeWidthFromDot-DpGWIpus.js";import"./ActiveShapeUtils-l5lysgay.js";import"./useGraphicalItemIdentity-C648VAOs.js";import"./Cross-DXgccHZ6.js";import"./Rectangle-CPSx8OX_.js";import"./util-Dxo8gN5i.js";import"./Sector-DevSgsmv.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
