import{r as p,R as t}from"./iframe-66xGksI9.js";import{L as n}from"./LineChart-DVUVk3GL.js";import{R as s}from"./zIndexSlice-CYY5i5GC.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B5NNWkIE.js";import{X as d}from"./XAxis-CXNDEo4D.js";import{Y as y}from"./YAxis-BiYwIvVw.js";import{L as u}from"./Legend-CIRRr9kw.js";import{L as h}from"./Line-4nEaU4yM.js";import{T as g}from"./Tooltip-CfnEyiLa.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CBtKgDqJ.js";import"./resolveDefaultProps-CNf-20ax.js";import"./get-cF5BDHN6.js";import"./axisSelectors-c7Es3nNM.js";import"./throttle-pB5GcO80.js";import"./index-BdwqiePa.js";import"./index-BY9aQbpp.js";import"./polarAxisSelectors-CBhhjzdU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Ni_fDMoN.js";import"./index-DfrMyUP0.js";import"./index-BRQLVN4e.js";import"./renderedTicksSlice-C3z0elvI.js";import"./index-BykASSPU.js";import"./fillDefinitions-bQfE-RQi.js";import"./CartesianChart-Cqx4FTn2.js";import"./chartDataContext-Bw9Xn6sV.js";import"./CategoricalChart-cIWfYphX.js";import"./CartesianAxis-DQXtF-Wj.js";import"./Layer-C1IdSUB2.js";import"./Text-DBDWQ-k-.js";import"./ZIndexLayer-CW7ymMrJ.js";import"./Label-CZY2Xnwr.js";import"./types-D-bLaOPe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BAjlrbb5.js";import"./symbol-DTY0uCjS.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DJCmtGIc.js";import"./uniqBy-9AjO9xab.js";import"./iteratee-C80Q0yRq.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BHMa596t.js";import"./Curve-C90n3hpg.js";import"./step-BPw2RLV2.js";import"./dataEntryStyles-D5RB-ObJ.js";import"./ActivePoints-B6OlZ3cX.js";import"./Dot-D3LIPFdP.js";import"./activeStyles-ueUYGAtI.js";import"./useAnimationId-CE-ISBvq.js";import"./ErrorBarContext-Cekx66Ji.js";import"./SetGraphicalItem-BwgsUtDt.js";import"./ActiveShapeUtils-CCTJSoY2.js";import"./useEffectiveDataKey-Dw6tI5XK.js";import"./Cross-BOiCaUxD.js";import"./Rectangle-D_Uv0gGo.js";import"./util-Dxo8gN5i.js";import"./Sector-QJb9TZ4t.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
