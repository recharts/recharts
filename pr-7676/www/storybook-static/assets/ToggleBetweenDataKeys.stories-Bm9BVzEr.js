import{r as n,R as t}from"./iframe-Ca32ubBP.js";import{L as p}from"./LineChart-1vQ2iz_4.js";import{R as s}from"./zIndexSlice-dHiwLFUj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BwaCreiY.js";import{X as d}from"./XAxis-Doj-lEYw.js";import{Y as y}from"./YAxis-wOxJ_8VY.js";import{L as u}from"./Legend-Ndh8y7nt.js";import{L as h}from"./Line-C8JVpIOW.js";import{T as g}from"./Tooltip-BK7CRZ-e.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C_dCGHdd.js";import"./index-CHNh1dey.js";import"./index-Dge3NWQD.js";import"./index-8HLzHw6r.js";import"./index-CHnduxoF.js";import"./throttle-B0sCMXOK.js";import"./get-C2VjdU0L.js";import"./axisSelectors-A6ndeoHc.js";import"./resolveDefaultProps-FNg74tNy.js";import"./isWellBehavedNumber-C-9KtVDX.js";import"./d3-scale-Do2gUorH.js";import"./renderedTicksSlice-CpRpGU6M.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D1u_uw1Q.js";import"./chartDataContext-Dgyo9muf.js";import"./CategoricalChart-CBCGNfzQ.js";import"./CartesianAxis-Dfpoi9-r.js";import"./Layer-B0UktO7Z.js";import"./Text-i5MeFzWV.js";import"./DOMUtils-BJ447lE9.js";import"./useId-BjxuxzLj.js";import"./useBackwardsCompatibleTheme-Ddp8u6f9.js";import"./Label-DD1RmAzE.js";import"./ZIndexLayer-BAqimWYO.js";import"./types-_9LccsBU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DPe3GKhA.js";import"./symbol-gQzWWZLj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B__IOwrq.js";import"./uniqBy-Vn-_Z9lW.js";import"./iteratee-C66mF7I5.js";import"./Curve-BTmElVc4.js";import"./step-CYvNd-lj.js";import"./AnimatedItems-CDoRaH70.js";import"./useAnimationId-B8VHZUPO.js";import"./ActivePoints-BBA7jI6r.js";import"./Dot-B4PeYlma.js";import"./RegisterGraphicalItemId-B_2qN3HQ.js";import"./ErrorBarContext-CAeoPaJo.js";import"./GraphicalItemClipPath-CrTkoGhX.js";import"./SetGraphicalItem-CnmA_FOG.js";import"./getRadiusAndStrokeWidthFromDot-BY_VbDBa.js";import"./ActiveShapeUtils-x7koemir.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CpfAzeAt.js";import"./Rectangle-DLCrIZbS.js";import"./util-Dxo8gN5i.js";import"./Sector-B51nA7t4.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
