import{r as n,e as t}from"./iframe-CcieUljj.js";import{L as p}from"./LineChart-xMgbRn3o.js";import{R as s}from"./arrayEqualityCheck-CBSvOn2m.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DcWHz-6f.js";import{X as d}from"./XAxis-DRW_fzsF.js";import{Y as y}from"./YAxis-ChIRv6Dr.js";import{L as h}from"./Legend-DJWPsUvs.js";import{L as u}from"./Line-DSrWZJOK.js";import{T as g}from"./Tooltip-DPG6Xagy.js";import{R as K}from"./RechartsHookInspector-gpfAdvlL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CNR_n_x6.js";import"./index-Dbc8u9bF.js";import"./immer-CRL2VYbe.js";import"./hooks-DPwXI4Gw.js";import"./axisSelectors-Pbek4Jez.js";import"./d3-scale-CoPY6zJ-.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-COf-5-fj.js";import"./renderedTicksSlice-OQ158BwU.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-OaoDdpk7.js";import"./chartDataContext-CVz5YgWY.js";import"./CategoricalChart-B0CWPrGL.js";import"./resolveDefaultProps-DtzB7iWl.js";import"./CartesianAxis-y4_48Kdj.js";import"./Layer-kYv4pH7g.js";import"./Text-ByRBAoo5.js";import"./DOMUtils-CgPYrlEh.js";import"./Label-x_qN36Er.js";import"./ZIndexLayer-BJKRgvH9.js";import"./types-CacpOb3i.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CuWHy7F-.js";import"./symbol-iKW_0e7L.js";import"./step-CgpTw60r.js";import"./useElementOffset-CqK0Vxa0.js";import"./uniqBy-Biztq0Nb.js";import"./iteratee-DlqS2PSY.js";import"./Curve-Bx8QBaeT.js";import"./AnimatedItems-RMCtBAwF.js";import"./useAnimationId-DddwMKxX.js";import"./ActivePoints-QoER0D4T.js";import"./Dot-D5mPo0FX.js";import"./RegisterGraphicalItemId-BJxOIzsy.js";import"./ErrorBarContext-DmagIxUm.js";import"./GraphicalItemClipPath-Cd4vnEzu.js";import"./SetGraphicalItem-Dz7oH1lw.js";import"./getRadiusAndStrokeWidthFromDot-9l7PqCbK.js";import"./ActiveShapeUtils-OiQWsOUN.js";import"./isPlainObject-DI_W5C57.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Z_JKhr7t.js";import"./Trapezoid-CWN34y2W.js";import"./Sector-BSfRVALc.js";import"./Cross-C0sTfzMc.js";import"./index-Ca5GsAAq.js";import"./ChartSizeDimensions-C-S9llVm.js";import"./OffsetShower-B6NxlzmC.js";import"./PlotAreaShower-DQmFSr8w.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Rt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,xt as default};
