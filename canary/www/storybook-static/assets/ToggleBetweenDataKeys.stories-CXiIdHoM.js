import{r as n,e as t}from"./iframe-CldnC2PN.js";import{L as p}from"./LineChart-sbgIUmRs.js";import{R as s}from"./arrayEqualityCheck-BkMemVly.js";import{C as c}from"./CartesianGrid-BEaZvAgk.js";import{X as l}from"./XAxis-Cj8qZ5rT.js";import{Y as d}from"./YAxis-CrDGCN3a.js";import{L as y}from"./Legend-DEyXurLw.js";import{L as h}from"./Line-ByBYJUYI.js";import{T as u}from"./Tooltip-DrGKSX9N.js";import{R as g}from"./RechartsHookInspector-D62gTWo0.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DAnE3XKK.js";import"./index-B042oD1N.js";import"./immer-DMaWcifR.js";import"./hooks-C8l2rjci.js";import"./axisSelectors-DvlPsvJ3.js";import"./d3-scale-fXH-4SOh.js";import"./zIndexSlice-Dkmz4iFf.js";import"./renderedTicksSlice-Be71JRZt.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D5D4yxlx.js";import"./chartDataContext-HhqUZ6D1.js";import"./CategoricalChart-SLN0-3Ts.js";import"./resolveDefaultProps-BwrkZ9kS.js";import"./CartesianAxis-BLyyO5TZ.js";import"./Layer-Bdw6vRTF.js";import"./Text-DSAVQ0ab.js";import"./DOMUtils-CLNPxtlu.js";import"./Label-CL4-mp52.js";import"./ZIndexLayer-Bu6n17y5.js";import"./types-dYqueN3V.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CezzAArh.js";import"./symbol-ChaweOtd.js";import"./step-DeOo6rRX.js";import"./useElementOffset-C4xRiB3V.js";import"./uniqBy-DJ3ohGyU.js";import"./iteratee-C-2fytJ4.js";import"./ReactUtils-vDwQR-8r.js";import"./ActivePoints-BUuw4K3w.js";import"./Dot-5FROqbSu.js";import"./RegisterGraphicalItemId-BmpgF9p0.js";import"./ErrorBarContext-Bu40-WC5.js";import"./GraphicalItemClipPath-_SIbPbOr.js";import"./SetGraphicalItem-QHdiFTBm.js";import"./useAnimationId-3owPHR_y.js";import"./getRadiusAndStrokeWidthFromDot-BeEBfGl6.js";import"./ActiveShapeUtils-PUYnWCIP.js";import"./isPlainObject-DfSr4O01.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CtzrYFnf.js";import"./Trapezoid-TT50IcST.js";import"./Sector-Olx8axXc.js";import"./Curve-Cs2JifYn.js";import"./Cross-CTpyLk87.js";import"./index-VkK4RKSk.js";import"./ChartSizeDimensions-De6H2yR6.js";import"./OffsetShower-QG2XVoqu.js";import"./PlotAreaShower-x9Z3Lf2d.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
