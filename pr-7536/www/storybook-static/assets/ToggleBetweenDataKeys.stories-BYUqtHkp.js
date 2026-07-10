import{r as n,R as t}from"./iframe-GFu4u_Sr.js";import{L as p}from"./LineChart-D5811kbp.js";import{R as s}from"./zIndexSlice-B5qFJFtI.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-B6smzfpZ.js";import{X as d}from"./XAxis-DCmYbaAb.js";import{Y as y}from"./YAxis-DPkQctbd.js";import{L as u}from"./Legend-JpIvIi3S.js";import{L as h}from"./Line-DxAxJoY7.js";import{T as g}from"./Tooltip-Cpol-hrR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-GJPBo-3J.js";import"./index-fFvV_i1o.js";import"./index-CFslUPNA.js";import"./index-J8ff_bgA.js";import"./index-BoT4UeUf.js";import"./throttle-CQYhSY5q.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Dhv-F3Ii.js";import"./axisSelectors-CITTcs7P.js";import"./resolveDefaultProps-B2kj8vGo.js";import"./isWellBehavedNumber-BzBjtwBe.js";import"./d3-scale-XJfpe2FZ.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-5jGrrHiW.js";import"./chartDataContext-ABcCQ5OY.js";import"./CategoricalChart-DaWqkQxP.js";import"./CartesianAxis-BChvL9JZ.js";import"./Layer-rjKJbMCf.js";import"./Text-CHl4arA0.js";import"./DOMUtils-BV_Da9To.js";import"./Label-DJGaBZN0.js";import"./ZIndexLayer-DO98mi6X.js";import"./types-CpBB06eN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DVtZC3AN.js";import"./symbol-DEeTDO-b.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DBEFVHKJ.js";import"./uniqBy-eEvGEJfN.js";import"./iteratee-BruxsO2g.js";import"./Curve-d1fxHJEK.js";import"./step-CJ2svyaN.js";import"./AnimatedItems-BMr3q6ws.js";import"./useAnimationId-DHrR_uSV.js";import"./ActivePoints-BKnSZj52.js";import"./Dot-Cf60LmSz.js";import"./RegisterGraphicalItemId-C2TZCZTY.js";import"./ErrorBarContext-E48lOcW2.js";import"./GraphicalItemClipPath-Dp-oK_MY.js";import"./SetGraphicalItem-BWFxWlyV.js";import"./getRadiusAndStrokeWidthFromDot-CavQSINe.js";import"./ActiveShapeUtils-DrDRZtp1.js";import"./Cross-hH2FjyBi.js";import"./Rectangle-BEnsF74A.js";import"./util-Dxo8gN5i.js";import"./Sector-E2MNApxp.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
