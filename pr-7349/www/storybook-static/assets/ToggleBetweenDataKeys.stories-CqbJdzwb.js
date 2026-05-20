import{u as n,e as t}from"./iframe-8-kjzB7M.js";import{L as p}from"./LineChart-CfV8y1rm.js";import{g as s}from"./arrayEqualityCheck-BFH1E3k_.js";import{p as c}from"./Page-DPte-9pC.js";import{C as l}from"./CartesianGrid-5LdghmkZ.js";import{X as d}from"./XAxis-D2S2cmnw.js";import{Y as u}from"./YAxis-DaRq7QHm.js";import{L as y}from"./Legend-C7Cn7Hy2.js";import{L as h}from"./Line-CGldzIuh.js";import{T as g}from"./Tooltip-DE4719SA.js";import{R as K}from"./RechartsHookInspector-CM7h1fuc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B7ei5y6q.js";import"./index-B7HOuyLw.js";import"./immer-DyK63VIN.js";import"./hooks-D7HTiiCO.js";import"./axisSelectors-BNYuZguV.js";import"./d3-scale-CQtZ6VlM.js";import"./zIndexSlice-RoK7gDNz.js";import"./renderedTicksSlice-B1hkz5RK.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DIcUCgdK.js";import"./chartDataContext-B5w2WfFE.js";import"./CategoricalChart-BSYInFMU.js";import"./resolveDefaultProps-DEBbAbU8.js";import"./CartesianAxis-CXWQlOps.js";import"./Layer-CzqQGym9.js";import"./Text-CoxxW3ZN.js";import"./DOMUtils-DlGm6rgl.js";import"./Label-DM3VCT7K.js";import"./ZIndexLayer-BFtzmC6W.js";import"./types-BtLx_F1t.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-7Fs_OGmI.js";import"./symbol-Dvj3tO81.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D5qXLcar.js";import"./uniqBy-twvRpSaZ.js";import"./iteratee-C5SgYX63.js";import"./Curve-D8ZMrIKx.js";import"./step-BPajIDVN.js";import"./ReactUtils-CewVIgMM.js";import"./ActivePoints-B6bRCrz9.js";import"./Dot-kp7349vp.js";import"./RegisterGraphicalItemId-CmJN5Y2e.js";import"./ErrorBarContext-DcV-oeSm.js";import"./GraphicalItemClipPath-CVE49Uj3.js";import"./SetGraphicalItem-DKHyStui.js";import"./useAnimationId-R2tEawoj.js";import"./getRadiusAndStrokeWidthFromDot-DEvwWVK6.js";import"./ActiveShapeUtils-B64sWmQr.js";import"./isPlainObject-Dd1Ki_ZE.js";import"./isPlainObject-BSutPv-K.js";import"./Cross-GdDzPHQX.js";import"./Rectangle-9KTCJgL8.js";import"./Sector-BTU-7R8c.js";import"./index-DmSQVuHS.js";import"./ChartSizeDimensions-C53bqH85.js";import"./OffsetShower-Ba6R23wJ.js";import"./PlotAreaShower-mh0ASj0Y.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(u,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
