import{r as n,e as t}from"./iframe-DRECDyJu.js";import{L as p}from"./LineChart-B5VdUSCp.js";import{R as s}from"./arrayEqualityCheck-CwmcLezE.js";import{C as c}from"./CartesianGrid-TIXS1aWN.js";import{X as l}from"./XAxis-0kgYDqpD.js";import{Y as d}from"./YAxis-DS55SlTE.js";import{L as y}from"./Legend-B1J7sLGS.js";import{L as h}from"./Line-61OvPZ-Q.js";import{T as u}from"./Tooltip-CUUuqGsi.js";import{R as g}from"./RechartsHookInspector-CkXF-mFA.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CU5EzhmX.js";import"./hooks-CjbPLp91.js";import"./axisSelectors-B-ON6UuJ.js";import"./zIndexSlice-DfG_LBZH.js";import"./renderedTicksSlice-BLRX00yy.js";import"./resolveDefaultProps-BL8CG5Be.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B_9qra-d.js";import"./chartDataContext-D1nxolyM.js";import"./CategoricalChart-B6UPKjrz.js";import"./CartesianAxis-BgGI7FTB.js";import"./Layer-BVdUfIl0.js";import"./Text-DYPz2gV9.js";import"./DOMUtils-bfarr5el.js";import"./Label-CYBLI-Y2.js";import"./ZIndexLayer-DsAf8BK3.js";import"./types-BSPZHGNH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-4bVcflIB.js";import"./Curve-BflKxEFk.js";import"./useElementOffset-Cf8ftoIX.js";import"./iteratee-BVIXGgQH.js";import"./ReactUtils--6xJa5xj.js";import"./ActivePoints-BT3fRugx.js";import"./Dot-B6Z1yhin.js";import"./RegisterGraphicalItemId-CnbfgSt4.js";import"./ErrorBarContext-Du4SjFis.js";import"./GraphicalItemClipPath-Cm2-R3a1.js";import"./SetGraphicalItem-BUqWhQAE.js";import"./useAnimationId-DgWDlavz.js";import"./getRadiusAndStrokeWidthFromDot-Db6__9I1.js";import"./ActiveShapeUtils-BIKdmm5h.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bt3TSPnX.js";import"./Trapezoid-D7oKFicN.js";import"./Sector-DGNmg5hs.js";import"./Cross-DS7dKe1G.js";import"./index-2vD-No8t.js";import"./ChartSizeDimensions-EJWE07nJ.js";import"./OffsetShower-Dgs61RIJ.js";import"./PlotAreaShower-B71aiz9a.js";const Kt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,ft as __namedExportsOrder,Kt as default};
