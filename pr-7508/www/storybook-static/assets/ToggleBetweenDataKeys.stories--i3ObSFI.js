import{r as n,R as t}from"./iframe-CCxa2X_3.js";import{L as p}from"./LineChart-DECqCDCO.js";import{R as s}from"./zIndexSlice-CjS-6Q6g.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BnLmHshS.js";import{X as d}from"./XAxis-DgXTsbE5.js";import{Y as y}from"./YAxis-LHNbupxO.js";import{L as u}from"./Legend-BrRZ-j69.js";import{L as h}from"./Line-Hi10lWtZ.js";import{T as g}from"./Tooltip-C_6OA510.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-2JrQYSBT.js";import"./index-HidsIZF1.js";import"./index-DtdyiYMy.js";import"./index-BTMSijfB.js";import"./index-Bu6kQjLM.js";import"./throttle-DVixtPip.js";import"./get-BWGRxCzY.js";import"./renderedTicksSlice-BZsMGLS6.js";import"./axisSelectors-DutwzDNX.js";import"./d3-scale-BD_lAQxm.js";import"./resolveDefaultProps-DiPmn6d5.js";import"./isWellBehavedNumber-D-qJMApD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BqBORtky.js";import"./chartDataContext-un8h0oN7.js";import"./CategoricalChart-BETRAeyd.js";import"./CartesianAxis-06zEjNAD.js";import"./Layer-DSUD-a_F.js";import"./Text-zmbPwYi6.js";import"./DOMUtils-D9dcGvYT.js";import"./Label-BbbTGnnM.js";import"./ZIndexLayer-DK9HGDkh.js";import"./types-BCrxJhqI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-D6XRg3mk.js";import"./symbol-sqDWSZm8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DofYk2ft.js";import"./uniqBy-DXRe4Vi9.js";import"./iteratee-C-XK7dPA.js";import"./Curve-DuMlNmnh.js";import"./step-Cx1fSWqJ.js";import"./AnimatedItems-CtF1ph7i.js";import"./useAnimationId-Qtosu25G.js";import"./ActivePoints-DMw22gL4.js";import"./Dot-BqRYjtmh.js";import"./RegisterGraphicalItemId-Co8JXb8t.js";import"./ErrorBarContext-DiexwYLt.js";import"./GraphicalItemClipPath-hMgxAXNq.js";import"./SetGraphicalItem-BLsqb4fN.js";import"./getRadiusAndStrokeWidthFromDot-CMMqsGHP.js";import"./ActiveShapeUtils-D6Ox5ImN.js";import"./Cross-DoeHMXog.js";import"./Rectangle-BK1YtbdL.js";import"./util-Dxo8gN5i.js";import"./Sector-DevuOtE1.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
