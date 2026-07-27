import{r as n,R as t}from"./iframe-dVfgBJJs.js";import{L as p}from"./LineChart-Bjmb6A16.js";import{R as s}from"./zIndexSlice-Cjn5-XTM.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-S7mJlfqt.js";import{X as d}from"./XAxis-Dq_1Ikw5.js";import{Y as y}from"./YAxis-Bw51heiQ.js";import{L as u}from"./Legend-aBMS0PKs.js";import{L as h}from"./Line-CqjanWML.js";import{T as g}from"./Tooltip-CJSXK5by.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BUOG_0PT.js";import"./index-CFOPrJ2a.js";import"./index-CZjDID2X.js";import"./index-C6eTt67z.js";import"./index-MNnIylKM.js";import"./throttle-B7XzNIu7.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-D2-S4Lnl.js";import"./axisSelectors-rruDH4Fs.js";import"./resolveDefaultProps-BJYE31LD.js";import"./isWellBehavedNumber-Dps59fvg.js";import"./d3-scale-BnZ4Lirr.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-lwgDkPey.js";import"./chartDataContext-CKWmrP30.js";import"./CategoricalChart-C8uoPany.js";import"./CartesianAxis-aoe5sT-Z.js";import"./Layer-CMYHU7wr.js";import"./Text-pzoHfxc1.js";import"./DOMUtils-BHngjwEG.js";import"./Label-Qwq3mE6t.js";import"./ZIndexLayer-CwGLm3MP.js";import"./types-zZpSojV-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-HSjwRIgd.js";import"./symbol-Jvzv5OcK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B6pjqzOx.js";import"./uniqBy-B0dYKt0p.js";import"./iteratee-C7S4GxDg.js";import"./Curve-BS8zfYeH.js";import"./step-DuOmXCgZ.js";import"./AnimatedItems-_UVM3ygI.js";import"./useAnimationId-DepU2l4z.js";import"./ActivePoints-CtZ_3WUF.js";import"./Dot-C7HuS7dU.js";import"./RegisterGraphicalItemId-B-wtHeoX.js";import"./ErrorBarContext-CcM5piDn.js";import"./GraphicalItemClipPath-CjVY23ZB.js";import"./SetGraphicalItem-BrDpUng6.js";import"./getRadiusAndStrokeWidthFromDot--eZofM29.js";import"./ActiveShapeUtils-BR_u5MdP.js";import"./Cross-BdrRvahT.js";import"./Rectangle-CBvNSrWO.js";import"./util-Dxo8gN5i.js";import"./Sector-CC1aczQ9.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
