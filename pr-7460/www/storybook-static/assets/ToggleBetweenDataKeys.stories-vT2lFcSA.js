import{r as n,R as t}from"./iframe-DGhU-a9T.js";import{L as p}from"./LineChart-D7KKlNBW.js";import{R as s}from"./zIndexSlice-D4C6hgdT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C3Up4h_c.js";import{X as d}from"./XAxis-BniO9eps.js";import{Y as y}from"./YAxis-BZIvedAi.js";import{L as u}from"./Legend-BRE1EjLl.js";import{L as h}from"./Line-ivCSXdEf.js";import{T as g}from"./Tooltip-CDB_Fk5c.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DbVRBKBT.js";import"./index-B_yATEtm.js";import"./index-DCbVvyOU.js";import"./index-Cst7TkYL.js";import"./index-DSZNwJZV.js";import"./immer-6aMp-_7U.js";import"./get-BovgKQJV.js";import"./renderedTicksSlice-DlUNX-2S.js";import"./axisSelectors-B2LpzdTT.js";import"./d3-scale-CGHFSatL.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-Dbt_ZrM5.js";import"./isWellBehavedNumber-CmPQeXr3.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-rdohZj9d.js";import"./chartDataContext-D0QBQcjy.js";import"./CategoricalChart-CgcUCFFA.js";import"./CartesianAxis-Cncjk8wz.js";import"./Layer-Dq7d9_uV.js";import"./Text-BWhw0wXD.js";import"./DOMUtils-CZpE5MKQ.js";import"./Label-Cn2enGhV.js";import"./ZIndexLayer-D2dadpNA.js";import"./types-DBzeQvsP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-CjwVZBtH.js";import"./symbol-H1Rke99i.js";import"./path-DyVhHtw_.js";import"./useElementOffset-F-eAusQk.js";import"./uniqBy-61b_bX-x.js";import"./iteratee-IjYl2ZNO.js";import"./Curve-D1MUxqb9.js";import"./step-LyYYLf4o.js";import"./AnimatedItems-tx7FJlw3.js";import"./useAnimationId-whgPLHvU.js";import"./ActivePoints-DRG6SQTE.js";import"./Dot-ueeTOKda.js";import"./RegisterGraphicalItemId-7Cg8xoFx.js";import"./ErrorBarContext-D0SNCxES.js";import"./GraphicalItemClipPath-BG_0y6FZ.js";import"./SetGraphicalItem--dLvTOsx.js";import"./getRadiusAndStrokeWidthFromDot-Web9rp4C.js";import"./ActiveShapeUtils-FGDrwnsX.js";import"./Cross-Bt7osVPs.js";import"./Rectangle-BQMmoLkW.js";import"./Sector-Cn8xNtXL.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
