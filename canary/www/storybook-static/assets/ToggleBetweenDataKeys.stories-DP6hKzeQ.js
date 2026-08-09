import{r as n,R as t}from"./iframe-DIhQo_8Y.js";import{L as p}from"./LineChart-_jrRxk-M.js";import{R as s}from"./zIndexSlice-CGgr09GZ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DJEg4-FR.js";import{X as d}from"./XAxis-BpVdYfJg.js";import{Y as y}from"./YAxis-DaA2UazR.js";import{L as u}from"./Legend-Ck9PLJoP.js";import{L as h}from"./Line-DEkyIRox.js";import{T as g}from"./Tooltip-CLrqdAE8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DRimQmLV.js";import"./index-BC5_sjA-.js";import"./index-RbONCBjN.js";import"./index-Dgm3vG4i.js";import"./index-BF8H9JZN.js";import"./throttle-B5VRQcq4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Gg8H4O2J.js";import"./resolveDefaultProps-hi_Ykzi4.js";import"./isWellBehavedNumber-BiD1hUdH.js";import"./d3-scale-DTMlXSKJ.js";import"./renderedTicksSlice-Co5rDdJd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DwM9PUKm.js";import"./chartDataContext-DFyWuVHZ.js";import"./CategoricalChart-CgO2X-rw.js";import"./CartesianAxis-4De8rCJ6.js";import"./Layer-BQPvkkvd.js";import"./Text-5eA_PDhZ.js";import"./DOMUtils-Cs86oaAG.js";import"./Label-CVkJGixO.js";import"./ZIndexLayer-B8ZTodeV.js";import"./types-ZiiagxD1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C_YQ-08p.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DuXAJdRg.js";import"./symbol-BW1nMcv9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CD90jGAB.js";import"./uniqBy-DEkqq9OP.js";import"./iteratee-C_S5i7R9.js";import"./Curve-BXnwyB8Q.js";import"./step-kN_jTjZP.js";import"./AnimatedItems-DEBP1yTo.js";import"./useAnimationId-CRkvHyGK.js";import"./ActivePoints-CJTgILF2.js";import"./Dot-BiDh7UAw.js";import"./RegisterGraphicalItemId-DMf10IHd.js";import"./ErrorBarContext-RhNJ5kjd.js";import"./GraphicalItemClipPath-BlWn4Cda.js";import"./SetGraphicalItem-CDNxzvex.js";import"./getRadiusAndStrokeWidthFromDot-DPHCRHA9.js";import"./ActiveShapeUtils-DPvlIPGu.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DMyoXCGS.js";import"./Rectangle-brCqUJwM.js";import"./util-Dxo8gN5i.js";import"./Sector-CFcXtW_P.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
