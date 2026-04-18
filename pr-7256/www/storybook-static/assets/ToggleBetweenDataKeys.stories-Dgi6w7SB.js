import{r as n,e as t}from"./iframe-C4HM3tOf.js";import{L as p}from"./LineChart-CrAxHQY-.js";import{R as s}from"./arrayEqualityCheck-pVd2ZEAL.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BbPisY8H.js";import{X as d}from"./XAxis-BK6oNET2.js";import{Y as y}from"./YAxis-BtziLXcq.js";import{L as h}from"./Legend-CeIE24ND.js";import{L as u}from"./Line--jw4iogU.js";import{T as g}from"./Tooltip-C-o5KbGY.js";import{R as K}from"./RechartsHookInspector-Dl-njr8g.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CsUVNyak.js";import"./index-fnqQxzGI.js";import"./immer-DKT0L4DC.js";import"./hooks-BGwRhZ9s.js";import"./axisSelectors-q2a6ivV9.js";import"./d3-scale-LcYjb00Y.js";import"./zIndexSlice-B6fkFiXD.js";import"./renderedTicksSlice-D0u-pzQU.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-zslZnBEv.js";import"./chartDataContext-11WBovGQ.js";import"./CategoricalChart-CnCIIeeu.js";import"./resolveDefaultProps-DIrfype3.js";import"./CartesianAxis-BrQUtBdm.js";import"./Layer-BI5SY9Q3.js";import"./Text-Cpkro7uK.js";import"./DOMUtils-CuJDrrCS.js";import"./Label-95NTi3lP.js";import"./ZIndexLayer-hyQhvrxG.js";import"./types-DhPv2WtL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DcdiuJ8X.js";import"./symbol-CU7O9hm_.js";import"./step-Bw_J3Aex.js";import"./useElementOffset-DzbAKatV.js";import"./uniqBy-8PxkX1wT.js";import"./iteratee-Dv6XlQG0.js";import"./ReactUtils-NJDufUbJ.js";import"./ActivePoints-BfIabrgE.js";import"./Dot-V_SCRyyA.js";import"./RegisterGraphicalItemId-lR-7WV2p.js";import"./ErrorBarContext-CuIz_GNg.js";import"./GraphicalItemClipPath-BLanLC3n.js";import"./SetGraphicalItem-Cgab4IqB.js";import"./useAnimationId-G20N3axR.js";import"./getRadiusAndStrokeWidthFromDot-xmz8CGWl.js";import"./ActiveShapeUtils-CmP6-7kE.js";import"./isPlainObject-CF48X339.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DkO9lidd.js";import"./Trapezoid-nYgyRJct.js";import"./Sector-D93eAIbO.js";import"./Curve-CTxT4HGO.js";import"./Cross-DhoUqqES.js";import"./index-D1Vpw6AQ.js";import"./ChartSizeDimensions-C5dCDLnk.js";import"./OffsetShower-DOxYEgNi.js";import"./PlotAreaShower-BwQpOYoG.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
