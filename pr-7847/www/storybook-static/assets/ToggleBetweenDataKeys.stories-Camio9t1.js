import{r as p,R as t}from"./iframe-hd_pfHvo.js";import{L as n}from"./LineChart-C4wWGeYh.js";import{R as s}from"./zIndexSlice-Dp2BKzs8.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CjQhUT8W.js";import{X as d}from"./XAxis-DIhH_NdP.js";import{Y as y}from"./YAxis-Bfby8-tG.js";import{L as u}from"./Legend-C27DvpnH.js";import{L as h}from"./Line-C_JAgIax.js";import{T as g}from"./Tooltip-CNZscDqQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CyksNjdk.js";import"./resolveDefaultProps-drD7xYIQ.js";import"./get-C2VjdU0L.js";import"./axisSelectors-eHIx7hMS.js";import"./throttle-C2q4COo1.js";import"./index-v0QewD8A.js";import"./index-SCBhOffb.js";import"./isWellBehavedNumber-C1tuJPSP.js";import"./d3-scale-CciOkO_z.js";import"./index-C3NZEEPx.js";import"./index-Dl1k2Uag.js";import"./renderedTicksSlice-CD7ArbZx.js";import"./index-zFom7GTd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-lsa6cjfM.js";import"./chartDataContext-BzYnwGm5.js";import"./CategoricalChart-DK0H-Nig.js";import"./CartesianAxis-Bczd13d5.js";import"./Layer-egOiXfr6.js";import"./Text-C6732HHA.js";import"./DOMUtils-B5fqbFU1.js";import"./useId-_Yta7G-c.js";import"./useBackwardsCompatibleTheme-SiYIdPDZ.js";import"./Label-DeYie9Lh.js";import"./ZIndexLayer-BHjO29Bs.js";import"./types-B1tRcN2v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-CB0dVqBg.js";import"./symbol-7gumIrmR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bjp7QiHs.js";import"./uniqBy-4GbLHGYo.js";import"./iteratee-BHWq50Tg.js";import"./Curve-MYVJeGQI.js";import"./step-C33N2LGT.js";import"./AnimatedItems-DCH1YBa_.js";import"./useAnimationId-D0lfWmyy.js";import"./ActivePoints-DqLOTWDO.js";import"./Dot-D7no8cFh.js";import"./RegisterGraphicalItemId-_fhB3pIC.js";import"./ErrorBarContext-BU3wkqbx.js";import"./GraphicalItemClipPath-Bsg-Zi-D.js";import"./SetGraphicalItem-CYmPmGcd.js";import"./getRadiusAndStrokeWidthFromDot-BcIv-0gg.js";import"./ActiveShapeUtils-BDpXGuZx.js";import"./useGraphicalItemIdentity-hHj77cNE.js";import"./Cross-DdXKijQJ.js";import"./Rectangle-DOvVk1du.js";import"./util-Dxo8gN5i.js";import"./Sector-CFinmXte.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
