import{r as p,R as t}from"./iframe-DehjRTS0.js";import{L as n}from"./LineChart-CqkgILZR.js";import{R as s}from"./zIndexSlice-Or93N-XC.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B3FaEnNY.js";import{X as d}from"./XAxis-Cg2bfD3w.js";import{Y as y}from"./YAxis-BGtv0j9s.js";import{L as u}from"./Legend-BNPrBsNu.js";import{L as h}from"./Line-5vGDPRrb.js";import{T as g}from"./Tooltip-RN1BeYcT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CRtSS_eM.js";import"./resolveDefaultProps-CMD_wJjc.js";import"./get-cF5BDHN6.js";import"./axisSelectors-DZdKwAWL.js";import"./throttle-DesffiZ0.js";import"./index-DETf35J4.js";import"./index-CwuhsW6L.js";import"./polarAxisSelectors-Ka3IcW3O.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C22MolAx.js";import"./index-CXT-2IyT.js";import"./index-KpNlVNDm.js";import"./renderedTicksSlice-Ct6BbSAX.js";import"./index-kCr6N--m.js";import"./fillDefinitions-DhW3x4ou.js";import"./CartesianChart-CgHz7Gaf.js";import"./chartDataContext-BjcKNpHZ.js";import"./CategoricalChart-DkUvkRm5.js";import"./CartesianAxis-CwmDOfi4.js";import"./Layer-DlT20hA_.js";import"./Text-CTuG3Uwk.js";import"./ZIndexLayer-DkIV4AJ1.js";import"./Label-D6Z-0Dfn.js";import"./types-Be7PvpBk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-C5Duu2Up.js";import"./symbol-CWMlQuGp.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DLrTCfvS.js";import"./uniqBy-B1en0uiU.js";import"./iteratee-BJM6y6Dd.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D6YGUkKE.js";import"./step-BGdpfV3H.js";import"./dataEntryStyles-DzT0ep5z.js";import"./ActivePoints-CFvg43Jt.js";import"./Dot-DF2koN3g.js";import"./activeStyles-CTG2KgqA.js";import"./useAnimationId-DcJ3b19B.js";import"./ErrorBarContext-CF1ouw75.js";import"./SetGraphicalItem-Doit17ow.js";import"./getRadiusAndStrokeWidthFromDot-B4Nwvyfh.js";import"./ActiveShapeUtils-D-equOl3.js";import"./useEffectiveDataKey-7YBRaAIn.js";import"./Cross-sQtHeT5A.js";import"./Rectangle-B-w2oZ3J.js";import"./util-Dxo8gN5i.js";import"./Sector-BVdOU8s1.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
