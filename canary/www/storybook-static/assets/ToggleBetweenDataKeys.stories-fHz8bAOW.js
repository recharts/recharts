import{r as n,e as t}from"./iframe-Dt4aI4cx.js";import{L as p}from"./LineChart-C9qqUzzx.js";import{R as s}from"./arrayEqualityCheck-Cy9OM50o.js";import{C as c}from"./CartesianGrid-BQzKRVVy.js";import{X as l}from"./XAxis-Cp9OOhUB.js";import{Y as d}from"./YAxis-hzK6Shx7.js";import{L as y}from"./Legend-Cx21nPu-.js";import{L as h}from"./Line-UFT70g__.js";import{T as u}from"./Tooltip-DV0rs3sN.js";import{R as g}from"./RechartsHookInspector-DwUwNTd-.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQTEnB61.js";import"./index-DfJHLdb0.js";import"./immer-yH4a-Hlo.js";import"./hooks-Dm9h8rk1.js";import"./axisSelectors-gtHn-lFq.js";import"./d3-scale-BYMZZ-q_.js";import"./zIndexSlice-w9XFtOqX.js";import"./renderedTicksSlice-DE3C--Q6.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-vzcLi1ES.js";import"./chartDataContext-F8MoEuAy.js";import"./CategoricalChart-yI3i5yFY.js";import"./resolveDefaultProps-CnBFDAwN.js";import"./CartesianAxis-C1sXhNsX.js";import"./Layer-XX14EpjR.js";import"./Text-LG7Y1Qb6.js";import"./DOMUtils-5HA3g2TS.js";import"./Label-Dmj78U1Q.js";import"./ZIndexLayer-GPk988Ay.js";import"./types-CrM7aEhh.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-QnBNzaPT.js";import"./symbol-BLeS_YRk.js";import"./step-BxKH8omU.js";import"./useElementOffset-_Rki3zcD.js";import"./uniqBy-BCx0vEEL.js";import"./iteratee-CJYw7GAe.js";import"./ReactUtils-As56lGLj.js";import"./ActivePoints-DSq6xApl.js";import"./Dot-DWaeMyCd.js";import"./RegisterGraphicalItemId-BZJpY04p.js";import"./ErrorBarContext-DF-ZGRah.js";import"./GraphicalItemClipPath-CzTif6uL.js";import"./SetGraphicalItem-ByAuxD-G.js";import"./useAnimationId-Bl7aTw__.js";import"./getRadiusAndStrokeWidthFromDot-DFYx_98L.js";import"./ActiveShapeUtils-CylnP5Yt.js";import"./isPlainObject-CAtbLXkb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDlQaAI4.js";import"./Trapezoid-DzQkp94u.js";import"./Sector-CDC7yo8h.js";import"./Curve-ZdoQmbTm.js";import"./Cross-Q9mrA_50.js";import"./index-D9ndWW50.js";import"./ChartSizeDimensions-DFLxu7GA.js";import"./OffsetShower-BVHtCcND.js";import"./PlotAreaShower-BLT7b5XW.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
