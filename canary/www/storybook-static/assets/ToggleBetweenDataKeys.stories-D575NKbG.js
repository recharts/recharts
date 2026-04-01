import{r as n,e as t}from"./iframe-DY46aw1T.js";import{L as p}from"./LineChart-D4HeiKmF.js";import{R as s}from"./arrayEqualityCheck-0_K9klWl.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-dk7kWvQd.js";import{X as d}from"./XAxis-_Mr4CO1Y.js";import{Y as y}from"./YAxis-DuAnuVSE.js";import{L as h}from"./Legend-DH9x-Ph_.js";import{L as u}from"./Line-BpqthCpk.js";import{T as g}from"./Tooltip-BIlPfuWE.js";import{R as K}from"./RechartsHookInspector-DkRCe0AE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CSeg5AQz.js";import"./index-D_nfX1S8.js";import"./immer-BvCcuZ6o.js";import"./hooks-nf1zKR0g.js";import"./axisSelectors-C9B6Wugz.js";import"./d3-scale-DfNPAUjz.js";import"./zIndexSlice-CoVcCSuo.js";import"./renderedTicksSlice-D-nZzoJO.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DO22hXPG.js";import"./chartDataContext-DXzlJMXH.js";import"./CategoricalChart-DUj4pKmY.js";import"./resolveDefaultProps-Cb7Us82j.js";import"./CartesianAxis-CK3eGRof.js";import"./Layer-hFhQiM_L.js";import"./Text-BzNExQTR.js";import"./DOMUtils-DGEQ3O38.js";import"./Label-BXRSGziE.js";import"./ZIndexLayer-DnZ_K0Nx.js";import"./types-Dtzv1a1O.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CVBOcrIt.js";import"./symbol-CEFOgOTV.js";import"./step-CyrTl9M_.js";import"./useElementOffset-DwWwMAQX.js";import"./uniqBy-CUYvsV5i.js";import"./iteratee-Dyz53KPO.js";import"./ReactUtils-Cz-9gufx.js";import"./ActivePoints-BQsjSyf0.js";import"./Dot-Bs5nAcv2.js";import"./RegisterGraphicalItemId-wZiFGjJl.js";import"./ErrorBarContext-BdBDnSnf.js";import"./GraphicalItemClipPath-BxX-Y-FU.js";import"./SetGraphicalItem-V1giDG84.js";import"./useAnimationId-Zdg7gWN0.js";import"./getRadiusAndStrokeWidthFromDot-BlOwTSD5.js";import"./ActiveShapeUtils-C_pX6xWx.js";import"./isPlainObject-zUPa-N8J.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BEP5-Dm7.js";import"./Trapezoid-vSPDkj38.js";import"./Sector-BAsKK7Vz.js";import"./Curve-DQutT_ql.js";import"./Cross-FrkejMi3.js";import"./index-Bfh64D8_.js";import"./ChartSizeDimensions-Cyi7sjqL.js";import"./OffsetShower-Ci2ghI7q.js";import"./PlotAreaShower-DdXIA49x.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
