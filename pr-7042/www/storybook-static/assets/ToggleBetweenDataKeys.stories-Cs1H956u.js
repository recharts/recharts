import{r as n,e as t}from"./iframe-DRzfceQj.js";import{L as p}from"./LineChart-CzWBWYeJ.js";import{R as s}from"./arrayEqualityCheck-rosVEDiH.js";import{C as c}from"./CartesianGrid-Bod_OhoR.js";import{X as l}from"./XAxis-sc_rEheo.js";import{Y as d}from"./YAxis-BpCe0zSN.js";import{L as y}from"./Legend-DwKEpTo-.js";import{L as h}from"./Line-CrboDBA_.js";import{T as u}from"./Tooltip-C9Wej-Po.js";import{R as g}from"./RechartsHookInspector-iKfkRHZC.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cr19GrQC.js";import"./index-DhdVzYen.js";import"./immer-CpErEFQU.js";import"./hooks-BGhayb2I.js";import"./axisSelectors-KcSamBS9.js";import"./d3-scale-DMFBv7ef.js";import"./zIndexSlice-DFfzt0na.js";import"./renderedTicksSlice-WbT8TKLW.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BpAHu02o.js";import"./chartDataContext-uibfkBE8.js";import"./CategoricalChart-BFsoF5NC.js";import"./resolveDefaultProps-Yo3rtldJ.js";import"./CartesianAxis-BV4F2Vv5.js";import"./Layer-sUtHTMZe.js";import"./Text-5VoS0hOZ.js";import"./DOMUtils-D7MRyEG_.js";import"./Label-CCBnxLca.js";import"./ZIndexLayer-rLB6bkwI.js";import"./types-BIqkUGja.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DyXfCvIa.js";import"./symbol-CU4mK3u6.js";import"./step-vYfigx3D.js";import"./useElementOffset-wTQHzrQk.js";import"./uniqBy-ZzEWeyVO.js";import"./iteratee-C0r1GGCu.js";import"./ReactUtils-BLIIVErJ.js";import"./ActivePoints-CuDefpBg.js";import"./Dot-Dx5TMf-G.js";import"./RegisterGraphicalItemId-CA-NkALt.js";import"./ErrorBarContext-CVJ7HQM6.js";import"./GraphicalItemClipPath-C-4x0c47.js";import"./SetGraphicalItem-DmvCdKvK.js";import"./useAnimationId-B4oBcBYL.js";import"./getRadiusAndStrokeWidthFromDot-geV46oeC.js";import"./ActiveShapeUtils-sMNt0TF2.js";import"./isPlainObject-8xjKwYHh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CbvKmtU7.js";import"./Trapezoid-DfLXoIUq.js";import"./Sector-BA0kpTkH.js";import"./Curve-BAw1ZqwZ.js";import"./Cross-CNIwZKWO.js";import"./index-DKayDJ64.js";import"./ChartSizeDimensions-BcANsdLL.js";import"./OffsetShower-MalEY5Hj.js";import"./PlotAreaShower-BKiBhzbZ.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
