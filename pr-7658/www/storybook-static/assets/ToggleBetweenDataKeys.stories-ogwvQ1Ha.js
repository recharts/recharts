import{r as n,R as t}from"./iframe-BEU0VEzj.js";import{L as p}from"./LineChart-C0H-Jll8.js";import{R as s}from"./zIndexSlice-mhTpFGis.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DLMroFrg.js";import{X as d}from"./XAxis-DHuUhI2Z.js";import{Y as y}from"./YAxis-Bwob8VzU.js";import{L as u}from"./Legend-Bq1E_AiK.js";import{L as h}from"./Line-DzyLu5qi.js";import{T as g}from"./Tooltip-fDadjpQf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BgY8CE2w.js";import"./index-C2ItmsS3.js";import"./index-urNlcYtz.js";import"./index-C8ohCoZb.js";import"./index-DaENtIET.js";import"./throttle-BnTbmX16.js";import"./get-C2VjdU0L.js";import"./axisSelectors-X6Iztzs2.js";import"./resolveDefaultProps-3wYQv28v.js";import"./isWellBehavedNumber-C2k8qIGv.js";import"./d3-scale-D-iBl5g_.js";import"./renderedTicksSlice-xgVkluQT.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-SjLeJZWR.js";import"./chartDataContext-DlMENguP.js";import"./CategoricalChart-venkO3Qs.js";import"./CartesianAxis-I3SN0dPC.js";import"./Layer-BxzS3V_h.js";import"./Text-1VnO-5nk.js";import"./DOMUtils-B3nT0fft.js";import"./useId-DlO5xKwO.js";import"./useBackwardsCompatibleTheme-DbNZLS-G.js";import"./Label-ChFEzAZk.js";import"./ZIndexLayer-nwUJ9Z8I.js";import"./types-BcpteXUs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BStY3Nch.js";import"./symbol-ByyL1C9a.js";import"./path-DyVhHtw_.js";import"./useElementOffset-kyh44B3q.js";import"./uniqBy-ClPneOeo.js";import"./iteratee-BNBpiK-0.js";import"./Curve-DRodi9QH.js";import"./step-B0HdwPOl.js";import"./AnimatedItems-C1OsdHSy.js";import"./useAnimationId-BpSAAbQy.js";import"./ActivePoints-DmPjn1vV.js";import"./Dot-BaUbFdJY.js";import"./RegisterGraphicalItemId-C3EeC43L.js";import"./ErrorBarContext-OH4Zfmtr.js";import"./GraphicalItemClipPath-DWoEZRp9.js";import"./SetGraphicalItem-BO4L7W4Z.js";import"./getRadiusAndStrokeWidthFromDot-U5qUSWt7.js";import"./ActiveShapeUtils-DJPjSqHL.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CQdePycd.js";import"./Rectangle-BBifCncj.js";import"./util-Dxo8gN5i.js";import"./Sector-DYrzJMn1.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
