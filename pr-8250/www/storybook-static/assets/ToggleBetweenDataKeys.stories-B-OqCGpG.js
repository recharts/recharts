import{r as p,R as t}from"./iframe-WBbNNnuy.js";import{L as n}from"./LineChart-B4Yh12HY.js";import{R as s}from"./zIndexSlice-tUIWaJXi.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DGZxWtdu.js";import{X as d}from"./XAxis-D4ryVEq0.js";import{Y as y}from"./YAxis-BvxL6veE.js";import{L as u}from"./Legend-BCZHr7ks.js";import{L as h}from"./Line-By_II2b6.js";import{T as g}from"./Tooltip-DO_kcQZm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-KCZFV5Qp.js";import"./resolveDefaultProps-BQVAzGvB.js";import"./get-cF5BDHN6.js";import"./axisSelectors-BsjG_ZcL.js";import"./throttle-BZsWSkxT.js";import"./index-r4gbZ-og.js";import"./index-lLL3p07g.js";import"./polarAxisSelectors-BgsSPbjL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmTpsTXt.js";import"./index-Z7LA0nwu.js";import"./index-DfAsO6-W.js";import"./renderedTicksSlice-Dwvf-gTi.js";import"./index-UohdA6tU.js";import"./fillDefinitions-mDThsQp_.js";import"./CartesianChart-CMzbfvn4.js";import"./chartDataContext-FFlBnRja.js";import"./CategoricalChart-DYbe0UIE.js";import"./CartesianAxis-d7TJLpW4.js";import"./Layer-B9NKZG1g.js";import"./Text-BMtYTGtz.js";import"./ZIndexLayer-BKvRHpsJ.js";import"./Label-C7oootOX.js";import"./types-DJHF32C4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BMJzxDY-.js";import"./symbol-Cy3OnQKT.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BXgxBoqY.js";import"./uniqBy-CZ2AwJLU.js";import"./iteratee-ZB0s3k9M.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BJbGVYFk.js";import"./Curve-DgOptS1N.js";import"./step-sID4B3fn.js";import"./dataEntryStyles-DB--RtiY.js";import"./ActivePoints-CufioKrW.js";import"./Dot-CWYAFnGF.js";import"./activeStyles-CA5Mddf7.js";import"./useAnimationId-Cxl9dyaW.js";import"./ErrorBarContext-DyCR_fdR.js";import"./SetGraphicalItem-TF5VFMkr.js";import"./ActiveShapeUtils-DuPu1Vop.js";import"./useEffectiveDataKey-CNDMCH51.js";import"./Cross-CGrYZ8gF.js";import"./Rectangle-B8WyH4x0.js";import"./util-Dxo8gN5i.js";import"./Sector-A4RtaUVu.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
