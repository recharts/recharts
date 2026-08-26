import{r as n,R as t}from"./iframe-JCMHkfpO.js";import{L as p}from"./LineChart-7mH5DiuL.js";import{R as s}from"./zIndexSlice-Cbic3BON.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CDYslKd5.js";import{X as d}from"./XAxis-CBMMNbSw.js";import{Y as y}from"./YAxis-OgBkmni0.js";import{L as u}from"./Legend-BPW7Jl2x.js";import{L as h}from"./Line-WjI1QEi3.js";import{T as g}from"./Tooltip-D2bj6ONv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-nbVSXC9z.js";import"./index-Bt8eCKRM.js";import"./index-QEaCAJHN.js";import"./index-D8yPwBIb.js";import"./index-Ds8zJsBP.js";import"./throttle-DlFFEpQV.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BpNs_jFY.js";import"./resolveDefaultProps-CNbvqjMv.js";import"./isWellBehavedNumber-K1PO631O.js";import"./d3-scale-BsjeCU8L.js";import"./renderedTicksSlice-BRnimtTJ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Be_k-GK6.js";import"./chartDataContext-DRtbDYDE.js";import"./CategoricalChart-Do9lblK2.js";import"./CartesianAxis-B0p8oTh4.js";import"./Layer-DW0R6u6Q.js";import"./Text-H5O9sMOg.js";import"./DOMUtils-lO18r89G.js";import"./useId-5LAcqd5g.js";import"./useBackwardsCompatibleTheme-BlAxrm86.js";import"./Label-DgnjH2BN.js";import"./ZIndexLayer-DZJzCe6C.js";import"./types-CrNZa3RP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DKIDWMPJ.js";import"./symbol-CW7sNOrJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BrBzv7lz.js";import"./uniqBy-DRqYT5l3.js";import"./iteratee-T-3V0feC.js";import"./Curve-YTzEjIYa.js";import"./step-CcEA6ZtU.js";import"./AnimatedItems-dkTJaSWs.js";import"./useAnimationId-CtDYtQmo.js";import"./ActivePoints-B2ZGk6hG.js";import"./Dot-CefwgMiR.js";import"./RegisterGraphicalItemId-DyknErxM.js";import"./ErrorBarContext-IV7IvqZh.js";import"./GraphicalItemClipPath-BifFhr-e.js";import"./SetGraphicalItem-BPezHgiz.js";import"./getRadiusAndStrokeWidthFromDot-Bo70O2Eq.js";import"./ActiveShapeUtils-2F7jkNpt.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DP-DTtms.js";import"./Rectangle-CVC8ePoO.js";import"./util-Dxo8gN5i.js";import"./Sector-Duv1HULw.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
