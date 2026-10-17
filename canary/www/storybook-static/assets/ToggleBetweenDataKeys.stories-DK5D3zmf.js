import{r as p,R as t}from"./iframe-DJb0mK8M.js";import{L as n}from"./LineChart-BfhlK4XG.js";import{R as s}from"./zIndexSlice-CT0NLGnJ.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DsLQknLw.js";import{X as d}from"./XAxis-rFQD6Pba.js";import{Y as y}from"./YAxis-CWLYUyep.js";import{L as u}from"./Legend-COUILfwW.js";import{L as h}from"./Line-neFyfXAn.js";import{T as g}from"./Tooltip-yYvD3jWx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cglq1y_f.js";import"./resolveDefaultProps-C1NQQxfw.js";import"./get-C2VjdU0L.js";import"./axisSelectors-E250IIX0.js";import"./throttle-BS7HrNsT.js";import"./index-CM4XLoJ2.js";import"./index-DkIcBYOu.js";import"./isWellBehavedNumber-BNoJVovK.js";import"./d3-scale-BU1MyCto.js";import"./index-Co9bt_zj.js";import"./index-BZmySJQF.js";import"./renderedTicksSlice-CwZjK2uF.js";import"./index-CyzL3WIR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DJ8n3cc1.js";import"./chartDataContext-CJdXqT5i.js";import"./CategoricalChart-Dsw_Culz.js";import"./CartesianAxis-C-rsFQTF.js";import"./Layer-DK2FwCPg.js";import"./Text-COb6PIBf.js";import"./pageBackground-CexaD8jP.js";import"./useId-BX-mSSik.js";import"./useBackwardsCompatibleTheme-CKzY57lx.js";import"./Label-BzZymjIq.js";import"./ZIndexLayer-DD8rlV_m.js";import"./types-B-rYYW-g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-8udjdX-_.js";import"./symbol-CxL7yEpn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DTnbgc86.js";import"./uniqBy-BuCtx4yQ.js";import"./iteratee-B4Qh_7Gw.js";import"./Curve-Byf9oq4a.js";import"./step-Bi1Gxitb.js";import"./activeStyles-DMsULg9O.js";import"./useAnimationId-CFtssWv7.js";import"./dataEntryStyles-DWwC517V.js";import"./ActivePoints-CCNXmb9c.js";import"./Dot--GGfWb34.js";import"./ErrorBarContext-CpX10Uwr.js";import"./GraphicalItemClipPath-BFBWrIDQ.js";import"./SetGraphicalItem-BBlb6zhf.js";import"./getRadiusAndStrokeWidthFromDot-9uxOnNFL.js";import"./ActiveShapeUtils-s8ySMG5_.js";import"./useEffectiveDataKey-BCzrZ4XH.js";import"./Cross-BJwlxOAF.js";import"./Rectangle-KMUMkJf8.js";import"./util-Dxo8gN5i.js";import"./Sector-CQqm1E0g.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
