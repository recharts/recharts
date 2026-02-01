import{r as n,e as t}from"./iframe-S3w8vazP.js";import{L as p}from"./LineChart-Dn5XRmIY.js";import{R as s}from"./arrayEqualityCheck-CVVcuOqH.js";import{C as c}from"./CartesianGrid-DDXkKXYO.js";import{X as l}from"./XAxis-y9KwpsE4.js";import{Y as d}from"./YAxis-BLaSPofG.js";import{L as y}from"./Legend-CY90PPf5.js";import{L as h}from"./Line-B74ZxJWW.js";import{T as u}from"./Tooltip-CrYts5Zz.js";import{R as g}from"./RechartsHookInspector-BtEk5fyn.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BglxN53s.js";import"./hooks-BIoyKUdn.js";import"./axisSelectors-C9fo5mxJ.js";import"./zIndexSlice-C8yB0SjJ.js";import"./resolveDefaultProps-DUh5CxZw.js";import"./PolarUtils-DdS5KPsI.js";import"./CartesianChart-Di7ZLiW9.js";import"./chartDataContext-C3H726Iv.js";import"./CategoricalChart-BpFyN0NS.js";import"./CartesianAxis-CWMaA0v8.js";import"./Layer-Dpjv3Z7H.js";import"./Text-Ch2i1yLS.js";import"./DOMUtils-BYd--jqE.js";import"./Label-BFw783un.js";import"./ZIndexLayer-DtdorfOg.js";import"./types-46Crnp6z.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DWbc74gd.js";import"./Curve-DzPn9elm.js";import"./useElementOffset-DsT0Vt7J.js";import"./iteratee-DBpy2Zkw.js";import"./ReactUtils-DdWnBm1Y.js";import"./ActivePoints-Dejn0HsJ.js";import"./Dot-Bjvjl7Nl.js";import"./RegisterGraphicalItemId-B2X6SVeo.js";import"./ErrorBarContext-B0bCUlMx.js";import"./GraphicalItemClipPath-D9qCdAxL.js";import"./SetGraphicalItem-BpO8akWh.js";import"./useAnimationId-Pi9wCxwd.js";import"./getRadiusAndStrokeWidthFromDot-aysjhdrr.js";import"./ActiveShapeUtils-D5tQ5sxS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ClBH0-aW.js";import"./Trapezoid-BgHkPCBK.js";import"./Sector-JtnSW-LM.js";import"./Cross-TvPCTj9A.js";import"./index-DLTKO4-0.js";import"./ChartSizeDimensions-DHpkkx7o.js";import"./OffsetShower-By9PfpSa.js";import"./PlotAreaShower-BawApXcc.js";const gt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
