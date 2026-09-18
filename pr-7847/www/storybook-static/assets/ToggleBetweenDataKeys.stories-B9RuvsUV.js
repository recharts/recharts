import{r as p,R as t}from"./iframe-lcK-LQ4H.js";import{L as n}from"./LineChart-Cno2TFmj.js";import{R as s}from"./zIndexSlice-3xiznc3T.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BF4lxnbn.js";import{X as d}from"./XAxis-U3uV11HY.js";import{Y as y}from"./YAxis-BD_opFpC.js";import{L as u}from"./Legend-CY1h17sR.js";import{L as h}from"./Line-D4XTruOS.js";import{T as g}from"./Tooltip-UefMF0_o.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3b-43EA.js";import"./resolveDefaultProps-CrEw_DbM.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BQOoWmyr.js";import"./throttle-obGnf5ET.js";import"./index-BJrdch9J.js";import"./index-DR4LcHaa.js";import"./isWellBehavedNumber-BNK5esbm.js";import"./d3-scale-BGtfSAS2.js";import"./index-Bq7_2YG0.js";import"./index-CO-uW0YU.js";import"./renderedTicksSlice-OgdWdUmt.js";import"./index-PavZfgBD.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DDPqNkhD.js";import"./chartDataContext-JPZtnlxr.js";import"./CategoricalChart-P0fttYEL.js";import"./CartesianAxis-lKQduzRC.js";import"./Layer-BrJH3_5y.js";import"./Text-B9QwYOBa.js";import"./DOMUtils-DOyQnx6z.js";import"./useId-BdIxfVgV.js";import"./useBackwardsCompatibleTheme-CRXuFPOK.js";import"./Label-DdX71Pmy.js";import"./ZIndexLayer-peV_8dsk.js";import"./types-iT_AM-R8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-COwk8-Ob.js";import"./symbol-omBsgaNs.js";import"./path-DyVhHtw_.js";import"./useElementOffset-XRlntQB2.js";import"./uniqBy-CR5sds_H.js";import"./iteratee-DQhw2g_P.js";import"./Curve-CH5D8euf.js";import"./step-865XHt_v.js";import"./AnimatedItems-BUrFNy4t.js";import"./useAnimationId-CN4TcOgU.js";import"./ActivePoints-B9F3Cvj-.js";import"./Dot-JEYqyfVW.js";import"./RegisterGraphicalItemId-O_HgkeJ0.js";import"./ErrorBarContext-DAMWbZmD.js";import"./GraphicalItemClipPath-oVlg1Xnl.js";import"./SetGraphicalItem-DZtp094S.js";import"./getRadiusAndStrokeWidthFromDot-C4ZSDNB8.js";import"./ActiveShapeUtils-glOfs5rY.js";import"./useGraphicalItemIdentity-MQMbS4BR.js";import"./Cross-B2ICJeQE.js";import"./Rectangle-WUBSuO5y.js";import"./util-Dxo8gN5i.js";import"./Sector-DKlqv5u1.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
