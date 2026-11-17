import{r as p,R as t}from"./iframe-SOI7ETqc.js";import{L as n}from"./LineChart-DEPTFN-t.js";import{R as s}from"./zIndexSlice-BU6oUWx4.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BAWvBOLm.js";import{X as d}from"./XAxis-gIhRIlH1.js";import{Y as y}from"./YAxis-Du2dgY78.js";import{L as u}from"./Legend-V_mjAzcs.js";import{L as h}from"./Line-DxuNXVKF.js";import{T as g}from"./Tooltip-ouyy3uAo.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-2ihhOObz.js";import"./resolveDefaultProps-BpnJBtrD.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DhazdA5O.js";import"./throttle-BuYpA644.js";import"./index-Code9Alh.js";import"./index-RwN-WdR-.js";import"./polarAxisSelectors-C18_Wica.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-3TBblIj9.js";import"./index-B7zG0fHt.js";import"./index-QpX9BTHL.js";import"./renderedTicksSlice-B4lGJD7y.js";import"./index-C2xwEmrx.js";import"./fillDefinitions-C3mr1Tm6.js";import"./CartesianChart-D5ZzAIe3.js";import"./chartDataContext-8RiMC0Sw.js";import"./CategoricalChart-D1aUY5yi.js";import"./CartesianAxis-CkyCX2PR.js";import"./Layer-BdUzTy7V.js";import"./Text-CVVDOvxk.js";import"./ZIndexLayer-uSStm6JU.js";import"./Label-_MgncHEc.js";import"./types-DLi1Gmf3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-D5dhbVXH.js";import"./symbol-D7DCXDTW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DtBbnSGS.js";import"./uniqBy-C8wr_V1k.js";import"./iteratee-BgCV5Vfx.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CdssLho3.js";import"./Curve-B541BDSp.js";import"./step-B7wEb5SP.js";import"./dataEntryStyles-Dm-FbuH_.js";import"./ActivePoints-D6TlCm2l.js";import"./Dot-QFOGovAa.js";import"./activeStyles--vF_fmID.js";import"./useAnimationId-C4SjfD_p.js";import"./ErrorBarContext-DHxWeWr-.js";import"./SetGraphicalItem-CGNGdUIc.js";import"./ActiveShapeUtils-BXeGDetF.js";import"./useEffectiveDataKey-B6JvOkpp.js";import"./Cross-6WxxuO1-.js";import"./Rectangle-BKn3hEIk.js";import"./util-Dxo8gN5i.js";import"./Sector-BOLNzO_s.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
