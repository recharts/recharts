import{r as n,R as t}from"./iframe-OWn8oF1A.js";import{L as p}from"./LineChart-ZQmO2lsS.js";import{R as s}from"./zIndexSlice-CwJzB82v.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-Dfups2-I.js";import{X as d}from"./XAxis-CCMr852Y.js";import{Y as y}from"./YAxis-CRJnLbnO.js";import{L as u}from"./Legend-BAxAQ2CS.js";import{L as h}from"./Line-DkBHzBVs.js";import{T as g}from"./Tooltip-GkMt5zv4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-i1jsdj22.js";import"./index-CM0MgkCu.js";import"./index-C9Vm6jKM.js";import"./index-CrP56Nug.js";import"./index-NwmZ423s.js";import"./throttle-DWaXsXNb.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BcSe1XYn.js";import"./resolveDefaultProps-IEje57sC.js";import"./isWellBehavedNumber-BZ7ES7WU.js";import"./d3-scale-CwANqbyk.js";import"./renderedTicksSlice-Sc5c_SM5.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D8znfAM6.js";import"./chartDataContext-fxx91kDP.js";import"./CategoricalChart-CCczjnIs.js";import"./CartesianAxis-DE3Bauq7.js";import"./Layer-CqyZBrFC.js";import"./Text-P3K5HdaU.js";import"./DOMUtils-DW9lfnAW.js";import"./useId-BS68P7zj.js";import"./useBackwardsCompatibleTheme-B7aULi62.js";import"./Label-AqmTYyGt.js";import"./ZIndexLayer-C9URSHi7.js";import"./types-qoS_u5dB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols--FRgZ-u1.js";import"./symbol-BSDGb50L.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CL4Ag10e.js";import"./uniqBy-C7xqcq1F.js";import"./iteratee-Co34_xBw.js";import"./Curve-CeJvEjjA.js";import"./step-D_RWTSpX.js";import"./AnimatedItems-_CvB9alV.js";import"./useAnimationId-B2Oo-Kvv.js";import"./ActivePoints-nFn7e4bI.js";import"./Dot-COcUPaQ9.js";import"./RegisterGraphicalItemId-zybFqkLh.js";import"./ErrorBarContext-BicDrW-x.js";import"./GraphicalItemClipPath-BKywaUa4.js";import"./SetGraphicalItem-BiApMsd9.js";import"./getRadiusAndStrokeWidthFromDot-DqQ5ADme.js";import"./ActiveShapeUtils-5n9-MhSP.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-BYCrvAN8.js";import"./Rectangle-9cgaQESO.js";import"./util-Dxo8gN5i.js";import"./Sector-DeRk1Vpf.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(u,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
