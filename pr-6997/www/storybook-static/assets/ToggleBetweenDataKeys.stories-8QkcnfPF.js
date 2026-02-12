import{r as n,e as t}from"./iframe-D4XW71qE.js";import{L as p}from"./LineChart-BpNlDtJ2.js";import{R as s}from"./arrayEqualityCheck-Ct0H2J7-.js";import{C as c}from"./CartesianGrid-7yO0-lso.js";import{X as l}from"./XAxis-B7adFIe7.js";import{Y as d}from"./YAxis-BzXwxAD2.js";import{L as y}from"./Legend-BUhow01l.js";import{L as h}from"./Line-Ds1mFxVO.js";import{T as u}from"./Tooltip-Du8Gdhpt.js";import{R as g}from"./RechartsHookInspector-9aXKf5pi.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0DDkfJP.js";import"./hooks-B5BtkbT7.js";import"./axisSelectors-DIlwx-_h.js";import"./zIndexSlice-DRfQm_zr.js";import"./resolveDefaultProps-BtLFSBo9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DkcK7QB-.js";import"./chartDataContext-6vD_4ehm.js";import"./CategoricalChart-CiMFuwJC.js";import"./CartesianAxis-8-c0TmU5.js";import"./Layer-_WbjJ9WY.js";import"./Text-B9RQv17s.js";import"./DOMUtils-CsdAV10D.js";import"./Label-B64y4UV8.js";import"./ZIndexLayer-uUtlF8oG.js";import"./types-CVucT5VX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CZhPoTol.js";import"./Curve-BM6HUAhp.js";import"./useElementOffset-Cyi-tiOQ.js";import"./iteratee-_d0iWEtc.js";import"./ReactUtils-Dt1V4s2Z.js";import"./ActivePoints-Dec3rykj.js";import"./Dot-xgW2ThBu.js";import"./RegisterGraphicalItemId-c0aUNxuE.js";import"./ErrorBarContext-CYBrSxT_.js";import"./GraphicalItemClipPath-sDej9Lnv.js";import"./SetGraphicalItem-BB8zeoY-.js";import"./useAnimationId-BXlO72m4.js";import"./getRadiusAndStrokeWidthFromDot-CmN5e2Eb.js";import"./ActiveShapeUtils-BcGwy2uj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CSkUH-X3.js";import"./Trapezoid-BC7P1jMa.js";import"./Sector-AFsZXlCO.js";import"./Cross-f5Oc3nUV.js";import"./index-r8aHoL1L.js";import"./ChartSizeDimensions-YAYg9XQP.js";import"./OffsetShower-D_rHwW7U.js";import"./PlotAreaShower-BEJsFdI1.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Kt as __namedExportsOrder,gt as default};
