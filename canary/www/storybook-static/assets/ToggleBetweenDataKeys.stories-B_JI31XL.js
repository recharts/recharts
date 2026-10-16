import{r as p,R as t}from"./iframe-XShEXmHR.js";import{L as n}from"./LineChart-C9ZdjfvS.js";import{R as s}from"./zIndexSlice-BbKyzabk.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cw58kur3.js";import{X as d}from"./XAxis-DWLQMeD5.js";import{Y as y}from"./YAxis-CC_fCC6K.js";import{L as u}from"./Legend-81x18Ee1.js";import{L as h}from"./Line-BHkg6SFm.js";import{T as g}from"./Tooltip-Bgj8opTW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-WU0hX8ZH.js";import"./resolveDefaultProps-DM0s23ft.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CSJ2InJO.js";import"./throttle-DGpDaXVx.js";import"./index-Bvkt8vSC.js";import"./index-B7mLrG61.js";import"./isWellBehavedNumber-D-ZqJjZ8.js";import"./d3-scale-DlV_OlJQ.js";import"./index-B0AN-0kz.js";import"./index-C8Ku-gFK.js";import"./renderedTicksSlice-CDzS9pio.js";import"./index-CNWPVzDl.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CO72z_mS.js";import"./chartDataContext-CdQA1wIP.js";import"./CategoricalChart-D5nhR2iF.js";import"./CartesianAxis-DXjpiMVV.js";import"./Layer-C_-u4_qv.js";import"./Text-DdUz3atv.js";import"./pageBackground-Caz1wwpV.js";import"./useId-DooYhcnw.js";import"./useBackwardsCompatibleTheme-CMApgrjd.js";import"./Label-PHQocy7u.js";import"./ZIndexLayer-BjS9bgAg.js";import"./types-Du-HQFzW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CEnD6S3J.js";import"./symbol-BPoRGGbG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CDXnga2p.js";import"./uniqBy-2p13vlX2.js";import"./iteratee-Dckbnh0N.js";import"./Curve-BLSppaDw.js";import"./step-DYrGddVY.js";import"./activeStyles-JUu5k5N9.js";import"./useAnimationId-Dhnt88bC.js";import"./dataEntryStyles-BYJ6H9tg.js";import"./ActivePoints-BWEWclRb.js";import"./Dot-CF6MExt8.js";import"./ErrorBarContext-D_UY1Ewg.js";import"./GraphicalItemClipPath-CSHX6ion.js";import"./SetGraphicalItem-DeDaE9OF.js";import"./getRadiusAndStrokeWidthFromDot-B8bE17TU.js";import"./ActiveShapeUtils-bxL5SxNf.js";import"./useEffectiveDataKey-Ca_DBmdg.js";import"./Cross-MJ9lCMTF.js";import"./Rectangle-3DMVp7GS.js";import"./util-Dxo8gN5i.js";import"./Sector-CTPlL39z.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
