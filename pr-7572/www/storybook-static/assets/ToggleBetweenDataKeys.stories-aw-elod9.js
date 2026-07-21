import{r as n,R as t}from"./iframe-prgBh1Qf.js";import{L as p}from"./LineChart-5EVUS1SR.js";import{R as s}from"./zIndexSlice-DdjKeJcD.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-BpI63CWP.js";import{X as d}from"./XAxis-BWvJnYnv.js";import{Y as y}from"./YAxis-CBYYm0_0.js";import{L as u}from"./Legend-Cvem60oj.js";import{L as h}from"./Line-CWtP-uQX.js";import{T as g}from"./Tooltip-Dv51Ni96.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-FIpEFVMR.js";import"./index-TRfcR2ow.js";import"./index-p6BXHd-9.js";import"./index-Bl_8pcbE.js";import"./index-DznvQCe0.js";import"./throttle-DhCsYq_l.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-C3Oo4Aw2.js";import"./axisSelectors-HShZFAmb.js";import"./resolveDefaultProps-DEZlg4EB.js";import"./isWellBehavedNumber-DeolLGU-.js";import"./d3-scale-CthO7aNE.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-EDRdBXz4.js";import"./chartDataContext-BRCxcd-D.js";import"./CategoricalChart-C0JPuI-j.js";import"./CartesianAxis-DyI7y6fg.js";import"./Layer-B4SceqN1.js";import"./Text-XjkeXE_1.js";import"./DOMUtils-B922snu2.js";import"./Label-CpgdF2bt.js";import"./ZIndexLayer-Coay8-vh.js";import"./types-BLB4Kpk-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Symbols-D7NABao6.js";import"./symbol-Cjo5WqKx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dz4nWuBf.js";import"./uniqBy-B9Vyigvh.js";import"./iteratee-rSndqGt-.js";import"./Curve-Dg6pMiMi.js";import"./step-DljApQAs.js";import"./AnimatedItems-JyKHnHqe.js";import"./useAnimationId-Dho-yl2L.js";import"./ActivePoints-C6psJDBD.js";import"./Dot-BOonALeI.js";import"./RegisterGraphicalItemId-QOUSEuOJ.js";import"./ErrorBarContext-_HsKWF8T.js";import"./GraphicalItemClipPath-D8U1RFPj.js";import"./SetGraphicalItem-cAeJSBXs.js";import"./getRadiusAndStrokeWidthFromDot-BYQTLLCN.js";import"./ActiveShapeUtils-CCY3sSOl.js";import"./Cross-CjrGhwPB.js";import"./Rectangle-CHjX_Wi4.js";import"./util-Dxo8gN5i.js";import"./Sector-G3Ely8-T.js";const Ct={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Et=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,Et as __namedExportsOrder,Ct as default};
