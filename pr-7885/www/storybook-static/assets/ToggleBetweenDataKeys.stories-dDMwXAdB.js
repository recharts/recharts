import{r as p,R as t}from"./iframe-qocy1DQe.js";import{L as n}from"./LineChart-B7L_o5XK.js";import{R as s}from"./zIndexSlice-3RvOLzet.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bn_feOmx.js";import{X as d}from"./XAxis-DVDwgnrS.js";import{Y as y}from"./YAxis-BEBc8eQo.js";import{L as u}from"./Legend-DA5yP-XS.js";import{L as h}from"./Line-DzOEwxYP.js";import{T as g}from"./Tooltip-Bcd_DoaB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Br0BGP0j.js";import"./resolveDefaultProps-CJBSV8gq.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DDRTV0S0.js";import"./throttle-DL_zA7f1.js";import"./index-D6IIus7-.js";import"./index-BPqPq_lE.js";import"./isWellBehavedNumber-BIQIJEIr.js";import"./d3-scale-D0IFI5Iu.js";import"./index-CS-NV7Zp.js";import"./index-C4gwL4-s.js";import"./renderedTicksSlice-BgKiD8FK.js";import"./index-DYvx6oZP.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DQFc2W7b.js";import"./chartDataContext-kqjRO4tk.js";import"./CategoricalChart-DuhZERvG.js";import"./CartesianAxis-MlycpDsd.js";import"./Layer-B3KOyccU.js";import"./Text-Da9B2kdK.js";import"./DOMUtils-6qqCmkCb.js";import"./useId-HrwTNVuH.js";import"./useBackwardsCompatibleTheme-IgaWvrkn.js";import"./Label-CT_NLtkb.js";import"./ZIndexLayer-CFBos5HM.js";import"./types-Bss1IWFA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Bit0cCtP.js";import"./symbol-DVcwhidU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DSPtK0Is.js";import"./uniqBy-Cc5U2Waj.js";import"./iteratee-ptocMwcL.js";import"./Curve-DAl3IIzp.js";import"./step-nn4oKmLh.js";import"./AnimatedItems-NvJhAvIW.js";import"./useAnimationId-BzcHu7-i.js";import"./ActivePoints-DmiMFqmD.js";import"./Dot-j6skezxs.js";import"./RegisterGraphicalItemId-CjOhDwU5.js";import"./ErrorBarContext-B1oojupg.js";import"./GraphicalItemClipPath-CyLjJqVx.js";import"./SetGraphicalItem-CzGt4YnL.js";import"./getRadiusAndStrokeWidthFromDot-B1njTj3P.js";import"./ActiveShapeUtils-BsQ4rgbJ.js";import"./useGraphicalItemIdentity-Cs7JOztK.js";import"./Cross-BrlK3Sp8.js";import"./Rectangle-DbjotOaB.js";import"./util-Dxo8gN5i.js";import"./Sector-vivS8vte.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
