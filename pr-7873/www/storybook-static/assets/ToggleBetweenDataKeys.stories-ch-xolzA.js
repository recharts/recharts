import{r as p,R as t}from"./iframe-BFFmTTDr.js";import{L as n}from"./LineChart-RnXmkXMX.js";import{R as s}from"./zIndexSlice-DQM058wc.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-27H1Xe6J.js";import{X as d}from"./XAxis-CUKTZ0Q0.js";import{Y as y}from"./YAxis-zUGAKEHc.js";import{L as u}from"./Legend-CjDcERwx.js";import{L as h}from"./Line-B1_198wi.js";import{T as g}from"./Tooltip-oAqx3FzE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-W63MnO3r.js";import"./resolveDefaultProps-C4cHyrTj.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BasDhOYS.js";import"./throttle-C1mDwWe8.js";import"./index-B0ZyvmjF.js";import"./index-p_2WOCPr.js";import"./isWellBehavedNumber-EAZXLIW4.js";import"./d3-scale-CB2_PHYv.js";import"./index-DQJjMFyh.js";import"./index-BkJjG_2i.js";import"./renderedTicksSlice-CucX-QZC.js";import"./index-C0jb6csl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-lCgugd9d.js";import"./chartDataContext-CP53CgNH.js";import"./CategoricalChart-mbieolFi.js";import"./CartesianAxis-nbQLlPRi.js";import"./Layer-BuPOal-_.js";import"./Text-m1jHD_i9.js";import"./DOMUtils-DhZiPaLo.js";import"./useId-ByStve5U.js";import"./useBackwardsCompatibleTheme-EBoDvW3e.js";import"./Label-CVuMucY6.js";import"./ZIndexLayer-V0Jr5gGg.js";import"./types-CeA3gQcd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C97zeRwP.js";import"./symbol-Bf_JTZFF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DB_IX7OY.js";import"./uniqBy-B2LizQEX.js";import"./iteratee-D-TKsR8y.js";import"./Curve-E9YFTGyr.js";import"./step-Dp068KI0.js";import"./AnimatedItems-BCqULUvu.js";import"./useAnimationId-CSU3KRrf.js";import"./ActivePoints-CKDoUYi7.js";import"./Dot-VdwfLdwk.js";import"./RegisterGraphicalItemId-Fjnl2b5Z.js";import"./ErrorBarContext-nDEpYIsF.js";import"./GraphicalItemClipPath-BoCgP3xh.js";import"./SetGraphicalItem-BH8-Rn7Q.js";import"./getRadiusAndStrokeWidthFromDot-DP3QTkY-.js";import"./ActiveShapeUtils-CqP12PJd.js";import"./useGraphicalItemIdentity-CpgNQJzS.js";import"./Cross-e52sgJMj.js";import"./Rectangle-BKcyOIbb.js";import"./util-Dxo8gN5i.js";import"./Sector-B0r8MdXQ.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
