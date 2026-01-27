import{r as n,e as t}from"./iframe-B_h1eZxb.js";import{L as p}from"./LineChart-Bt3dXEkv.js";import{R as s}from"./arrayEqualityCheck-BQ7vn4Fs.js";import{C as c}from"./CartesianGrid-Dn1eke1q.js";import{X as l}from"./XAxis-Mxp9ktjo.js";import{Y as d}from"./YAxis-DgW-EgkF.js";import{L as y}from"./Legend-CyfSve0g.js";import{L as h}from"./Line-DqbVJ-Iu.js";import{T as u}from"./Tooltip-DpipJDfY.js";import{R as g}from"./RechartsHookInspector-CaskrBRm.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-GoD8D7jd.js";import"./hooks-tOZxoK0e.js";import"./axisSelectors-BH0L-ggM.js";import"./zIndexSlice-DBtbpS_b.js";import"./resolveDefaultProps-B1vNlzd5.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-BDgEI9ov.js";import"./chartDataContext-BQaQDl0i.js";import"./CategoricalChart-Ba1gSjPg.js";import"./CartesianAxis-DOEAGTwm.js";import"./Layer-YFSiP5O_.js";import"./Text-3ZnKfMzL.js";import"./DOMUtils-CPt0eNTU.js";import"./Label-B4qm1C3r.js";import"./ZIndexLayer-O03ayMNB.js";import"./types-DbDrWtQW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-3gLai2FA.js";import"./Curve-BIskmgLq.js";import"./useElementOffset-C7pRLK6G.js";import"./iteratee-JecoT9nP.js";import"./ReactUtils-DsQBac2C.js";import"./ActivePoints-BWqrE6Pi.js";import"./Dot-5EH031rg.js";import"./RegisterGraphicalItemId-DWqCI4mY.js";import"./ErrorBarContext-hJIAPStP.js";import"./GraphicalItemClipPath-CYkgNVtV.js";import"./SetGraphicalItem-BXR0TSlG.js";import"./useAnimationId-BJhibfpC.js";import"./getRadiusAndStrokeWidthFromDot-B64kjpoC.js";import"./ActiveShapeUtils-CedxEX3v.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-EuLtLzS8.js";import"./Trapezoid-CJEFZDfs.js";import"./Sector-CFscv7k5.js";import"./Cross-DBGWeScq.js";import"./index-iiBRXnxx.js";import"./ChartSizeDimensions-KhnO1Uhi.js";import"./OffsetShower-DZ8KqkSb.js";import"./PlotAreaShower-CXGDRKi2.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
