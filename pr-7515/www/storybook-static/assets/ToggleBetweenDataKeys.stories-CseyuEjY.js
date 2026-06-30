import{r as n,R as t}from"./iframe-ClZ97IhH.js";import{L as p}from"./LineChart-Cc7CvVjY.js";import{R as s}from"./zIndexSlice-C5PhT0E1.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Up-r6Jpo.js";import{X as d}from"./XAxis-CNZNRqSN.js";import{Y as y}from"./YAxis-HP_sdQVr.js";import{L as u}from"./Legend-NU_4K7aq.js";import{L as h}from"./Line-2hGhSOE2.js";import{T as g}from"./Tooltip-uwiVUldc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BLJ6xSnq.js";import"./index-CFJQbE9C.js";import"./index-6l3olgx1.js";import"./index-CrQHS0ha.js";import"./index-D9OO5l1d.js";import"./throttle-CenVclrT.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-Cu1gA7XW.js";import"./axisSelectors-YPPwLD-Y.js";import"./resolveDefaultProps-CcaTf9gV.js";import"./isWellBehavedNumber-BOULWsxq.js";import"./d3-scale-BrF_Bfnv.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CLbAeK38.js";import"./chartDataContext-DXptRcnW.js";import"./CategoricalChart-CU7_I9di.js";import"./CartesianAxis-BkbswnOw.js";import"./Layer-av8QWZYv.js";import"./Text-CUeHZ0Lm.js";import"./DOMUtils-C7DdSVbv.js";import"./Label-Bh1DkGaJ.js";import"./ZIndexLayer-DzfxsJEt.js";import"./types-CfFSLUx9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-BV7W1Jn4.js";import"./symbol-C8RgFcPM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bq5Vxvej.js";import"./uniqBy-WOO0nBZ6.js";import"./iteratee-B_h2EV3R.js";import"./Curve-DEZWs80m.js";import"./step-RKP5ji2w.js";import"./AnimatedItems-Ugycet-g.js";import"./useAnimationId-BXxNbWRb.js";import"./ActivePoints-JUHjUNnj.js";import"./Dot-C94-4eAI.js";import"./RegisterGraphicalItemId-XhYDb4e7.js";import"./ErrorBarContext-D5P-GrTa.js";import"./GraphicalItemClipPath-DgZI2AKv.js";import"./SetGraphicalItem-DzMBG2H0.js";import"./getRadiusAndStrokeWidthFromDot-CiF60Eet.js";import"./ActiveShapeUtils-SliXRAYD.js";import"./Cross-WVRf3tAf.js";import"./Rectangle-DcxWrdiG.js";import"./util-Dxo8gN5i.js";import"./Sector-BInnoliH.js";const vt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
