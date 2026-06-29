import{r as n,R as t}from"./iframe-yOPx9Gik.js";import{L as p}from"./LineChart-B51-taJF.js";import{R as s}from"./zIndexSlice-D67vVDIo.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DAxTRuGa.js";import{X as d}from"./XAxis-CJ8HGhD8.js";import{Y as y}from"./YAxis-CkktISrz.js";import{L as u}from"./Legend-D02SZGli.js";import{L as h}from"./Line-C0Fqz3BG.js";import{T as g}from"./Tooltip-B5mu-Q18.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BCqwcFHc.js";import"./index-C-1T0p6G.js";import"./index-CyWWVFG2.js";import"./index-DJygjR8e.js";import"./index-gBURTRbi.js";import"./immer-MwiuxAbo.js";import"./get-BfHGT2kl.js";import"./renderedTicksSlice-ClbKT4Vz.js";import"./axisSelectors-BcCjx1Bb.js";import"./d3-scale-BQYCkYi4.js";import"./resolveDefaultProps-DB1B-raE.js";import"./isWellBehavedNumber-X6n-T2Sz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-tj_Q7LqM.js";import"./chartDataContext-CIZm0aW3.js";import"./CategoricalChart-C2Hn6eQd.js";import"./CartesianAxis-C7MTbV32.js";import"./Layer-Bwtnd2Qr.js";import"./Text-BYswpnhx.js";import"./DOMUtils-Cu0iYWZD.js";import"./Label-BqUT8U7H.js";import"./ZIndexLayer-B4R3RCf9.js";import"./types-BJAf4K7V.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DEw2IZw_.js";import"./symbol-DX-jtzBs.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DPzY_T8I.js";import"./uniqBy-B8wALonH.js";import"./iteratee-C7Rvqn86.js";import"./Curve-CyG3DmyO.js";import"./step-Bnv-0_8B.js";import"./AnimatedItems-CE38GYBB.js";import"./useAnimationId-D3arzwOC.js";import"./ActivePoints-BnyIHKN-.js";import"./Dot-BOZFOnSK.js";import"./RegisterGraphicalItemId-DtIIsDtI.js";import"./ErrorBarContext-qp41ygoF.js";import"./GraphicalItemClipPath-ByZKWDCp.js";import"./SetGraphicalItem-Bb0dcZso.js";import"./getRadiusAndStrokeWidthFromDot-pUt3tlnV.js";import"./ActiveShapeUtils-BD3mqbS1.js";import"./Cross-TDkCdzSz.js";import"./Rectangle-DeKBG9DN.js";import"./util-Dxo8gN5i.js";import"./Sector-DRFegpMv.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
