import{r as n,R as t}from"./iframe-B2LONqI2.js";import{L as p}from"./LineChart-pGz1ae0l.js";import{R as s}from"./zIndexSlice-D9n4dMgM.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DICXmCdp.js";import{X as d}from"./XAxis-CrFRKpzA.js";import{Y as y}from"./YAxis-DmtbPyQK.js";import{L as u}from"./Legend-BWi7hVYh.js";import{L as h}from"./Line-DZxFVfIi.js";import{T as g}from"./Tooltip-Cq4arMA5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Iajo6lbi.js";import"./index-DfifFuyy.js";import"./index-DjdDa-5Q.js";import"./index-BFHlNwTp.js";import"./index-BJx3ZruJ.js";import"./throttle-CdlfIoiX.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DBW39Q04.js";import"./resolveDefaultProps-ByqX23gf.js";import"./isWellBehavedNumber-BTg56jQA.js";import"./d3-scale-BIs2XHGH.js";import"./renderedTicksSlice-BQg4gqwf.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CDZJhjlJ.js";import"./chartDataContext-n7-aPmS3.js";import"./CategoricalChart-BjK9U0fb.js";import"./CartesianAxis-CzeVRmKa.js";import"./Layer-Db6cgHvt.js";import"./Text-DImCa3tX.js";import"./DOMUtils-D3RPrc8V.js";import"./useId-BEHZ_Vtx.js";import"./useBackwardsCompatibleTheme-Bt3YMXHU.js";import"./Label-DIFUcr_M.js";import"./ZIndexLayer-CjywmeuP.js";import"./types-B61LwKJ2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BOVFOZD2.js";import"./symbol-DY0s62qR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BGXGgodm.js";import"./uniqBy-C1sXPOkG.js";import"./iteratee-DobLqLd3.js";import"./Curve-B_IAc-Uw.js";import"./step-BlTk4FPh.js";import"./AnimatedItems-DwGSOvtC.js";import"./useAnimationId-Cxf11lMm.js";import"./ActivePoints-qJroTt_-.js";import"./Dot-CF9Y01Yu.js";import"./RegisterGraphicalItemId-C9PI0JLV.js";import"./ErrorBarContext-DheDy1BL.js";import"./GraphicalItemClipPath-bhsI-95T.js";import"./SetGraphicalItem-9JpLqI-V.js";import"./getRadiusAndStrokeWidthFromDot-KnVcOglV.js";import"./ActiveShapeUtils-CWFSVymI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BZhw0Uui.js";import"./Rectangle-Cm9SrNkU.js";import"./util-Dxo8gN5i.js";import"./Sector-9b3I85vI.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
