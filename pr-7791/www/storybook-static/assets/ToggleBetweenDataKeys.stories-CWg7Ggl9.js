import{r as p,R as t}from"./iframe-BB7QZXLs.js";import{L as n}from"./LineChart-DwnVEFCN.js";import{R as s}from"./zIndexSlice-tJAM9iWj.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cwrn2LRG.js";import{X as d}from"./XAxis-XcDOkDmd.js";import{Y as y}from"./YAxis-DSzkAjgg.js";import{L as u}from"./Legend-Dm2xgOuL.js";import{L as h}from"./Line-DKYrypTN.js";import{T as g}from"./Tooltip-DoDbxGsK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-e66Xzxgl.js";import"./resolveDefaultProps-CpmXZA4k.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C9Ww97e2.js";import"./throttle-BIPObZtO.js";import"./index-dVHp78rg.js";import"./index-_M8YNH98.js";import"./isWellBehavedNumber-BJy-JztG.js";import"./d3-scale-iQiKVngo.js";import"./index-VwBP7ySp.js";import"./index-DhA5-aT4.js";import"./renderedTicksSlice-qkMRB7Jj.js";import"./index-qzDpnTu9.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D1IApd6R.js";import"./chartDataContext-CBZ7yVc5.js";import"./CategoricalChart-DG2kQqAq.js";import"./CartesianAxis-ByfKlAGp.js";import"./Layer-07NELy8e.js";import"./Text-CEEsNHtu.js";import"./DOMUtils-C2ZnKXb0.js";import"./useId-BVIeIeeB.js";import"./useBackwardsCompatibleTheme-BKLDWadY.js";import"./Label-ssYRudSZ.js";import"./ZIndexLayer-BnNru_wJ.js";import"./types-D6b6NoLW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-ELAv9C1d.js";import"./symbol-Dtrcmoux.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DY1y9jVd.js";import"./uniqBy-D1Ian6I1.js";import"./iteratee-Ch-bm_Fu.js";import"./Curve-D5V2G3nc.js";import"./step-CzTEwmSX.js";import"./AnimatedItems-BHb_g3It.js";import"./useAnimationId-C1x4gWZO.js";import"./ActivePoints-DEZf8Tp_.js";import"./Dot-DKFbKC0m.js";import"./RegisterGraphicalItemId-BrQFxchm.js";import"./ErrorBarContext-Cj0JdL2W.js";import"./GraphicalItemClipPath-DgpfNhEU.js";import"./SetGraphicalItem-BRob5fGw.js";import"./getRadiusAndStrokeWidthFromDot-k1yLnap7.js";import"./ActiveShapeUtils-CHeKF_6U.js";import"./useGraphicalItemIdentity-DsYSBEP4.js";import"./Cross-C7gJ0tvS.js";import"./Rectangle-BdgR7Lei.js";import"./util-Dxo8gN5i.js";import"./Sector-BmSMlVZs.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
