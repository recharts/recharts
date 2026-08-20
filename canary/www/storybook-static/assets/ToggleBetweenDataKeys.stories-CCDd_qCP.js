import{r as n,R as t}from"./iframe-Bw423yT3.js";import{L as p}from"./LineChart-K1Jx0CvT.js";import{R as s}from"./zIndexSlice-C0Ur0qQv.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DPKrYQGM.js";import{X as d}from"./XAxis-DoB4s5YX.js";import{Y as y}from"./YAxis-OVaFJ7CI.js";import{L as u}from"./Legend-BDuWMGHQ.js";import{L as h}from"./Line-BMKWlib2.js";import{T as g}from"./Tooltip-Be8nokA1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bq4pCedS.js";import"./index-DY-6WoYl.js";import"./index-Dzxogdh4.js";import"./index-CSmn3lR3.js";import"./index-Cmb77t22.js";import"./throttle-DoQ6jmeU.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DvFF09lq.js";import"./resolveDefaultProps-DecYMRDs.js";import"./isWellBehavedNumber-Bhsok9Kl.js";import"./d3-scale-B6w1DC_B.js";import"./renderedTicksSlice-C7gnJRFb.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-KYAmso8l.js";import"./chartDataContext-ChmL2TgJ.js";import"./CategoricalChart-BFEAf3EH.js";import"./CartesianAxis-Crdg7aw6.js";import"./Layer-D4oXIaGo.js";import"./Text-C_UyMP2R.js";import"./DOMUtils-B-o7bCMD.js";import"./useId-DVN36WJe.js";import"./useBackwardsCompatibleTheme-BiX6i8Ds.js";import"./Label-CDuT1dKE.js";import"./ZIndexLayer-BMLxUbw3.js";import"./types-Ds-DwS6F.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BuIuBD8Q.js";import"./symbol-CqIeDhWk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ChV6ndkv.js";import"./uniqBy-DXUX_vZx.js";import"./iteratee-CM1mNqCJ.js";import"./Curve-ROVFdQ-G.js";import"./step-BJpmgVSO.js";import"./AnimatedItems-hYYLyghD.js";import"./useAnimationId-Ys0eqrlL.js";import"./ActivePoints-Di-vyWVm.js";import"./Dot-BzofvkeI.js";import"./RegisterGraphicalItemId-C_cjgYuq.js";import"./ErrorBarContext-BUSWNFOb.js";import"./GraphicalItemClipPath-C6OEajox.js";import"./SetGraphicalItem-OiZoorhv.js";import"./getRadiusAndStrokeWidthFromDot-BZS_5G6a.js";import"./ActiveShapeUtils-DXmjz54Y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-B0QGpBVq.js";import"./Rectangle-B-9AixLW.js";import"./util-Dxo8gN5i.js";import"./Sector-Dk7MJm7o.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
