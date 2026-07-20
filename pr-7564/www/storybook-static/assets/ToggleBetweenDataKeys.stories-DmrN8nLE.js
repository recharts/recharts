import{r as n,R as t}from"./iframe-DzolqKW_.js";import{L as p}from"./LineChart-Bv9ZKYs8.js";import{R as s}from"./zIndexSlice-BFydgfU7.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-7m42T_8O.js";import{X as d}from"./XAxis-GMhM5CFR.js";import{Y as y}from"./YAxis-DB_rcNlV.js";import{L as u}from"./Legend-CbGDyId9.js";import{L as h}from"./Line-DiVWIN5q.js";import{T as g}from"./Tooltip-Dhnxj9xg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CninMw2k.js";import"./index-BYzdNJg2.js";import"./index-BjJlMzFo.js";import"./index-BGQgYr9p.js";import"./index-CXHzwmBK.js";import"./throttle-BWqOgTiL.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-BTl9iHqH.js";import"./axisSelectors-BWPQJWKM.js";import"./resolveDefaultProps-Bn-Ns7xT.js";import"./isWellBehavedNumber-DaFHOJVp.js";import"./d3-scale-BOKuOqr8.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DRSod0ni.js";import"./chartDataContext-D0TMVBgy.js";import"./CategoricalChart-tg3Y8Ccg.js";import"./CartesianAxis-CSVxSdOY.js";import"./Layer-TAE-BGU4.js";import"./Text-Oy6dFGv9.js";import"./DOMUtils-D4HAj4Uf.js";import"./Label-BR8h5iiR.js";import"./ZIndexLayer-CuyP-vcu.js";import"./types-BKcxhU3G.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-u3thHIeX.js";import"./symbol-CcSEyfye.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C5u9w9zW.js";import"./uniqBy-ijo8b4E9.js";import"./iteratee-nLHmRvyN.js";import"./Curve-D6-Bsbi2.js";import"./step-DRn0xJ5_.js";import"./AnimatedItems-D8n1PMNM.js";import"./useAnimationId-BCQ5DS1y.js";import"./ActivePoints-CAwFhkX4.js";import"./Dot-CwbyEbx1.js";import"./RegisterGraphicalItemId-DAxQkrUf.js";import"./ErrorBarContext-HJrjbNNf.js";import"./GraphicalItemClipPath-Cf6TT0yv.js";import"./SetGraphicalItem-F22FHLao.js";import"./getRadiusAndStrokeWidthFromDot-BzM4Z0nC.js";import"./ActiveShapeUtils-B3c1p96o.js";import"./Cross-CpBlPrtB.js";import"./Rectangle-O5CHzUas.js";import"./util-Dxo8gN5i.js";import"./Sector-BlO0OVbx.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
