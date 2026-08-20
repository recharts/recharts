import{r as n,R as t}from"./iframe-Csa_oMfm.js";import{L as p}from"./LineChart-CXTVrORs.js";import{R as s}from"./zIndexSlice-BxquUHtq.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-C9jBZcbI.js";import{X as d}from"./XAxis-uDV1OEUW.js";import{Y as y}from"./YAxis-tYvWvlOq.js";import{L as u}from"./Legend-Cuf7yFuV.js";import{L as h}from"./Line-CF8Pd-gQ.js";import{T as g}from"./Tooltip-BsrPmR3i.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CQ2cp1Au.js";import"./index-CfKNqcoW.js";import"./index-CRP06Y07.js";import"./index-DAq0SL0A.js";import"./index-IjpwRB6F.js";import"./throttle-CSxXhEFU.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BG4FCknP.js";import"./resolveDefaultProps-Byem5JrG.js";import"./isWellBehavedNumber-DWOo1BMI.js";import"./d3-scale-BtpAo9Oq.js";import"./renderedTicksSlice-CaOZRI6N.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-LGWyPi5p.js";import"./chartDataContext-BH4G6z7_.js";import"./CategoricalChart-DnCPfHVF.js";import"./CartesianAxis-Cukq_zeL.js";import"./Layer-BKPwema6.js";import"./Text-C_eX2bjG.js";import"./DOMUtils-BFEBcDdR.js";import"./useId-D1v4eS8N.js";import"./useBackwardsCompatibleTheme-D8HYBwfJ.js";import"./Label-KmPVqzrB.js";import"./ZIndexLayer-Dj0ApPdW.js";import"./types-C6llbAwt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-B7lTBk7e.js";import"./symbol-Dua86BWe.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CbgcJIP8.js";import"./uniqBy-DJZRRRzN.js";import"./iteratee-BCfsRupd.js";import"./Curve-BqFDmSfU.js";import"./step-o0DAusso.js";import"./AnimatedItems-DNlS9_lf.js";import"./useAnimationId-C2aTUSsq.js";import"./ActivePoints-CpN93VEs.js";import"./Dot-BraMSZz_.js";import"./RegisterGraphicalItemId-BpNCJT0O.js";import"./ErrorBarContext-Ch5kSSkb.js";import"./GraphicalItemClipPath-BFLHGHAh.js";import"./SetGraphicalItem-DHDvzfH7.js";import"./getRadiusAndStrokeWidthFromDot-DXCwtpcK.js";import"./ActiveShapeUtils-DtwpfCs_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CvyQTzF9.js";import"./Rectangle-CHMSO-4U.js";import"./util-Dxo8gN5i.js";import"./Sector-fsmInxGH.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
