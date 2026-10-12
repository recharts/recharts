import{r as p,R as t}from"./iframe-BuvSZiBU.js";import{L as n}from"./LineChart-D79Znfgx.js";import{R as s}from"./zIndexSlice-CQnbxV7B.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CnOEuHER.js";import{X as d}from"./XAxis-BOfa2s22.js";import{Y as y}from"./YAxis-BWzjkf00.js";import{L as u}from"./Legend-xXJG6pwb.js";import{L as h}from"./Line-BUpD7j4-.js";import{T as g}from"./Tooltip-BZ4jR-Jc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DMwFRg1j.js";import"./resolveDefaultProps-BfSOVUjP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DGKzkChq.js";import"./throttle-Csayz_X_.js";import"./index-BXTQQRSe.js";import"./index-hoeugXO7.js";import"./isWellBehavedNumber-B_8a6RB1.js";import"./d3-scale-B4_DxsXg.js";import"./index-C49MXgC-.js";import"./index-CItffRII.js";import"./renderedTicksSlice-CC7BtYy2.js";import"./index-Coj2gvLu.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BHftvwV6.js";import"./chartDataContext-CCUXEs40.js";import"./CategoricalChart-4mWCyxjg.js";import"./CartesianAxis-BUinM5G-.js";import"./Layer-DVAnIpPd.js";import"./Text-BkZYuu7y.js";import"./pageBackground-BDR7TGLv.js";import"./useId-BuSUlJ9G.js";import"./useBackwardsCompatibleTheme-CJX_yJan.js";import"./Label-w8cJkoy5.js";import"./ZIndexLayer-CF-B9exK.js";import"./types-EtJbnETm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-ym2AvTwr.js";import"./symbol-BCH9VJWR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-tkb_p-rH.js";import"./uniqBy-BFPywt7W.js";import"./iteratee-DgIW1Mxm.js";import"./Curve-DvYuS0m6.js";import"./step-ozWCT_4L.js";import"./activeStyles-BmupzAye.js";import"./useAnimationId-CdC3v3R9.js";import"./dataEntryStyles-C1ODZzqS.js";import"./ActivePoints-CYsghgN3.js";import"./Dot-BP5vqlI3.js";import"./ErrorBarContext-PD-ezkzm.js";import"./GraphicalItemClipPath-a3qbNX5k.js";import"./SetGraphicalItem-DyRgogdT.js";import"./getRadiusAndStrokeWidthFromDot-JbdAO9HR.js";import"./ActiveShapeUtils-FNOwuhtO.js";import"./useEffectiveDataKey-DUlUrCLD.js";import"./Cross-CJRlAvh_.js";import"./Rectangle-DSr8qKkL.js";import"./util-Dxo8gN5i.js";import"./Sector-DP_bKBS8.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
