import{r as n,e as t}from"./iframe-DkLawzFT.js";import{L as p}from"./LineChart-SbKxO_Xd.js";import{R as s}from"./arrayEqualityCheck-D3l_Six5.js";import{C as c}from"./CartesianGrid-DRBqNtxc.js";import{X as l}from"./XAxis-Bhs0VEqV.js";import{Y as d}from"./YAxis-DUSsUT3d.js";import{L as y}from"./Legend-Bobh9C2T.js";import{L as h}from"./Line-CZNl7Zx1.js";import{T as u}from"./Tooltip-N6gruFKC.js";import{R as g}from"./RechartsHookInspector-CP5-3lHb.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ZZ9SYGf8.js";import"./index-BAEjUqpG.js";import"./immer-BgQ6ewOL.js";import"./hooks-mxsXvsXQ.js";import"./axisSelectors-WJrRsxNm.js";import"./d3-scale-CQPtLnPq.js";import"./zIndexSlice-D7gaPfmN.js";import"./renderedTicksSlice-CxLVT98p.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B_kqxRby.js";import"./chartDataContext-BQhtyhGa.js";import"./CategoricalChart-ClWY8mqV.js";import"./resolveDefaultProps-BrteeSnw.js";import"./CartesianAxis-B2aKO3V6.js";import"./Layer-D1t_xfer.js";import"./Text-Cnf9BrSi.js";import"./DOMUtils-CeS2jzYu.js";import"./Label-B8g-EXnh.js";import"./ZIndexLayer-BzQ04t8l.js";import"./types-BodbCBWC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BESx1iMX.js";import"./symbol-yD_N7Rt-.js";import"./step-BKMOa0zg.js";import"./useElementOffset-kARJ2Ib4.js";import"./uniqBy-De2uIt7f.js";import"./iteratee-py5Iz_wR.js";import"./ReactUtils-0q8uPUdp.js";import"./ActivePoints-Fx_zKUSB.js";import"./Dot-Dka2WOg7.js";import"./RegisterGraphicalItemId-Sw1cCXMw.js";import"./ErrorBarContext-BlXGa7jj.js";import"./GraphicalItemClipPath-BMzTlgpv.js";import"./SetGraphicalItem-CQ9RSPfd.js";import"./useAnimationId-ndVuSCuU.js";import"./getRadiusAndStrokeWidthFromDot-CfgE0Jeh.js";import"./ActiveShapeUtils-CYrS0ywm.js";import"./isPlainObject-Dna09QVC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BmL8vsSC.js";import"./Trapezoid-DgQekCnf.js";import"./Sector-CQDhqwWL.js";import"./Curve-BHXnsRVh.js";import"./Cross-BTts5VZh.js";import"./index-ClmqdCp3.js";import"./ChartSizeDimensions-sxZZm2vK.js";import"./OffsetShower-Bbq9KY1d.js";import"./PlotAreaShower-BpZ3JX6M.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
