import{r as n,e as t}from"./iframe-BjHGzV_g.js";import{L as p}from"./LineChart-C81xU_ZF.js";import{R as s}from"./arrayEqualityCheck-DSmzEAOj.js";import{C as c}from"./CartesianGrid-DuvwaQ2k.js";import{X as l}from"./XAxis-DS6la1y6.js";import{Y as d}from"./YAxis-ChYWGLAS.js";import{L as y}from"./Legend-BIneuLW0.js";import{L as h}from"./Line-Dlxi6_bB.js";import{T as u}from"./Tooltip-Bz7pyy1o.js";import{R as g}from"./RechartsHookInspector-D9VSdGzF.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BpQ0Nvj-.js";import"./hooks-j3l1IZT0.js";import"./axisSelectors-Dcbbky9Q.js";import"./zIndexSlice-CeUR4dop.js";import"./resolveDefaultProps-BgzxguqS.js";import"./PolarUtils-DVfIyed4.js";import"./CartesianChart-NrBloX0j.js";import"./chartDataContext-CvBxgAkC.js";import"./CategoricalChart-DUk9fPa6.js";import"./CartesianAxis-BWIPgogw.js";import"./Layer-C_w7y8lS.js";import"./Text-D_R22YNN.js";import"./DOMUtils-DJKWXfCz.js";import"./Label-CYo-ySuR.js";import"./ZIndexLayer-CXQSohMh.js";import"./types-CnIXHZZY.js";import"./Symbols-BMG8T0tH.js";import"./Curve-C15B5k0e.js";import"./useElementOffset--3uo1L7M.js";import"./iteratee-BEelosjX.js";import"./ReactUtils-B_OhT6T8.js";import"./ActivePoints-C5an_xbq.js";import"./Dot-DgNeiD7R.js";import"./RegisterGraphicalItemId-DQPUuqCc.js";import"./ErrorBarContext-B6rkjVms.js";import"./GraphicalItemClipPath-BSkbIiNd.js";import"./SetGraphicalItem-CZBegNK8.js";import"./useAnimationId-aInF8bWj.js";import"./getRadiusAndStrokeWidthFromDot-BLocnVTZ.js";import"./ActiveShapeUtils-GRlfg2FZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DzPvnNyw.js";import"./Trapezoid-BmpvqocW.js";import"./Sector-DqpJYgqY.js";import"./Cross-BpvzPM3C.js";import"./index-D2ltde3K.js";import"./ChartSizeDimensions-RaKYClSi.js";import"./OffsetShower-CgzrN99U.js";import"./PlotAreaShower-CopDbqvE.js";const ut={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
