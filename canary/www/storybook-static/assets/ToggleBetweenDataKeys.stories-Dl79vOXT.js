import{r as n,e as t}from"./iframe-CSwGLTl-.js";import{L as p}from"./LineChart-Dm9p-ojh.js";import{R as s}from"./arrayEqualityCheck-CL-IA6GV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as l}from"./CartesianGrid-DJccOMGa.js";import{X as d}from"./XAxis-Cejj1aG-.js";import{Y as y}from"./YAxis-BT-Q7oTj.js";import{L as h}from"./Legend-DWU35zat.js";import{L as u}from"./Line-ETNwqRkd.js";import{T as g}from"./Tooltip-CUOd1fOu.js";import{R as K}from"./RechartsHookInspector-DZ91OVzb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-RCqgoQSn.js";import"./index-brbC5UV5.js";import"./immer-BjkgQKa2.js";import"./hooks-Cr-aq8eM.js";import"./axisSelectors-B8HhzkAr.js";import"./d3-scale-CqlzxEpT.js";import"./zIndexSlice-DK1kcZUU.js";import"./renderedTicksSlice-BnadoeJ5.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B2Rv6APp.js";import"./chartDataContext-ipF3cfQe.js";import"./CategoricalChart-JOHaAwTs.js";import"./resolveDefaultProps-DbJcxAkM.js";import"./CartesianAxis-DDF2MY6x.js";import"./Layer-D0EBgQRA.js";import"./Text-D_9ONK9Z.js";import"./DOMUtils-C-NFkrvl.js";import"./Label-ClsrPG6g.js";import"./ZIndexLayer-DrCWdG12.js";import"./types-D4DhPIk-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CiFP5VGL.js";import"./symbol-B4MVsM7L.js";import"./step-BjVh3UOw.js";import"./useElementOffset-776TLx6I.js";import"./uniqBy-UkAqSFPJ.js";import"./iteratee-7prAmQ4J.js";import"./ReactUtils-Dux8j2Wm.js";import"./ActivePoints-BjU36epI.js";import"./Dot-Chm2SzUE.js";import"./RegisterGraphicalItemId-hGiyGzsL.js";import"./ErrorBarContext-CbME5Fcu.js";import"./GraphicalItemClipPath-SXtIUXot.js";import"./SetGraphicalItem-p1UFOuzw.js";import"./useAnimationId-D8p9yFrw.js";import"./getRadiusAndStrokeWidthFromDot-BJuBIcOz.js";import"./ActiveShapeUtils-CIM0bDxf.js";import"./isPlainObject-DciJ0OZY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdfYyanO.js";import"./Trapezoid-D59NFDIE.js";import"./Sector-QxBrgctl.js";import"./Curve-BKPjExFW.js";import"./Cross-tT0EMVl1.js";import"./index-CLE-w9Gg.js";import"./ChartSizeDimensions-DDHHkJGr.js";import"./OffsetShower-NxBS3DGv.js";import"./PlotAreaShower-iYv5cbpH.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:c},t.createElement(l,{strokeDasharray:"3 3"}),t.createElement(d,{dataKey:"name"}),t.createElement(y,null),t.createElement(h,null),t.createElement(u,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(g,null),t.createElement(K,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </LineChart>
        </ResponsiveContainer>
      </>;
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xt=["ToggleBetweenDataKeys"];export{e as ToggleBetweenDataKeys,xt as __namedExportsOrder,wt as default};
