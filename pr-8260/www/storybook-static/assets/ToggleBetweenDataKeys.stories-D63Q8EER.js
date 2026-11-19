import{r as p,R as t}from"./iframe-BrId7CKe.js";import{L as n}from"./LineChart-oWp2sa2O.js";import{R as s}from"./zIndexSlice-DF5zMGO6.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-XQcLM5Hp.js";import{X as d}from"./XAxis-CGJzYa5v.js";import{Y as y}from"./YAxis-CGC-AYss.js";import{L as u}from"./Legend-ByWeI-o6.js";import{L as h}from"./Line-CgfEpiSf.js";import{T as g}from"./Tooltip-BVNGnJB1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0PTLzSu.js";import"./resolveDefaultProps-DIgz9kBc.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BWicBn7w.js";import"./throttle-CvD-CMS9.js";import"./index-D7ICnWyX.js";import"./index-EO2EMNzs.js";import"./polarAxisSelectors-BScTjZiA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Did4wLnp.js";import"./index-B4UkUUGe.js";import"./index-CKY_1Z5f.js";import"./renderedTicksSlice-DAS2rh9P.js";import"./index-Drj8yiU0.js";import"./fillDefinitions-dpOaLydo.js";import"./CartesianChart-BQoBJqDq.js";import"./chartDataContext-BtKuFOy0.js";import"./CategoricalChart-D7PumRDT.js";import"./CartesianAxis-CGWn72D3.js";import"./Layer-CxlvVVO_.js";import"./Text-CtzCspEf.js";import"./ZIndexLayer-DtobrSuN.js";import"./Label-BOSTGjYW.js";import"./types-BIH_CFXa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DW8eGAaV.js";import"./symbol-Bas1pNoF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CyYI02cJ.js";import"./uniqBy-DKGrDlDL.js";import"./iteratee-BEaiqON8.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-2ewH2R2L.js";import"./Curve-CODof7zW.js";import"./step-D0GmmZR_.js";import"./dataEntryStyles-Dl3_KD-K.js";import"./ActivePoints-BfbfOk4s.js";import"./Dot-Bz04y-El.js";import"./activeStyles-haHqTj48.js";import"./useAnimationId-DnW4K7Yj.js";import"./ErrorBarContext-Di-OPTeN.js";import"./SetGraphicalItem-Bx9N4hIP.js";import"./ActiveShapeUtils-B-iMU9qH.js";import"./useEffectiveDataKey-BlMggeza.js";import"./Cross-CUleMcJR.js";import"./Rectangle-BiqZRBIg.js";import"./util-Dxo8gN5i.js";import"./Sector-DU6IjnP4.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
