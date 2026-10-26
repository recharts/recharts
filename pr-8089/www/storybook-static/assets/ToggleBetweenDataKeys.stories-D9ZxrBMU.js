import{r as p,R as t}from"./iframe-Dofq_iQ-.js";import{L as n}from"./LineChart-Clg0lwmX.js";import{R as s}from"./zIndexSlice-D1WV8xVK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DoUIhGuN.js";import{X as d}from"./XAxis-BAcN42ay.js";import{Y as y}from"./YAxis-CNyofDE0.js";import{L as u}from"./Legend-BpsZydhy.js";import{L as h}from"./Line-CxMmNUAz.js";import{T as g}from"./Tooltip-D82JgkIu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CETzgtk4.js";import"./resolveDefaultProps-Z787kyQ6.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CqE-voO2.js";import"./throttle-DKmFrtnD.js";import"./index-BtkEod5i.js";import"./index-37WXqDMb.js";import"./polarAxisSelectors-CmsaI3Cf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bd78fIJ9.js";import"./index-qZlNdlLA.js";import"./index-Bsj9Z6Q4.js";import"./renderedTicksSlice-DEI5ubGX.js";import"./index-CYB006td.js";import"./CartesianChart-D36QcNNB.js";import"./chartDataContext-B2bZJU-K.js";import"./CategoricalChart-DTaKLLfl.js";import"./CartesianAxis-BkbAUDQ6.js";import"./Layer-DmIM376f.js";import"./Text-DvhWb0Oj.js";import"./pageBackground-jkmkuUi_.js";import"./useId-Dit2o_XD.js";import"./ZIndexLayer-CuuRUF_K.js";import"./Label-hlz0weoU.js";import"./dataEntryStyles-BZNZhw1g.js";import"./types-B7VCcYuj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BSqZO71K.js";import"./symbol-3INanWh5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B6c3R0Fo.js";import"./uniqBy-pKrPA6ZI.js";import"./iteratee-eczRew1O.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Beatw8ZQ.js";import"./step-g7A04fAl.js";import"./activeStyles-B73KwGvD.js";import"./useAnimationId-CwELIUBQ.js";import"./ActivePoints--oTriwIr.js";import"./Dot-CgHFserM.js";import"./RegisterGraphicalItemId-DtelKBLL.js";import"./ErrorBarContext-D73mtL4f.js";import"./SetGraphicalItem-DU742dNa.js";import"./getRadiusAndStrokeWidthFromDot-BcCSCHB7.js";import"./ActiveShapeUtils-R-VNi4BZ.js";import"./useEffectiveDataKey-B7xEEKli.js";import"./Cross-_ZcP0GkJ.js";import"./Rectangle-ywvlgolw.js";import"./util-Dxo8gN5i.js";import"./Sector-fCNxang1.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
