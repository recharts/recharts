import{r as p,R as t}from"./iframe-CIqnkIPF.js";import{L as n}from"./LineChart-Chf0Hn92.js";import{R as s}from"./zIndexSlice-C4_auGQK.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-COcY7Aqq.js";import{X as d}from"./XAxis-B7yx9F7n.js";import{Y as y}from"./YAxis-uqdlbLxE.js";import{L as u}from"./Legend-CeNhuuzW.js";import{L as h}from"./Line-CIVM0eLj.js";import{T as g}from"./Tooltip-49WgU1US.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BI930gKz.js";import"./resolveDefaultProps-BFyfbVPX.js";import"./get-C2VjdU0L.js";import"./axisSelectors-tSjH_GJH.js";import"./throttle-DQoqhRFH.js";import"./index-9S55HN04.js";import"./index-BLp3voyE.js";import"./isWellBehavedNumber-qR6709gc.js";import"./d3-scale-Bhl30Eoo.js";import"./index-Dd4tpery.js";import"./index-CmdQhCAH.js";import"./renderedTicksSlice-CvMTSVT4.js";import"./index-DK82_Rv1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CjwJjVuV.js";import"./chartDataContext-StRUZ171.js";import"./CategoricalChart-kSvqIkP0.js";import"./CartesianAxis-D54rrpy0.js";import"./Layer-BamNj_61.js";import"./Text-DQlwJtIP.js";import"./DOMUtils-DNJKvmAc.js";import"./useId-Bxa3d20C.js";import"./useBackwardsCompatibleTheme-tny2gIbf.js";import"./Label-Drah4wki.js";import"./ZIndexLayer-CdFbga_E.js";import"./types-t2__B9uA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BuldplOI.js";import"./symbol-CEHb0TCd.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DWWrDqts.js";import"./uniqBy-CrC70t5H.js";import"./iteratee-DAHo7lUT.js";import"./Curve-B3_VtN3j.js";import"./step-CbHMrxnl.js";import"./AnimatedItems-DeKxEgFK.js";import"./useAnimationId-Cd4eq7V7.js";import"./ActivePoints-BXMF2o4n.js";import"./Dot-CwC_vt7v.js";import"./RegisterGraphicalItemId-CTUnkLRc.js";import"./ErrorBarContext-Ow8l1Zrp.js";import"./GraphicalItemClipPath-Cq4Ga7ez.js";import"./SetGraphicalItem-A5whYu6T.js";import"./getRadiusAndStrokeWidthFromDot-CfFHUr4w.js";import"./ActiveShapeUtils-BeOi9VVh.js";import"./useGraphicalItemIdentity-BPBVnbd3.js";import"./Cross-akBpwgZM.js";import"./Rectangle-aJg6paiS.js";import"./util-Dxo8gN5i.js";import"./Sector-C0BiXkJv.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
