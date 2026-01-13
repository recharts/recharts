import{r as n,e as t}from"./iframe-BIMs3Nj-.js";import{L as p}from"./LineChart-hJwOdwQX.js";import{R as s}from"./arrayEqualityCheck-pDlZyWSR.js";import{C as c}from"./CartesianGrid-Bsgxj9XA.js";import{X as l}from"./XAxis-DGDhYE5R.js";import{Y as d}from"./YAxis-DCTV7yXH.js";import{L as y}from"./Legend-61MTEnVq.js";import{L as h}from"./Line-5CZALR-o.js";import{T as u}from"./Tooltip-Dbd59Cn4.js";import{R as g}from"./RechartsHookInspector-DBOIj4qW.js";import{p as K}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bo8-B70G.js";import"./hooks-Bc7hX-2Z.js";import"./axisSelectors-NKchjqRS.js";import"./zIndexSlice-Cnolt5PP.js";import"./resolveDefaultProps-C_VwJ3u_.js";import"./PolarUtils-BWV_hv32.js";import"./CartesianChart-BUJVTvnU.js";import"./chartDataContext-Dko-7FeN.js";import"./CategoricalChart-DCejedhJ.js";import"./CartesianAxis-BteZhTH6.js";import"./Layer-DBgzSzH_.js";import"./Text-CgjsJcds.js";import"./DOMUtils-voeX-mFj.js";import"./Label-CIRwRBMZ.js";import"./ZIndexLayer-DJ3JTFRU.js";import"./types-CnKH5I-b.js";import"./Symbols-BUMcrI7R.js";import"./Curve-DwuONHqE.js";import"./useElementOffset-DBbTJfWF.js";import"./iteratee-C4-_aqgq.js";import"./ReactUtils-3uFwj_TO.js";import"./ActivePoints-Dga_4R6z.js";import"./Dot-DH_B4APi.js";import"./RegisterGraphicalItemId-DeUg8eaE.js";import"./ErrorBarContext-87-HwFAI.js";import"./GraphicalItemClipPath-Bw0KLcwW.js";import"./SetGraphicalItem-D5C3EpbS.js";import"./useAnimationId-DJ77ibSq.js";import"./getRadiusAndStrokeWidthFromDot-Cc2fOwDf.js";import"./ActiveShapeUtils-CV_fg9r-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dx9fcimO.js";import"./Trapezoid-B19U1HS5.js";import"./Sector-B3pSkdDH.js";import"./Cross-C90J-YK0.js";import"./index-CngAoIpS.js";import"./ChartSizeDimensions-C2UWIaZL.js";import"./OffsetShower-DVFE9F3Y.js";import"./PlotAreaShower-DBdBZo3w.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
