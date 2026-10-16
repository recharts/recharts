import{r as p,R as t}from"./iframe-83g2bT9h.js";import{L as n}from"./LineChart-7a7QZhwj.js";import{R as s}from"./zIndexSlice-CfRH_Gkg.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CMZ2k9Kj.js";import{X as d}from"./XAxis-CPLb-uD7.js";import{Y as y}from"./YAxis-DKEYM08g.js";import{L as u}from"./Legend-DZLtHiBu.js";import{L as h}from"./Line-D5Z7nKk5.js";import{T as g}from"./Tooltip-uBW61v07.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-p2KZrAJR.js";import"./resolveDefaultProps-BpxedNkM.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C8tSZ6WQ.js";import"./throttle-4AZ4DRQb.js";import"./index-D9-kpgN8.js";import"./index-HFr4exi0.js";import"./isWellBehavedNumber-BgkxdIs4.js";import"./d3-scale-CVvcmCdK.js";import"./index-B7VmcSkv.js";import"./index-DLYfmWnd.js";import"./renderedTicksSlice-xHtkKbmz.js";import"./index-D-OQyWuZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D1Nmaq06.js";import"./chartDataContext-sHdkOGNI.js";import"./CategoricalChart-D7JsCRcw.js";import"./CartesianAxis-DvK2UzOE.js";import"./Layer-B91IFUVw.js";import"./Text-DUBqVL79.js";import"./pageBackground-DKLyt_8U.js";import"./useId-zomQiW43.js";import"./useBackwardsCompatibleTheme-BcLG_xbs.js";import"./Label-DfuHALhb.js";import"./ZIndexLayer-DeHUv8B_.js";import"./types-CMZudBWv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-C8qv3YMP.js";import"./symbol-C8Q_sjCu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BnQIDSYq.js";import"./uniqBy-B2Rp8ZH2.js";import"./iteratee-CXHp8yUW.js";import"./Curve-BzUWFYb9.js";import"./step-BklymoVp.js";import"./activeStyles-CdFniEfO.js";import"./useAnimationId-DUwxwMTt.js";import"./dataEntryStyles-B1gd_eml.js";import"./ActivePoints-DPZpTkVA.js";import"./Dot-CmrA2XZR.js";import"./ErrorBarContext-6HrkNfKi.js";import"./GraphicalItemClipPath-qo2wW-Qb.js";import"./SetGraphicalItem-BS6yKsvN.js";import"./getRadiusAndStrokeWidthFromDot-CQHfNXLK.js";import"./ActiveShapeUtils-CYOV0Fte.js";import"./useEffectiveDataKey-B2aQWgd3.js";import"./Cross-zx4z37CW.js";import"./Rectangle-BS77cgxi.js";import"./util-Dxo8gN5i.js";import"./Sector-DCfEH35h.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
