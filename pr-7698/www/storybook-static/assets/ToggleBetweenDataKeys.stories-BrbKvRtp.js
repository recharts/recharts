import{r as n,R as t}from"./iframe-zaa1iZav.js";import{L as p}from"./LineChart-ir5wyAOY.js";import{R as s}from"./zIndexSlice-BWWEcbGp.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CNCUB2Ph.js";import{X as d}from"./XAxis-BVnwJxOu.js";import{Y as y}from"./YAxis-DJCm-s1B.js";import{L as u}from"./Legend-rKi-Jd1L.js";import{L as h}from"./Line-Dy42oF7S.js";import{T as g}from"./Tooltip-DmmlIPoF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bf_8sWMW.js";import"./index-BZPWANmU.js";import"./index-CM-qLXxp.js";import"./index-BrIYS7Za.js";import"./index-B2mdcnwD.js";import"./throttle-CPqxLIQd.js";import"./get-C2VjdU0L.js";import"./axisSelectors-ucT8kUEv.js";import"./resolveDefaultProps-CJqzH_DM.js";import"./isWellBehavedNumber-DAhZ9La7.js";import"./d3-scale-DKZbRsMk.js";import"./renderedTicksSlice-jJ4uAB34.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BUEIFsCx.js";import"./chartDataContext-CPRHK_4k.js";import"./CategoricalChart-DzU0tABe.js";import"./CartesianAxis-BEMiFdQK.js";import"./Layer-Diqr5-jO.js";import"./Text-CNT20nWc.js";import"./DOMUtils-CDT7WRtk.js";import"./useId-B4zmx8V0.js";import"./useBackwardsCompatibleTheme-XO0ISL55.js";import"./Label-dEEe5X5F.js";import"./ZIndexLayer-Dn1PwF1U.js";import"./types-DFArERnY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-qor2sXTI.js";import"./symbol-Bekqv1-x.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BkrFnIvv.js";import"./uniqBy-BVIzKSm2.js";import"./iteratee-CL50YqF6.js";import"./Curve-PUx2QnOd.js";import"./step-Bfrhe9AG.js";import"./AnimatedItems-O1YgZXLs.js";import"./useAnimationId-B8kms9uE.js";import"./ActivePoints-DVBi-AIt.js";import"./Dot-oGoSOzAY.js";import"./RegisterGraphicalItemId-dsCSOxKS.js";import"./ErrorBarContext-ZTRuZpEO.js";import"./GraphicalItemClipPath-Dhs9LVS9.js";import"./SetGraphicalItem-Dk_WNLiG.js";import"./getRadiusAndStrokeWidthFromDot-DJ1u3-OH.js";import"./ActiveShapeUtils-lGuUrwlM.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BLdWMmSw.js";import"./Rectangle-Ddidi1ZR.js";import"./util-Dxo8gN5i.js";import"./Sector-D1nZ1jgF.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
