import{r as p,R as t}from"./iframe-HQzZVjBz.js";import{L as n}from"./LineChart-BO0ktqmG.js";import{R as s}from"./zIndexSlice-CGQ7Au-h.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Buehb8fQ.js";import{X as d}from"./XAxis-DRgGc3zf.js";import{Y as y}from"./YAxis-B3rEjge7.js";import{L as u}from"./Legend-BkWpFG1S.js";import{L as h}from"./Line-CkvZUxt9.js";import{T as g}from"./Tooltip-D7UZWLZA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CHbQgt_R.js";import"./resolveDefaultProps-FnTseFp7.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Pv4KR-zj.js";import"./throttle-CBKyBD78.js";import"./index-B-hjV7sb.js";import"./index-CoahYeeF.js";import"./isWellBehavedNumber-CcswNJGt.js";import"./d3-scale-Bm5seH5s.js";import"./index-Du00f8Ig.js";import"./index-Cd4WuegV.js";import"./renderedTicksSlice-CBd_vSTQ.js";import"./index-DBkbRNLm.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CBFKxon3.js";import"./chartDataContext-B1WnW-uC.js";import"./CategoricalChart-CFFTEefl.js";import"./CartesianAxis-DqRUh5Lc.js";import"./Layer-CZF3Yvdy.js";import"./Text-BOeOqlf9.js";import"./pageBackground-BMzh5QHA.js";import"./useId-CLiKfQI1.js";import"./useBackwardsCompatibleTheme-BydTEdxL.js";import"./Label-CkcS20G_.js";import"./ZIndexLayer-B9EFhzLD.js";import"./types-Bq-isVxM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-_dnyJZ42.js";import"./symbol-BbltfI5F.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BHmZojEb.js";import"./uniqBy-Cq2YPL4f.js";import"./iteratee-CWwfWNkd.js";import"./Curve-CCST94p6.js";import"./step-mtRqlT_G.js";import"./activeStyles-Ctuz9FGV.js";import"./useAnimationId-D_-yy58E.js";import"./dataEntryStyles-CrN8We-Y.js";import"./ActivePoints-B2Wdpvql.js";import"./Dot-CrUvj508.js";import"./ErrorBarContext-D0G_BuSS.js";import"./GraphicalItemClipPath-CmI_2v97.js";import"./SetGraphicalItem-CCrIsVeT.js";import"./getRadiusAndStrokeWidthFromDot-DJSL-cTD.js";import"./ActiveShapeUtils-BYEpmP72.js";import"./useEffectiveDataKey-DU6QRSRw.js";import"./Cross-Dhxf7mJc.js";import"./Rectangle-BjPRKiky.js";import"./util-Dxo8gN5i.js";import"./Sector-DAAFWhEY.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
