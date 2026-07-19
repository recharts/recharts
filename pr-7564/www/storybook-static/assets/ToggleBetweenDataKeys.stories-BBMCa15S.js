import{r as n,R as t}from"./iframe-B-yW787s.js";import{L as p}from"./LineChart-BL_VjYIh.js";import{R as s}from"./zIndexSlice-CKRpx7FD.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DMiq5X00.js";import{X as d}from"./XAxis-D0UXMK3L.js";import{Y as y}from"./YAxis-DGNSSBsi.js";import{L as u}from"./Legend-Dv3Zl6DL.js";import{L as h}from"./Line-CK0bz55t.js";import{T as g}from"./Tooltip-CfhG70XA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DSpl9lP_.js";import"./index-TzX_ldyC.js";import"./index-Dh8eUehn.js";import"./index-B8s4lwM0.js";import"./index-BLtMs8ww.js";import"./throttle-B8_9WF3N.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-EV44ZZNX.js";import"./axisSelectors-d9CW9W7w.js";import"./resolveDefaultProps-D6vuKH4c.js";import"./isWellBehavedNumber-C_1nd4jU.js";import"./d3-scale-8a4kRHFN.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B08PHStc.js";import"./chartDataContext-DOok0Cd4.js";import"./CategoricalChart-XTSjkgZQ.js";import"./CartesianAxis-BlaAel8_.js";import"./Layer-DVSBdCcq.js";import"./Text-DK2M6QxL.js";import"./DOMUtils-B0UrcgO-.js";import"./Label-BkxmYsWW.js";import"./ZIndexLayer-CdG-cca2.js";import"./types-DcTCoXGC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-Bg5BQdWY.js";import"./symbol-eAiDcfG8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C-wPzP_t.js";import"./uniqBy-D9O0f4RW.js";import"./iteratee-3rKsZ9vF.js";import"./Curve-DCdfY6Kv.js";import"./step-BYmVMSZy.js";import"./AnimatedItems-CYFqV_Nm.js";import"./useAnimationId-o-X37ase.js";import"./ActivePoints-DpVBVyJ4.js";import"./Dot-rGFeGUQm.js";import"./RegisterGraphicalItemId-DeFh6f0i.js";import"./ErrorBarContext-D17CdNj4.js";import"./GraphicalItemClipPath-_Ex-IG4N.js";import"./SetGraphicalItem-NvPtwEe2.js";import"./getRadiusAndStrokeWidthFromDot-DVenAMua.js";import"./ActiveShapeUtils-Dzsbq5DH.js";import"./Cross-D6yxn-4q.js";import"./Rectangle-DKB06qOF.js";import"./util-Dxo8gN5i.js";import"./Sector-CPt2S0K5.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
