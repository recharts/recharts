import{r as n,R as t}from"./iframe-BLwLvMjc.js";import{L as p}from"./LineChart-D1K6WsS8.js";import{R as s}from"./zIndexSlice-f39TItqz.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DUl5EqcY.js";import{X as d}from"./XAxis-ejI-Sa_I.js";import{Y as y}from"./YAxis-BeG492ya.js";import{L as u}from"./Legend-BMV_CWpJ.js";import{L as h}from"./Line-1bQ5HATy.js";import{T as g}from"./Tooltip-D2jjsH3C.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B0n9oFWZ.js";import"./index-940TGUxY.js";import"./index-C34Ey_Rg.js";import"./index-CX4CypQp.js";import"./index-BMdMuoJa.js";import"./immer-D_8Dczsi.js";import"./get-BkG6HND6.js";import"./renderedTicksSlice-BqNNgNfR.js";import"./axisSelectors-D58BkBim.js";import"./d3-scale-DDplI62N.js";import"./resolveDefaultProps-BYhifOb3.js";import"./isWellBehavedNumber-CptpHwFR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C4yu5ilR.js";import"./chartDataContext-B-M33Z7B.js";import"./CategoricalChart-CRVqHKQs.js";import"./CartesianAxis-BaKeQioI.js";import"./Layer-Bt0_PYLT.js";import"./Text-D72Dyp1P.js";import"./DOMUtils-BokrT3el.js";import"./Label-pioiAs6J.js";import"./ZIndexLayer-YEu_ZQSO.js";import"./types-WD3PBzf9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-JaxNqX0a.js";import"./symbol-DoLM06y1.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BL78dp6_.js";import"./uniqBy-Du5aieGd.js";import"./iteratee-Wx63tvk5.js";import"./Curve-Bgoi8H0P.js";import"./step-Y_PLHiNv.js";import"./AnimatedItems-BZKtZoic.js";import"./useAnimationId-CqDdhCYT.js";import"./ActivePoints-DpoXb-Tp.js";import"./Dot-DDBvFNxJ.js";import"./RegisterGraphicalItemId-BnK-7IkL.js";import"./ErrorBarContext-DWoI7kQ6.js";import"./GraphicalItemClipPath-DiOFFyuB.js";import"./SetGraphicalItem-DSxSXGHZ.js";import"./getRadiusAndStrokeWidthFromDot-BHSa5sI8.js";import"./ActiveShapeUtils-peAesLaa.js";import"./Cross-315Cf3Tw.js";import"./Rectangle-wKNM39ge.js";import"./util-Dxo8gN5i.js";import"./Sector-CpXVAgg0.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
