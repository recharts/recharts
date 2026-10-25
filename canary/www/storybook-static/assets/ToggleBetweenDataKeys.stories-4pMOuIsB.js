import{r as p,R as t}from"./iframe-aKV-O9MJ.js";import{L as n}from"./LineChart-CdLqC4pi.js";import{R as s}from"./zIndexSlice-BKaqyajB.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BOcFWEp4.js";import{X as d}from"./XAxis-lhBNyzg_.js";import{Y as y}from"./YAxis-Ch3CqHid.js";import{L as u}from"./Legend-B_eYmoQf.js";import{L as h}from"./Line-Cnh90x2U.js";import{T as g}from"./Tooltip-DRM63UrI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CMYKJCfZ.js";import"./resolveDefaultProps-HqSLYtX8.js";import"./get-cF5BDHN6.js";import"./axisSelectors-MbFPBavU.js";import"./throttle-Be3j2pw2.js";import"./index-CgdfyZHj.js";import"./index-CpNUBple.js";import"./isWellBehavedNumber-DhfM3JhV.js";import"./d3-scale-CsyBOG8O.js";import"./index-D1DeZs1S.js";import"./index-HoQ8qajG.js";import"./renderedTicksSlice-WTymoNbk.js";import"./index-C12TwcvC.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C2vgDwW7.js";import"./chartDataContext-DB9-FPl4.js";import"./CategoricalChart-CDZMqsPI.js";import"./CartesianAxis-Dm5On8Gk.js";import"./Layer-07gJ6FIr.js";import"./Text-CopK1C24.js";import"./pageBackground-D0AIP4to.js";import"./useId-CnmqgkQl.js";import"./useBackwardsCompatibleTheme-w5mekw_9.js";import"./Label-zwi5-GQg.js";import"./ZIndexLayer-A9-ipKwv.js";import"./dataEntryStyles-BzKYf-di.js";import"./types-DTpzWv6l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-Dqx3Vy8L.js";import"./symbol-D9UJ3By9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BKf5VsK_.js";import"./uniqBy-BTRGg67Z.js";import"./iteratee-BvKBaWIX.js";import"./isArguments-yB-y1yaH.js";import"./Curve-3H4HQJme.js";import"./step-Bv994rc2.js";import"./activeStyles-BvRJtjMn.js";import"./useAnimationId-Cb-3p2b2.js";import"./ActivePoints-DBGJodJk.js";import"./Dot-0Wdau4CC.js";import"./RegisterGraphicalItemId-CFnb1OFM.js";import"./ErrorBarContext-Bqn6HxNU.js";import"./SetGraphicalItem-BtHSeMoh.js";import"./getRadiusAndStrokeWidthFromDot-B6-r-w_v.js";import"./ActiveShapeUtils-CDtOvQ0I.js";import"./useEffectiveDataKey-B3-MKjEu.js";import"./Cross-DrnR6mil.js";import"./Rectangle-Bpv-EdUE.js";import"./util-Dxo8gN5i.js";import"./Sector-CizdX0d-.js";const kt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},Rt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,Rt as __namedExportsOrder,kt as default};
