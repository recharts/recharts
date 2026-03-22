import{r as n,e as t}from"./iframe-CiMhD8Yi.js";import{L as p}from"./LineChart--8r-B4sb.js";import{R as s}from"./arrayEqualityCheck-C4O-CzLw.js";import{C as c}from"./CartesianGrid-BBZoUAF6.js";import{X as l}from"./XAxis-D-t29Sci.js";import{Y as d}from"./YAxis-BH2fpgYY.js";import{L as y}from"./Legend-BIi7A0Z0.js";import{L as h}from"./Line-CMYBg4Xl.js";import{T as u}from"./Tooltip-D071zqlv.js";import{R as g}from"./RechartsHookInspector-DxnuxuTf.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ls9LAbQq.js";import"./index-CPsAC65v.js";import"./immer-BJk0N9d3.js";import"./hooks-DSwKjRVl.js";import"./axisSelectors-B3rHRVnt.js";import"./d3-scale-DI-LuBEQ.js";import"./zIndexSlice-CiVq3vLn.js";import"./renderedTicksSlice-Bf1zdGqK.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DO4e4HPA.js";import"./chartDataContext-DSmgJVpn.js";import"./CategoricalChart-BZ0q9dh3.js";import"./resolveDefaultProps-B6aPzm2T.js";import"./CartesianAxis-CW_epPWP.js";import"./Layer-C8wFYCI6.js";import"./Text-DqREd9W9.js";import"./DOMUtils-g-POG1C4.js";import"./Label-CI8CQ0nH.js";import"./ZIndexLayer-BkTc8o4k.js";import"./types-Dhvr5bGX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BFS1edpX.js";import"./symbol-DXdYs-sB.js";import"./step-CCWyWrm4.js";import"./useElementOffset-D2OZi3HS.js";import"./uniqBy-BAtehLqm.js";import"./iteratee-rXVvmz2W.js";import"./ReactUtils-DRjJkC3p.js";import"./ActivePoints-CO0qgypy.js";import"./Dot-CyRHVoZw.js";import"./RegisterGraphicalItemId-CiaBhgsv.js";import"./ErrorBarContext-La6ve25h.js";import"./GraphicalItemClipPath-BcJMjVwL.js";import"./SetGraphicalItem-CYrsSIGQ.js";import"./useAnimationId-BtEj36rQ.js";import"./getRadiusAndStrokeWidthFromDot-CpgyNr8P.js";import"./ActiveShapeUtils-SHiIggQV.js";import"./isPlainObject-B44yGdGL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CDjbeOfv.js";import"./Trapezoid-D3spGrIN.js";import"./Sector-CizUgWtz.js";import"./Curve-HKI06HW2.js";import"./Cross-DMkst_1a.js";import"./index-DJX1_Qw4.js";import"./ChartSizeDimensions-0tNXvVd7.js";import"./OffsetShower-Cmsq4yeV.js";import"./PlotAreaShower-BWgVdI6o.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
