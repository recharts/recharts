import{r as n,e as t}from"./iframe-Dh5fYf52.js";import{L as p}from"./LineChart-BROBluXG.js";import{R as s}from"./arrayEqualityCheck-y3xWNCWZ.js";import{C as c}from"./CartesianGrid-BsnolCxr.js";import{X as l}from"./XAxis-B4KbS6If.js";import{Y as d}from"./YAxis-Dit0gXUW.js";import{L as y}from"./Legend-BXP3HtY4.js";import{L as h}from"./Line-CBLpAldI.js";import{T as u}from"./Tooltip-BvzegrEC.js";import{R as g}from"./RechartsHookInspector-ClQgWiSn.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B9qWPH0f.js";import"./hooks-e_pos7oA.js";import"./axisSelectors-D3iLKS-b.js";import"./zIndexSlice-DOeznw_J.js";import"./resolveDefaultProps-BCuzZFIX.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-BLNnKMYl.js";import"./chartDataContext-BW7kgRyE.js";import"./CategoricalChart-D_2x8xbQ.js";import"./CartesianAxis-DxoskIqi.js";import"./Layer-CyyRPVZz.js";import"./Text-CCyTgoDW.js";import"./DOMUtils-CdAxT0DP.js";import"./Label-BgIRNGCU.js";import"./ZIndexLayer-Chf-nD0r.js";import"./types-BQGztJ7o.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CE_RrRcr.js";import"./Curve-BtY66874.js";import"./useElementOffset-ByMR83Id.js";import"./iteratee-CVT0hwhC.js";import"./ReactUtils-DdUIndVV.js";import"./ActivePoints-gq73oefV.js";import"./Dot-B05UwBke.js";import"./RegisterGraphicalItemId-dPya34ZY.js";import"./ErrorBarContext-CiVkLetL.js";import"./GraphicalItemClipPath-Cuekam0c.js";import"./SetGraphicalItem-DoysDgrz.js";import"./useAnimationId-hVsf5NM-.js";import"./getRadiusAndStrokeWidthFromDot-B6ckmWt2.js";import"./ActiveShapeUtils-vg5OHeFZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CNvS8JgY.js";import"./Trapezoid-B-DbXUKn.js";import"./Sector-Boq0fYwI.js";import"./Cross-36hpk71i.js";import"./index-AL6ZY6S6.js";import"./ChartSizeDimensions-CLcrLXEy.js";import"./OffsetShower-cs_5-XLY.js";import"./PlotAreaShower-CX2JG_yj.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
