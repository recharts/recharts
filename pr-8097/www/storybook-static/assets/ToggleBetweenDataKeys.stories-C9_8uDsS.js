import{r as p,R as t}from"./iframe-DNsV3xvw.js";import{L as n}from"./LineChart-IqyBtigH.js";import{R as s}from"./zIndexSlice-BkDmHlXx.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DGcV3WTC.js";import{X as d}from"./XAxis-BbuAR6XK.js";import{Y as y}from"./YAxis-B4nJYauW.js";import{L as u}from"./Legend-B1543AzP.js";import{L as h}from"./Line-Dt-wl3vw.js";import{T as g}from"./Tooltip-dsGCuWUX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BitdsUuz.js";import"./resolveDefaultProps-DaIQaOsN.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DtPl2Lwd.js";import"./throttle-CpyfnSH3.js";import"./index-Dztf8_-N.js";import"./index-CvtjAZLm.js";import"./polarAxisSelectors-wmmlw52W.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Y31MRKoT.js";import"./index-DpSt1MRy.js";import"./index-Byk9LK8-.js";import"./renderedTicksSlice-gGubTrlw.js";import"./index-HmVV84Ak.js";import"./CartesianChart-CQXK8dPk.js";import"./ZIndexPortal-D_VHs3j1.js";import"./CategoricalChart-Dkljh1MP.js";import"./CartesianAxis-BNXXsiE3.js";import"./Layer-CxNpu0Gw.js";import"./Text-D6nhI6eC.js";import"./pageBackground-DcwhSKr2.js";import"./ZIndexLayer-B29GXU_O.js";import"./Label-DxEHX6q3.js";import"./dataEntryStyles-BPFhmlnt.js";import"./types-En29vQtS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CXxyrJ-f.js";import"./symbol-Da48TnzF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D3m42K-G.js";import"./uniqBy-C1A792zL.js";import"./iteratee-D19tejeG.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CuwsmGsN.js";import"./step-Bt130Gb4.js";import"./LabelList-Dxbb0X28.js";import"./ActivePoints-Wn9kmDE8.js";import"./Dot-2Y-Kuv4T.js";import"./activeStyles-BmYbBsXF.js";import"./useAnimationId-BFFnWfJy.js";import"./RegisterGraphicalItemId-0BinVrEN.js";import"./ErrorBarContext-BojgDOr6.js";import"./SetGraphicalItem-BMxaBFjY.js";import"./getRadiusAndStrokeWidthFromDot-DYbmzRmX.js";import"./ActiveShapeUtils-DHdP5lJT.js";import"./useEffectiveDataKey-BlrFpRwa.js";import"./Cross-BZdzCkxq.js";import"./Rectangle-DYTWCfMr.js";import"./util-Dxo8gN5i.js";import"./Sector-C0Y8jgkt.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
