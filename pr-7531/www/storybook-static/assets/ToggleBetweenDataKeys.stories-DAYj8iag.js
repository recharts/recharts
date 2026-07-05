import{r as n,R as t}from"./iframe-CaZrduHG.js";import{L as p}from"./LineChart-BCVxfF6y.js";import{R as s}from"./zIndexSlice-CvUTBx_8.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C0il1H2Z.js";import{X as d}from"./XAxis-CHaMVHb_.js";import{Y as y}from"./YAxis-DyfSUlDI.js";import{L as u}from"./Legend-BBfaOcTC.js";import{L as h}from"./Line-BZzowOBE.js";import{T as g}from"./Tooltip-K2l47E_T.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-6f4LgHbs.js";import"./index-dOcL02AF.js";import"./index-BkusJAc5.js";import"./index-CYnc97bp.js";import"./index-CdgMfIsn.js";import"./throttle-x_arNXZJ.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CarnP_oQ.js";import"./axisSelectors-CbEPJ0ND.js";import"./resolveDefaultProps-hTjQl1Jw.js";import"./isWellBehavedNumber-Ds6x18SL.js";import"./d3-scale-EIFV6mVT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DiGyCZXM.js";import"./chartDataContext-BSaewpt8.js";import"./CategoricalChart-d16gVM5b.js";import"./CartesianAxis-DB1Mym72.js";import"./Layer-DIgzKEwe.js";import"./Text-Rs_1_idd.js";import"./DOMUtils-CmlaPQx2.js";import"./Label-BWJz-33r.js";import"./ZIndexLayer-dEGCaPIX.js";import"./types-CJ_sW9YU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-i74qPNSp.js";import"./symbol-BdXTkLlK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-M2uTjwmd.js";import"./uniqBy-ClKVU6lM.js";import"./iteratee-DfJ2FbmX.js";import"./Curve-jKjHUG6Y.js";import"./step-C-Vvb7fY.js";import"./AnimatedItems-DghnEQ9g.js";import"./useAnimationId-Ddowgb5f.js";import"./ActivePoints-dA3071Q3.js";import"./Dot-CvRN0Hh7.js";import"./RegisterGraphicalItemId-pMJ6sSz4.js";import"./ErrorBarContext-B9ivevc9.js";import"./GraphicalItemClipPath-CRbchFTR.js";import"./SetGraphicalItem-0qDOjHM6.js";import"./getRadiusAndStrokeWidthFromDot-BNORI3ED.js";import"./ActiveShapeUtils-O1yKcLVj.js";import"./Cross-6SrpIpYe.js";import"./Rectangle-BwbsF6Pn.js";import"./util-Dxo8gN5i.js";import"./Sector-2ER15uV_.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ct=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Ct as __namedExportsOrder,vt as default};
