import{r as p,R as t}from"./iframe-8C24Tydd.js";import{L as n}from"./LineChart-CJwCn7gu.js";import{R as s}from"./zIndexSlice-Dw4Oq4dL.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-D1iVkTMn.js";import{X as d}from"./XAxis-CI8sx2Rv.js";import{Y as y}from"./YAxis-jbouJBfL.js";import{L as u}from"./Legend-C8p-zLrz.js";import{L as h}from"./Line-CdXXfIAJ.js";import{T as g}from"./Tooltip-K9ArSWWb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CN9elUVX.js";import"./resolveDefaultProps-jF8yDnYL.js";import"./get-cF5BDHN6.js";import"./axisSelectors-wolYJBqC.js";import"./throttle-BnR0knX4.js";import"./index-BZrrsPsq.js";import"./index-B9s4wujy.js";import"./polarAxisSelectors-OkcN41hW.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DhysOGqs.js";import"./index-C0a8p3x4.js";import"./index-DTGVc3OM.js";import"./renderedTicksSlice-pib7h8IS.js";import"./index-DqK9E7FS.js";import"./fillDefinitions-DW2cY3tE.js";import"./CartesianChart-CGDUobj1.js";import"./chartDataContext-31zmIAvn.js";import"./CategoricalChart-Bwnqw4e-.js";import"./CartesianAxis-CNwz3srm.js";import"./Layer-D45TlyFk.js";import"./Text-CBQ4JzNL.js";import"./ZIndexLayer-DlPMEPXU.js";import"./Label-D_2s_KcH.js";import"./types-BD1-xaIs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-CsqovMSS.js";import"./symbol-C5k6tAwY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BHUchDOx.js";import"./uniqBy-ChjuKGB9.js";import"./iteratee-23TXNM0i.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BP7tIwQM.js";import"./step-lTKWXilO.js";import"./dataEntryStyles-XtYPtKfF.js";import"./ActivePoints-Dhsdw6YW.js";import"./Dot-BqqZJubD.js";import"./activeStyles-D92_uiFB.js";import"./useAnimationId-CvLS5yyi.js";import"./ErrorBarContext-CfhLJDta.js";import"./SetGraphicalItem-BzYY5Na5.js";import"./getRadiusAndStrokeWidthFromDot-B9BUEQWm.js";import"./ActiveShapeUtils-CytN3lSp.js";import"./useEffectiveDataKey-DR3UcTsu.js";import"./Cross-D9n7s5p8.js";import"./Rectangle-DEd6ta5Q.js";import"./util-Dxo8gN5i.js";import"./Sector-CgvhDJu2.js";const Lt={component:n,docs:{autodocs:!1}},e={render:()=>{const[r,o]=p.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(n,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}},wt=["ToggleBetweenDataKeys"];var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as ToggleBetweenDataKeys,wt as __namedExportsOrder,Lt as default};
