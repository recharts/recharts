import{r as p,R as t}from"./iframe-BO6kNEfQ.js";import{L as n}from"./LineChart-ydMTI78X.js";import{R as s}from"./zIndexSlice-CSvwJ_UT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-sQS0RZSA.js";import{X as d}from"./XAxis-DUMRPyWG.js";import{Y as y}from"./YAxis-Bpx19asJ.js";import{L as u}from"./Legend-wrLObU49.js";import{L as h}from"./Line-By4A7qsj.js";import{T as g}from"./Tooltip-BJ6ncSEb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BjhorxtA.js";import"./resolveDefaultProps-DeeWTLmP.js";import"./get-C2VjdU0L.js";import"./axisSelectors-clIGt-1m.js";import"./throttle-CC5fq1IH.js";import"./index-C9e-3BIk.js";import"./index-CAnCLEru.js";import"./isWellBehavedNumber-B-Ulh-Re.js";import"./d3-scale-B89J0uLC.js";import"./index-CTBq7QCd.js";import"./index-BiTwoYeC.js";import"./renderedTicksSlice-CyXD3owy.js";import"./index-DGFWSvO2.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DbU3p1bm.js";import"./chartDataContext-C8PMDwYi.js";import"./CategoricalChart-BBSMzdqi.js";import"./CartesianAxis-DkQVUKnt.js";import"./Layer-DAnsZuJj.js";import"./Text-CvDq8Z5Q.js";import"./DOMUtils-DjzhJzRg.js";import"./useId-CAIxAqit.js";import"./useBackwardsCompatibleTheme-DwFWyF9F.js";import"./Label-ktTcBfs2.js";import"./ZIndexLayer-BVG745mx.js";import"./types-CrvIZc3a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-VJ3ENrFL.js";import"./symbol-DPXsMkWI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bows1p5H.js";import"./uniqBy-QqkFbTHY.js";import"./iteratee-CYMuw_Xv.js";import"./Curve-hgySA8iE.js";import"./step-BjM5lwd1.js";import"./AnimatedItems-FM3uBbR2.js";import"./useAnimationId-NFss7X44.js";import"./ActivePoints--BVAgljg.js";import"./Dot-Bps0tpeZ.js";import"./RegisterGraphicalItemId-DXmwJq0A.js";import"./ErrorBarContext-DAb2_Ge3.js";import"./GraphicalItemClipPath-CqCtj_pv.js";import"./SetGraphicalItem-CMnburaU.js";import"./getRadiusAndStrokeWidthFromDot-TV6VUSJm.js";import"./ActiveShapeUtils-CRw266nd.js";import"./useGraphicalItemIdentity-BOcRclg4.js";import"./Cross-DDTRSnDt.js";import"./Rectangle-bQ1U5Rvt.js";import"./util-Dxo8gN5i.js";import"./Sector-CsR_fyCv.js";const xt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},kt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
