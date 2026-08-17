import{r as n,R as t}from"./iframe-B8V7BJ0L.js";import{L as p}from"./LineChart-Bc6G81H6.js";import{R as s}from"./zIndexSlice-D-1XQb3V.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-bAiL_XCh.js";import{X as d}from"./XAxis-R6swZGmX.js";import{Y as y}from"./YAxis-BU97uoiQ.js";import{L as u}from"./Legend-J09ZaTSW.js";import{L as h}from"./Line-Dm3fZtVe.js";import{T as g}from"./Tooltip-DHFP58XQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BnC-Jwam.js";import"./index-CpRh0f3d.js";import"./index-I3Tcx3uB.js";import"./index-CEyD9286.js";import"./index-BrHErK0F.js";import"./throttle-CesEnXHC.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CtDpom86.js";import"./resolveDefaultProps-BVc4-u0s.js";import"./isWellBehavedNumber-DJ8Z02p0.js";import"./d3-scale-C_Pwa9HE.js";import"./renderedTicksSlice-BEoD_C5H.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DbV6u1bg.js";import"./chartDataContext-DkhpcBdG.js";import"./CategoricalChart-CRJAPCFd.js";import"./CartesianAxis-BCPc0Lsn.js";import"./Layer-DSZQNu8u.js";import"./Text-DNMx3NKa.js";import"./DOMUtils-BPFNazbq.js";import"./useBackwardsCompatibleTheme-DRsZnCOS.js";import"./Label-eqtAA7cE.js";import"./ZIndexLayer-D9SG3bxa.js";import"./types-Bynmgm1l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-Dn_MwxmN.js";import"./symbol-DCQGgXT5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BQ3aMjmL.js";import"./uniqBy-8Hs_PlTr.js";import"./iteratee-CVu6Uo0K.js";import"./Curve-_vFkPdEp.js";import"./step-Dn4gXRUd.js";import"./AnimatedItems-D2zk6WJL.js";import"./useAnimationId-D0vrdmF4.js";import"./ActivePoints-Bcxj_Z9o.js";import"./Dot-CtEJdvTp.js";import"./RegisterGraphicalItemId-BrpEQBfx.js";import"./ErrorBarContext-T5Q1bKBI.js";import"./GraphicalItemClipPath-C5JNAsGG.js";import"./SetGraphicalItem-Cww5wWY0.js";import"./getRadiusAndStrokeWidthFromDot-CrG0xVOS.js";import"./ActiveShapeUtils-EzXi-ssF.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CG3VqhlT.js";import"./Rectangle---gO3v41.js";import"./util-Dxo8gN5i.js";import"./Sector-CxR8sg-i.js";const Lt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
