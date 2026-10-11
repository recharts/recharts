import{r as p,R as t}from"./iframe-BjoWmD_2.js";import{L as n}from"./LineChart-CO3-EVSR.js";import{R as s}from"./zIndexSlice-QxL2_XNr.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-1Qi909jy.js";import{X as d}from"./XAxis-D-7vKTCU.js";import{Y as y}from"./YAxis-DcA2RCuj.js";import{L as u}from"./Legend-DQIvgkeJ.js";import{L as h}from"./Line-CzyvQYUG.js";import{T as g}from"./Tooltip-GIBef5dA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B-Xj9Vy5.js";import"./resolveDefaultProps-CRUAWeqy.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CTjcoI_o.js";import"./throttle-h3rYfSBM.js";import"./index-BRU_7ROE.js";import"./index-rOX-JMdH.js";import"./isWellBehavedNumber-BxmTrUsM.js";import"./d3-scale-kKJuS5hm.js";import"./index-Ctb1uOPb.js";import"./index-Cd4gA8VB.js";import"./renderedTicksSlice-9uvUqonz.js";import"./index-BiJeeMkw.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-ALqDRU4y.js";import"./chartDataContext-D2tEsWQI.js";import"./CategoricalChart-CU8xgSqQ.js";import"./CartesianAxis-CuhpEa5Q.js";import"./Layer-BETohxRY.js";import"./Text-DoJy0Hms.js";import"./pageBackground-B2WnjK3P.js";import"./useId-CxEr69Iu.js";import"./useBackwardsCompatibleTheme-lRDO5kA2.js";import"./Label-Cqr17CGT.js";import"./ZIndexLayer-DQXgAxZP.js";import"./types-CwctOhA4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-9svYQiWP.js";import"./symbol-CtXXRm84.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CXh5WHLo.js";import"./uniqBy-BaadcAvx.js";import"./iteratee-B_XLmPV3.js";import"./Curve-Bi87Df9h.js";import"./step-DbGei3uZ.js";import"./activeStyles-pw12H8S5.js";import"./useAnimationId-CvgGu5_L.js";import"./dataEntryStyles-M6AZ3Vkx.js";import"./ActivePoints-CbXUnkX6.js";import"./Dot-CwvTlVWs.js";import"./ErrorBarContext-hA9ACwOL.js";import"./GraphicalItemClipPath-CJpx4uWZ.js";import"./SetGraphicalItem-BNR-CUWR.js";import"./getRadiusAndStrokeWidthFromDot-BXg1EUK6.js";import"./ActiveShapeUtils-Ba7sfaWC.js";import"./useGraphicalItemIdentity-D7aL1WKh.js";import"./Cross-DKdj81XQ.js";import"./Rectangle-uRJgPy0Q.js";import"./util-Dxo8gN5i.js";import"./Sector-BRxC4KNY.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
