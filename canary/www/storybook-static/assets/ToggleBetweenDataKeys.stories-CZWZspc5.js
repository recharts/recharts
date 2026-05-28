import{u as n,e as t}from"./iframe-B1pz1HPh.js";import{L as p}from"./LineChart-ZrG9ajDl.js";import{g as s}from"./arrayEqualityCheck-CGszzuoD.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-DO8_5Fqv.js";import{X as d}from"./XAxis-BVzuhrCO.js";import{Y as u}from"./YAxis-CEBdEAk1.js";import{L as y}from"./Legend-P1HE0pVr.js";import{L as h}from"./Line-CPHgJ6LO.js";import{T as g}from"./Tooltip-Ck0ufXZT.js";import{R as K}from"./RechartsHookInspector-Ba9PVlAC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B_DMEy6X.js";import"./index-CONuoc65.js";import"./immer-D5ZK6-zj.js";import"./hooks-_Fqb7rcn.js";import"./axisSelectors-rNwEbhlr.js";import"./d3-scale-COb-tvd6.js";import"./zIndexSlice-D685U5bi.js";import"./renderedTicksSlice-CvGe_rQ2.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DW92cNBQ.js";import"./chartDataContext-CaM10qH-.js";import"./CategoricalChart-Bv4j4Ty_.js";import"./resolveDefaultProps-BMF326Ad.js";import"./CartesianAxis-C3QEFHfw.js";import"./Layer-hEcP7t1Y.js";import"./Text-ZPZaoHNl.js";import"./DOMUtils-CC-NDZXa.js";import"./Label-C7IOirY6.js";import"./ZIndexLayer-B25MTFPC.js";import"./types-pm80QyIf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DBDx59CA.js";import"./symbol-CkudipdP.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dj-I9x6j.js";import"./uniqBy-Bz1DY9a7.js";import"./iteratee-ClpoV93B.js";import"./Curve-B-sQG2bq.js";import"./step-C-YdGbob.js";import"./ReactUtils-D8aneK3l.js";import"./ActivePoints-B2GiDi4o.js";import"./Dot-ISDNc-Qe.js";import"./RegisterGraphicalItemId-xTBgBnJK.js";import"./ErrorBarContext-uQPI7qhW.js";import"./GraphicalItemClipPath-uUb78tLM.js";import"./SetGraphicalItem-CRAPBDcO.js";import"./useAnimationId-DfZh1iG1.js";import"./getRadiusAndStrokeWidthFromDot--ZrL2R-3.js";import"./ActiveShapeUtils-vc7pcnW8.js";import"./Cross-xY40VCyk.js";import"./Rectangle-H0q-eroK.js";import"./Sector-BxI8FLBr.js";import"./index-rYM0k6kK.js";import"./ChartSizeDimensions-DucsnCfP.js";import"./OffsetShower-C5l1TQVl.js";import"./PlotAreaShower-D97eaCHy.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,Lt as default};
