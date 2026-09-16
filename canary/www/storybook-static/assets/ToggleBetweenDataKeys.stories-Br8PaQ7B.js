import{r as p,R as t}from"./iframe-CUlWXK_q.js";import{L as n}from"./LineChart-muBFopoh.js";import{R as s}from"./zIndexSlice-DM6pr2-S.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Bi0OQ-Y1.js";import{X as d}from"./XAxis-Djxn7jPm.js";import{Y as y}from"./YAxis-noEkR1dh.js";import{L as u}from"./Legend-BLIxrjwe.js";import{L as h}from"./Line-BnrnwcOk.js";import{T as g}from"./Tooltip-B79VencN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C5F4JVOA.js";import"./resolveDefaultProps-D0jJQ7td.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BD41NxQw.js";import"./throttle-C_r5ITnz.js";import"./index-DeLCoNGq.js";import"./index-DkyNoZPG.js";import"./isWellBehavedNumber-dgjlUMt0.js";import"./d3-scale-hq__MZkp.js";import"./index-B7A70wTi.js";import"./index-BLklzkKd.js";import"./renderedTicksSlice-BdBFpUvH.js";import"./index-BBeD-IIB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CRlJjBxC.js";import"./chartDataContext-NP5kWzmf.js";import"./CategoricalChart-BnjqCNZT.js";import"./CartesianAxis-CvaDBGbl.js";import"./Layer-DTo8-sn1.js";import"./Text-Dwcbogye.js";import"./DOMUtils-C2wyshXr.js";import"./useId-xdSBMbRU.js";import"./useBackwardsCompatibleTheme-DPUtEB0l.js";import"./Label-CHddXrDn.js";import"./ZIndexLayer-CBqpLv67.js";import"./types-C9dSmSxn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CsvRLVdW.js";import"./symbol-CgPnmDmb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D67iyqh-.js";import"./uniqBy-MjWJtKt-.js";import"./iteratee-i1UfEwDS.js";import"./Curve-D8NUv9dD.js";import"./step-Di3fwKYt.js";import"./AnimatedItems-DODKpEkU.js";import"./useAnimationId-JJOW80s5.js";import"./ActivePoints-B_yfpjG0.js";import"./Dot-DYyj6ZNH.js";import"./RegisterGraphicalItemId-CjUENZzL.js";import"./ErrorBarContext-Ff5dUprW.js";import"./GraphicalItemClipPath-gLO2Kyz_.js";import"./SetGraphicalItem-CLwyvQ_z.js";import"./getRadiusAndStrokeWidthFromDot-DvN_DPnW.js";import"./ActiveShapeUtils-BTWGbocf.js";import"./useGraphicalItemIdentity-B9Lyw3Fg.js";import"./Cross-DAPMBySo.js";import"./Rectangle-CCmoInZ0.js";import"./util-Dxo8gN5i.js";import"./Sector-Gf9hgw2I.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
