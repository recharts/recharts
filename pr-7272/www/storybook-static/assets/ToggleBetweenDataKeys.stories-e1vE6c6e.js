import{r as n,e as t}from"./iframe-4M-PkSVA.js";import{L as p}from"./LineChart-BiL_LWr4.js";import{R as s}from"./arrayEqualityCheck-9hxUK6as.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-nYy4jpOg.js";import{X as d}from"./XAxis-B7sM9A7a.js";import{Y as y}from"./YAxis-C60ythyu.js";import{L as h}from"./Legend-3mUH7dlR.js";import{L as u}from"./Line-D_MzNqOr.js";import{T as g}from"./Tooltip-De74R3pt.js";import{R as K}from"./RechartsHookInspector-Bu2v4BgA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ct_1KIIG.js";import"./index-QhWebp7-.js";import"./immer-CY9nZJ0O.js";import"./hooks-0Lo_6wsQ.js";import"./axisSelectors-DzylQYKT.js";import"./d3-scale-CUJe2CI0.js";import"./zIndexSlice-Bg894_FJ.js";import"./renderedTicksSlice-BOIzxlRf.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cd9DDcz_.js";import"./chartDataContext-D4ebhXUv.js";import"./CategoricalChart-DBff51gh.js";import"./resolveDefaultProps-CYaStK-U.js";import"./CartesianAxis-sJnvrLg-.js";import"./Layer-CSsW14jT.js";import"./Text-CVSiM3-K.js";import"./DOMUtils-BLTsClHS.js";import"./Label-HHw2Wo4F.js";import"./ZIndexLayer-BqzZgYR4.js";import"./types-BizJXa69.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BWbej2Re.js";import"./symbol-gex8G6F3.js";import"./step-r2s_c4Hj.js";import"./useElementOffset-BZIewUIl.js";import"./uniqBy-DPlNb1BK.js";import"./iteratee-Bmve8k8U.js";import"./ReactUtils-CI9blSHi.js";import"./ActivePoints-nfCLLA3v.js";import"./Dot-CBjfGKvy.js";import"./RegisterGraphicalItemId-D74ncS90.js";import"./ErrorBarContext-B-CC6fNm.js";import"./GraphicalItemClipPath-ClTLLJGZ.js";import"./SetGraphicalItem-BO1ROXvb.js";import"./useAnimationId-AkEyWWXN.js";import"./getRadiusAndStrokeWidthFromDot-BjOpwIux.js";import"./ActiveShapeUtils-BtPvL2qu.js";import"./isPlainObject-C0kslINo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B8e1dRmE.js";import"./Trapezoid-DJP_R3rw.js";import"./Sector-DG5p09xu.js";import"./Curve-DGVbHr3U.js";import"./Cross-RK1OZlef.js";import"./index-1NSbHYzy.js";import"./ChartSizeDimensions-CyhagkHh.js";import"./OffsetShower-D5VKQHJL.js";import"./PlotAreaShower-CwVyk3um.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
