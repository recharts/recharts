import{r as p,R as t}from"./iframe-CVu8zrUS.js";import{L as n}from"./LineChart-PTTGyG5b.js";import{R as s}from"./zIndexSlice-Bq6bmQlp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CYdjKJuY.js";import{X as d}from"./XAxis-Cmp_u62X.js";import{Y as y}from"./YAxis-CbExEBw4.js";import{L as u}from"./Legend-Ce9eAhQx.js";import{L as h}from"./Line-CcBwkv4q.js";import{T as g}from"./Tooltip-8ZVz6rt9.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BMgc3fuA.js";import"./resolveDefaultProps-Bb5e-Ri9.js";import"./get-CjriyByo.js";import"./axisSelectors-Sot67Aim.js";import"./throttle-DhpuiNc1.js";import"./index-CnHWc7sj.js";import"./index-DtrO1U5O.js";import"./polarAxisSelectors-MtWLdCCF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BfJtYZLb.js";import"./index-9zr5wxfL.js";import"./index-BuvxFglF.js";import"./renderedTicksSlice-C88oJ44U.js";import"./index-CTNfzL7A.js";import"./fillDefinitions-nObHHCVo.js";import"./CartesianChart-CcPXlhV4.js";import"./chartDataContext-Dg0Jj1rs.js";import"./CategoricalChart-DIJd4lOu.js";import"./CartesianAxis-Ctwjf5Ws.js";import"./Layer-Cu87ioWV.js";import"./Text-R7SqSI0E.js";import"./ZIndexLayer-B1JZDtFw.js";import"./Label-Cx8AJG-1.js";import"./types-DISj1D7D.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CPBzhLNS.js";import"./symbol-BnOQ6fEU.js";import"./path-BBMZd4YL.js";import"./useElementOffset-J7kEM2re.js";import"./uniqBy-CRfw9j4K.js";import"./iteratee-ExFm1WSh.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-C0Ej1DHm.js";import"./Curve-DnKmeSPX.js";import"./step-B759BuMX.js";import"./dataEntryStyles-BbIoPGWl.js";import"./ActivePoints-y_nl0SSe.js";import"./Dot-CJSjjEfy.js";import"./activeStyles-BYV0uDWS.js";import"./useAnimationId-HRjjYmjj.js";import"./ErrorBarContext-v1LyTi-B.js";import"./SetGraphicalItem-BzQ3GKka.js";import"./ActiveShapeUtils-BVHA2GWO.js";import"./useEffectiveDataKey-BkqeFEex.js";import"./Cross-Bguv1Xns.js";import"./Rectangle-BixLzELc.js";import"./util-Dxo8gN5i.js";import"./Sector-Cdqieute.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
