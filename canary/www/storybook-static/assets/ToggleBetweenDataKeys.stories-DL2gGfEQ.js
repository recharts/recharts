import{r as n,e as t}from"./iframe-BucFZ_rI.js";import{L as p}from"./LineChart-DkZDwCQU.js";import{R as s}from"./arrayEqualityCheck-Cub9yyg8.js";import{C as c}from"./CartesianGrid-k2NHIDcT.js";import{X as l}from"./XAxis-ClQb6fgI.js";import{Y as d}from"./YAxis-H-QqP90D.js";import{L as y}from"./Legend-CyYfs9k5.js";import{L as h}from"./Line-Cd2y3VXM.js";import{T as u}from"./Tooltip-D-ogW5dy.js";import{R as g}from"./RechartsHookInspector-DS-kex3x.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-i9ArJ6TM.js";import"./hooks-CMyWVrIA.js";import"./axisSelectors-BCa6g1kh.js";import"./zIndexSlice-DdWCw1KG.js";import"./resolveDefaultProps-B03Au56-.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DZyhln5E.js";import"./chartDataContext-Ce-1EmfI.js";import"./CategoricalChart-CgTXpeDi.js";import"./CartesianAxis-CXwjW_bT.js";import"./Layer-CF_MVGlz.js";import"./Text-svvcwPPD.js";import"./DOMUtils-CBBy-RCP.js";import"./Label-9_EmwvzQ.js";import"./ZIndexLayer-L4xm7ML-.js";import"./types-ClOjhPxm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-oEWjslm_.js";import"./Curve-DctSWulj.js";import"./useElementOffset-CogdzziS.js";import"./iteratee-DC9p_Pgd.js";import"./ReactUtils-Bzngk0QG.js";import"./ActivePoints-Cj-4yTg7.js";import"./Dot-DIY2dqYP.js";import"./RegisterGraphicalItemId-BEasT3d7.js";import"./ErrorBarContext-B9myFNJx.js";import"./GraphicalItemClipPath-DkF2Uro5.js";import"./SetGraphicalItem-CNbOq2T5.js";import"./useAnimationId-aMKT9xva.js";import"./getRadiusAndStrokeWidthFromDot-Bz3A-CCh.js";import"./ActiveShapeUtils-AjngprED.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-kS3taT6f.js";import"./Trapezoid-Dws_Jj0J.js";import"./Sector-BsDsJ4xC.js";import"./Cross-BN2mae7P.js";import"./index-B0oRtae4.js";import"./ChartSizeDimensions-wcbhDTBa.js";import"./OffsetShower-DrBH3Pp2.js";import"./PlotAreaShower-CmZTeEbv.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
