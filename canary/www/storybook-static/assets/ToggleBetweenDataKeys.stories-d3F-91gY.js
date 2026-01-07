import{r as n,e as t}from"./iframe-BlTD-rim.js";import{L as p}from"./LineChart-BHJExF-c.js";import{R as s}from"./arrayEqualityCheck-rFMbtr9X.js";import{C as c}from"./CartesianGrid-BW3y60TI.js";import{X as l}from"./XAxis-9FZ95w2s.js";import{Y as d}from"./YAxis-CzxGswUN.js";import{L as y}from"./Legend-DwZMZD9h.js";import{L as h}from"./Line-9EEW6LJO.js";import{T as u}from"./Tooltip-gQubTM6T.js";import{R as g}from"./RechartsHookInspector-AxC62fMg.js";import{p as K}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BRiCuj44.js";import"./hooks-ZIQpvDbg.js";import"./axisSelectors-BTk9q0tB.js";import"./zIndexSlice-Ir6gglyl.js";import"./resolveDefaultProps-CYyTkUJ3.js";import"./PolarUtils-uT4ExAHg.js";import"./CartesianChart-CytP6aLk.js";import"./chartDataContext-BDSmG94B.js";import"./CategoricalChart-DNOtZmhb.js";import"./CartesianAxis-bTSyVw2P.js";import"./Layer-COV8jJuI.js";import"./Text-CcLFuzDB.js";import"./DOMUtils-JUKIsz3X.js";import"./Label-DeeiiEOU.js";import"./ZIndexLayer-D1uFjBFZ.js";import"./types-DTlxByIq.js";import"./Symbols-CPbquqjE.js";import"./Curve-BUANm7-q.js";import"./useElementOffset-DPOkcJvF.js";import"./iteratee-Ca5LyscH.js";import"./ReactUtils-cgJBm0o5.js";import"./ActivePoints-CPWPbj6O.js";import"./Dot-C6jOffNH.js";import"./RegisterGraphicalItemId-7-yGWLdn.js";import"./ErrorBarContext-952cRcfJ.js";import"./GraphicalItemClipPath-D9Dgqofo.js";import"./SetGraphicalItem-BzR4HcCN.js";import"./useAnimationId-Cp6XJ64u.js";import"./getRadiusAndStrokeWidthFromDot-ByE9rINe.js";import"./ActiveShapeUtils-TxWRIrWJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DYtDJsJv.js";import"./Trapezoid-YZMZwo4M.js";import"./Sector-BWZ0U6hI.js";import"./Cross-zV6Ljm1M.js";import"./index-BN3nPK1K.js";import"./ChartSizeDimensions-DjKj5CZH.js";import"./OffsetShower-BJ7VFhTL.js";import"./PlotAreaShower-DLdCBikg.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const gt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,gt as __namedExportsOrder,ut as default};
