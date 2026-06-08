import{r as n,R as t}from"./iframe-D_P_Mvdh.js";import{L as p}from"./LineChart-BMRRPRTF.js";import{R as s}from"./zIndexSlice-DWG8bKuL.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-CXlIILXr.js";import{X as d}from"./XAxis-qMeue6_L.js";import{Y as y}from"./YAxis-DVaDEIZb.js";import{L as u}from"./Legend-DohzNoFA.js";import{L as h}from"./Line-CWgXDn5v.js";import{T as g}from"./Tooltip-Bhivaixc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DF8D9EH3.js";import"./index-B9DAC9X3.js";import"./index-B6Dv4SpM.js";import"./index-CPg71y3f.js";import"./index-DK1y_UWu.js";import"./immer-zUUuTuVf.js";import"./get-B4It9gJG.js";import"./renderedTicksSlice-BNdYyHmj.js";import"./axisSelectors-CousMoEm.js";import"./d3-scale-Bmp1cDWa.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-D055Uems.js";import"./isWellBehavedNumber-CxbXcWx5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-iR1LAWUH.js";import"./chartDataContext-Dv19WRuB.js";import"./CategoricalChart-D93P9I6f.js";import"./CartesianAxis-CFHvtBrK.js";import"./Layer-DPlEhKnR.js";import"./Text-C1WaZOPt.js";import"./DOMUtils-B5W7y1y7.js";import"./Label-XikFYvD7.js";import"./ZIndexLayer-B_lVTO01.js";import"./types-BEWgGyLa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-EQJpu1dQ.js";import"./symbol-BLc3Uspj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-saJFZnh4.js";import"./uniqBy-CXjOom_h.js";import"./iteratee-rU0UrMDe.js";import"./Curve-CAkixkLO.js";import"./step-DWwWZa2n.js";import"./AnimatedItems-TOHLuZU5.js";import"./useAnimationId-B85ZSEKA.js";import"./ActivePoints-1kyrVvID.js";import"./Dot-BAS0IQWR.js";import"./RegisterGraphicalItemId-C0Rctadm.js";import"./ErrorBarContext-CuQjxX0z.js";import"./GraphicalItemClipPath-BH1bphsQ.js";import"./SetGraphicalItem-BXfByqWK.js";import"./getRadiusAndStrokeWidthFromDot-BQbb3rIK.js";import"./ActiveShapeUtils-h9V9VuFf.js";import"./Cross-xYXJuT6U.js";import"./Rectangle-BP8C9lPh.js";import"./Sector-Blt7_rmG.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
