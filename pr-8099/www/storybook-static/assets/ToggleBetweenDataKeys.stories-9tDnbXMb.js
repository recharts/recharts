import{r as p,R as t}from"./iframe-tjocxRUU.js";import{L as n}from"./LineChart-BZ4q9848.js";import{R as s}from"./zIndexSlice-Dxy8HPki.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-yix9J2Ta.js";import{X as d}from"./XAxis-Ds3HH0B9.js";import{Y as y}from"./YAxis-CC3Fea7J.js";import{L as u}from"./Legend-A6gk-x0n.js";import{L as h}from"./Line-D_gGwljF.js";import{T as g}from"./Tooltip-Vo_i0ifx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CFmoW3Jf.js";import"./resolveDefaultProps-BcfnasjV.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Bh1ZEFRN.js";import"./throttle-BtJBXhY8.js";import"./index-CjBb-5aG.js";import"./index-cbjgkIoT.js";import"./polarAxisSelectors-D1WllP0e.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DxsTJ-Fh.js";import"./index-Ccuv5XKu.js";import"./index-Ct8BdbUc.js";import"./renderedTicksSlice-Dd6HrSiu.js";import"./index-E7H9Mo8F.js";import"./CartesianChart-BvDUjaEm.js";import"./ZIndexPortal-HUDzz5Yk.js";import"./CategoricalChart-BwEKGQoK.js";import"./CartesianAxis-DzErZjsk.js";import"./Layer-YyRceVq5.js";import"./Text-DmRL3-09.js";import"./pageBackground-C5tWOGC0.js";import"./ZIndexLayer-1nCesNvZ.js";import"./Label-CDvz32IL.js";import"./dataEntryStyles-D26LCbZx.js";import"./types-C53JcC0M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-eM89l6Zr.js";import"./symbol-aequuKRH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cwd9kaUJ.js";import"./uniqBy-CCosKpyN.js";import"./iteratee-BVYnyUcL.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D8fqT8cR.js";import"./step-BxgewTFX.js";import"./LabelList-C2EwX980.js";import"./ActivePoints-CR8eCzMX.js";import"./Dot-C1-AWakF.js";import"./activeStyles-BO5quCC2.js";import"./useAnimationId-g7Nwbj-R.js";import"./RegisterGraphicalItemId-B4AeGnTP.js";import"./ErrorBarContext-ClXwNuC-.js";import"./SetGraphicalItem-CJ8TRMDr.js";import"./getRadiusAndStrokeWidthFromDot-wnLtIjnO.js";import"./ActiveShapeUtils-BbQcFRH2.js";import"./useEffectiveDataKey-BAWm_Xnd.js";import"./Cross-A6Z2fQ3g.js";import"./Rectangle-nUsjOQfN.js";import"./util-Dxo8gN5i.js";import"./Sector-B1OZU1uB.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
