import{r as n,R as t}from"./iframe-BTdOdF9K.js";import{L as p}from"./LineChart-sgV2UR2G.js";import{R as s}from"./zIndexSlice-CcQiDZWo.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-72MKf0pk.js";import{X as d}from"./XAxis-BHkAQnNg.js";import{Y as y}from"./YAxis-D6a9CyOE.js";import{L as u}from"./Legend-CTek2g6f.js";import{L as h}from"./Line-D-0vjVan.js";import{T as g}from"./Tooltip-Cgor40im.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DRLvm4aR.js";import"./resolveDefaultProps-CYx6Kk4A.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CEXy452f.js";import"./throttle-BGr8RGVS.js";import"./index-Cq8tu8wQ.js";import"./index-Ced2HG28.js";import"./isWellBehavedNumber-ZiYy0LNM.js";import"./d3-scale-B2K1_ofr.js";import"./index-uQqEtlSq.js";import"./index-CwuReyQ-.js";import"./renderedTicksSlice-CwdI_hq1.js";import"./index-DifGdyog.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DxgKFkUN.js";import"./chartDataContext-BIlbUR4j.js";import"./CategoricalChart-CWtNWW3W.js";import"./CartesianAxis-Bjag6PpJ.js";import"./Layer-BIBCumPU.js";import"./Text-ad69v4o0.js";import"./DOMUtils-D3jMOIM3.js";import"./useId-R0lZrYSa.js";import"./useBackwardsCompatibleTheme-CO-7LDmO.js";import"./Label-Cm499Ers.js";import"./ZIndexLayer-C5GGlVd8.js";import"./types-DjPeWPew.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-1hS8x8It.js";import"./symbol-4RT96rpw.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CabjllZT.js";import"./uniqBy-w2GX_Mj8.js";import"./iteratee-BGtIuJre.js";import"./Curve-D7vA0Myr.js";import"./step-DMCy-hl7.js";import"./AnimatedItems-DKFfKX33.js";import"./useAnimationId-C9O8Tbu7.js";import"./ActivePoints-DEDNVxhq.js";import"./Dot-C09h-5Zk.js";import"./RegisterGraphicalItemId-CtQfyEXD.js";import"./ErrorBarContext-CqdXJ3Jz.js";import"./GraphicalItemClipPath-BNHF0YUS.js";import"./SetGraphicalItem-CBZad1k7.js";import"./getRadiusAndStrokeWidthFromDot-CXK6U_2t.js";import"./ActiveShapeUtils-HwCQ4yPj.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CbIRCw66.js";import"./Rectangle-CD06WOQp.js";import"./util-Dxo8gN5i.js";import"./Sector-DMwJNIW8.js";const xt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,kt as __namedExportsOrder,xt as default};
