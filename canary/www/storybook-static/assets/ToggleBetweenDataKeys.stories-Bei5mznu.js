import{r as n,R as t}from"./iframe-C749ZEo3.js";import{L as p}from"./LineChart-BjZd-FVj.js";import{R as s}from"./zIndexSlice-DkHm22lp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Ckq7puT5.js";import{X as d}from"./XAxis-B1Zyj3MJ.js";import{Y as y}from"./YAxis-B2DRI57X.js";import{L as u}from"./Legend-Dgt--ULT.js";import{L as h}from"./Line-UPSPma38.js";import{T as g}from"./Tooltip-DjfW9i_Q.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Mb5ys-Ox.js";import"./index-D27ZEbdc.js";import"./index-Cclh13Kt.js";import"./index-BvdVRi_-.js";import"./index-BBhpwV9s.js";import"./throttle-CELIeDih.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-B967Fzve.js";import"./axisSelectors-DqDg1DKC.js";import"./resolveDefaultProps-6zK50N0i.js";import"./isWellBehavedNumber-tfpL7kaQ.js";import"./d3-scale-DpaPidEg.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B3fNYna3.js";import"./chartDataContext-D1rfIYla.js";import"./CategoricalChart-CQbOZOy_.js";import"./CartesianAxis-CwN7eQSV.js";import"./Layer-FHePmoXC.js";import"./Text-C7YPKDRG.js";import"./DOMUtils-D28hoCtk.js";import"./Label-SA_6xz2S.js";import"./ZIndexLayer-BPz0-wLY.js";import"./types-CCzU3Dbp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-F0I1p1Fo.js";import"./symbol-Dq2t-h2a.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D5wCeLQL.js";import"./uniqBy-gAFj75uR.js";import"./iteratee-BUXNkTTn.js";import"./Curve-D0zH9wUo.js";import"./step-BM8N9mx2.js";import"./AnimatedItems-D44ZJFQN.js";import"./useAnimationId-BXnZ6W5r.js";import"./ActivePoints-Crx-wa0M.js";import"./Dot-CRKEafBC.js";import"./RegisterGraphicalItemId-HD16Gn5o.js";import"./ErrorBarContext-CXrvXgEG.js";import"./GraphicalItemClipPath-DnnLxorK.js";import"./SetGraphicalItem-JwiICpaG.js";import"./getRadiusAndStrokeWidthFromDot-YLlbYGyD.js";import"./ActiveShapeUtils-6Wqxn4P9.js";import"./Cross-BjyZeZzk.js";import"./Rectangle-1n2gPHd-.js";import"./util-Dxo8gN5i.js";import"./Sector-Dag_B3iS.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
