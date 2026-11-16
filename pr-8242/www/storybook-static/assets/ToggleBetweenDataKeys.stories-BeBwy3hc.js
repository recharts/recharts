import{r as p,R as t}from"./iframe-ChMBHEXU.js";import{L as n}from"./LineChart-CIjAoUqR.js";import{R as s}from"./zIndexSlice-Cd2z3Eer.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CdPJwPLH.js";import{X as d}from"./XAxis-BEcsoff8.js";import{Y as y}from"./YAxis-CnSUrpEe.js";import{L as u}from"./Legend-B268yQK2.js";import{L as h}from"./Line-DFvVHptl.js";import{T as g}from"./Tooltip-Dx4yH64z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DPxS5GGe.js";import"./resolveDefaultProps-X_3NC_87.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CyYfX19F.js";import"./throttle-Cnp_ppL_.js";import"./index-hGd76TNN.js";import"./index-SyLToHDG.js";import"./polarAxisSelectors-D-ZNarpI.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B_LSdR1o.js";import"./index-DyVFOlJ7.js";import"./index-B193mqnD.js";import"./renderedTicksSlice-BLUfpxyl.js";import"./index-Dyev39ZM.js";import"./fillDefinitions-BXMuCbY2.js";import"./CartesianChart-AmmyZjSo.js";import"./chartDataContext-Q7_H0Fyo.js";import"./CategoricalChart-mubfvuGW.js";import"./CartesianAxis-8eiEJoC1.js";import"./Layer-Db_exIRl.js";import"./Text-BiLv0S0Y.js";import"./ZIndexLayer-OHuleK-j.js";import"./Label-ZGXU1are.js";import"./types-DgDe6MQb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DH6a8AH_.js";import"./symbol-CSHS3Q6e.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CendnaSI.js";import"./uniqBy-CLumAGO5.js";import"./iteratee-B1mbQ6FI.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C_M0JkPD.js";import"./step-BAe_ZTJZ.js";import"./dataEntryStyles-BARWQZ2-.js";import"./ActivePoints-mf0f4bpo.js";import"./Dot-DD7kJ9X3.js";import"./activeStyles-BxZootHE.js";import"./useAnimationId-CSNfiiSW.js";import"./ErrorBarContext-BeNGW58S.js";import"./SetGraphicalItem-RJE-RN3x.js";import"./getRadiusAndStrokeWidthFromDot-CwS8CmXh.js";import"./ActiveShapeUtils-Dx41DMd2.js";import"./useEffectiveDataKey-Djw6ESIG.js";import"./Cross-DCShNf2L.js";import"./Rectangle-CRyPjtQg.js";import"./util-Dxo8gN5i.js";import"./Sector-P1tYRqCr.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
