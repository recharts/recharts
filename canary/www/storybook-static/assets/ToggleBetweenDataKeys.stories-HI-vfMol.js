import{r as n,R as t}from"./iframe-BW71A1Nl.js";import{L as p}from"./LineChart-Dl416hg_.js";import{R as s}from"./zIndexSlice-D0nATGhG.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Cl49Y0EH.js";import{X as d}from"./XAxis-DjClnNcb.js";import{Y as y}from"./YAxis-CBUi58KC.js";import{L as u}from"./Legend-Cx8q1OTp.js";import{L as h}from"./Line-EpLSPRs3.js";import{T as g}from"./Tooltip-CbRCMo5d.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B0unhTn-.js";import"./index-7I5wiu9M.js";import"./index-BeMOkAqZ.js";import"./index-qgRbHTql.js";import"./index-CUqZ5NZx.js";import"./immer-iZdzJVDj.js";import"./get-BsK8Vst9.js";import"./renderedTicksSlice-BObQrIhG.js";import"./axisSelectors-CGn4mfga.js";import"./d3-scale-vdMRCf0o.js";import"./resolveDefaultProps-BwvNNDLm.js";import"./isWellBehavedNumber-6M6ThiRO.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CGswDKyQ.js";import"./chartDataContext-DixWbQnN.js";import"./CategoricalChart-C428T1Jl.js";import"./CartesianAxis-6UaBWKrc.js";import"./Layer-BmYZzoaR.js";import"./Text-DDeu8cp3.js";import"./DOMUtils-mo8tevis.js";import"./Label-7Nd_0-bw.js";import"./ZIndexLayer-B4CcndAw.js";import"./types-CoBkUvrA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BuYDGlkC.js";import"./symbol-CvfymRh0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B07ItHDs.js";import"./uniqBy-DLbJkmvT.js";import"./iteratee-D3nwGriT.js";import"./Curve-DRyRFJEG.js";import"./step-m-kUV5sp.js";import"./AnimatedItems-D3llU_s4.js";import"./useAnimationId-L1gInTUa.js";import"./ActivePoints-C3kyVPB9.js";import"./Dot-CymeOwpM.js";import"./RegisterGraphicalItemId-DpVIzNFe.js";import"./ErrorBarContext-Pp_bAm-i.js";import"./GraphicalItemClipPath-C8hys0YQ.js";import"./SetGraphicalItem-DVIO0q7q.js";import"./getRadiusAndStrokeWidthFromDot-Dv0_9MPJ.js";import"./ActiveShapeUtils-DnbIkStc.js";import"./Cross-BTbsn6cT.js";import"./Rectangle-D96ELsS-.js";import"./util-Dxo8gN5i.js";import"./Sector-5Zp1hLTU.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
