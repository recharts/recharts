import{r as n,e as t}from"./iframe-C1fnHnKT.js";import{L as p}from"./LineChart-DtqLvayy.js";import{R as s}from"./arrayEqualityCheck-l6uT4Usv.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B9SN2r-G.js";import{X as d}from"./XAxis-CQ2fda0r.js";import{Y as y}from"./YAxis-BUT98NPf.js";import{L as h}from"./Legend-G_ecBUX0.js";import{L as u}from"./Line-CMzeYv-o.js";import{T as g}from"./Tooltip-Ddj6ae9D.js";import{R as K}from"./RechartsHookInspector-ewceuCfq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CsoN9NQZ.js";import"./index-C2jDSQT9.js";import"./immer-hlXcvFio.js";import"./hooks-D4TdCpxu.js";import"./axisSelectors-AIxg2YTu.js";import"./d3-scale-Br8Qy1nV.js";import"./zIndexSlice-BoAv0LH1.js";import"./renderedTicksSlice-DAUXyaQX.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DJhd_WoR.js";import"./chartDataContext-DOE3KdCn.js";import"./CategoricalChart-oohW2fAH.js";import"./resolveDefaultProps-0awOkESO.js";import"./CartesianAxis-CluKEQWr.js";import"./Layer-BIYNx1xN.js";import"./Text-BUAHuXAg.js";import"./DOMUtils-CXwfjRJu.js";import"./Label-8_9z-Hx3.js";import"./ZIndexLayer-UU7tiK14.js";import"./types-C6vI6gcr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Bo3RkkJn.js";import"./symbol-D-2KK1gt.js";import"./step-BfW9Id0A.js";import"./useElementOffset-B0dtN-Cu.js";import"./uniqBy-Dz2GWYge.js";import"./iteratee-DsiheMqS.js";import"./ReactUtils-Dm1SJpk1.js";import"./ActivePoints-CLnaFdlX.js";import"./Dot-CuqwvLTE.js";import"./RegisterGraphicalItemId-BcT6ipJt.js";import"./ErrorBarContext-BJ-bLhxe.js";import"./GraphicalItemClipPath-_2MLatM1.js";import"./SetGraphicalItem-ByOhwbI-.js";import"./useAnimationId-mn0ugSXH.js";import"./getRadiusAndStrokeWidthFromDot-DMYxlHUI.js";import"./ActiveShapeUtils-CJoqVDNw.js";import"./isPlainObject-BdficFEb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BKvxhVC9.js";import"./Trapezoid-DbflFOBZ.js";import"./Sector-BUT460qv.js";import"./Curve-CnB-6T_0.js";import"./Cross-BtXXbHC_.js";import"./index-BXsfGSea.js";import"./ChartSizeDimensions-Dhy2eg61.js";import"./OffsetShower-C23rQ0FG.js";import"./PlotAreaShower-P9zfdMTd.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
