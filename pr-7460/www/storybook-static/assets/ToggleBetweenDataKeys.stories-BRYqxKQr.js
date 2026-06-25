import{r as n,R as t}from"./iframe-Bwb61Kb3.js";import{L as p}from"./LineChart-Do6cJwgo.js";import{R as s}from"./zIndexSlice-D31yQesP.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-sNGzwy0s.js";import{X as d}from"./XAxis-CSW3SlTU.js";import{Y as y}from"./YAxis-CFeDU12P.js";import{L as u}from"./Legend-B3Rg2U_i.js";import{L as h}from"./Line-C4AjvgS0.js";import{T as g}from"./Tooltip-CsFTpfYi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BmkLmt4T.js";import"./index-VoBgttoT.js";import"./index-CQ8V2YYj.js";import"./index-u4qnc4RM.js";import"./index-DHxQl28E.js";import"./immer-_NZCx9ap.js";import"./get-Cnvgfe2T.js";import"./renderedTicksSlice-DltxEF0x.js";import"./axisSelectors-C6KxvASB.js";import"./d3-scale-jv5Gnb2-.js";import"./resolveDefaultProps-BSJiJTDh.js";import"./isWellBehavedNumber-BUfCnJUB.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BNE4fepl.js";import"./chartDataContext-D41xMC5d.js";import"./CategoricalChart-BUwoY-M8.js";import"./CartesianAxis-BPlmGRVp.js";import"./Layer-Ci9WruQM.js";import"./Text-DNg8TFYr.js";import"./DOMUtils-ChqDP5B4.js";import"./Label-C3p-lZQP.js";import"./ZIndexLayer-Djnma_X0.js";import"./types-Bi-bjjeC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DPteOK3M.js";import"./symbol-4yLH4m2i.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ux3wQbfq.js";import"./uniqBy-CdjoT2zh.js";import"./iteratee-BFWaDkBd.js";import"./Curve-BGl8TuYV.js";import"./step-CnKejACU.js";import"./AnimatedItems-4rj5S85S.js";import"./useAnimationId-h0tb0wwo.js";import"./ActivePoints-oLE2SAgh.js";import"./Dot-Bt6enifh.js";import"./RegisterGraphicalItemId-BzHAnQiR.js";import"./ErrorBarContext-CyOyQ4I7.js";import"./GraphicalItemClipPath-CxkydB3y.js";import"./SetGraphicalItem-BRIRFn2y.js";import"./getRadiusAndStrokeWidthFromDot-CF1gEAgf.js";import"./ActiveShapeUtils-ZkpQ4WD_.js";import"./Cross-BaVkOzj0.js";import"./Rectangle-CMlDVrj7.js";import"./util-Dxo8gN5i.js";import"./Sector-CQFUYPvT.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
