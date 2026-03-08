import{r as n,e as t}from"./iframe-DSZ2QiJB.js";import{L as p}from"./LineChart-B2qNLCQp.js";import{R as s}from"./arrayEqualityCheck-rt-62tKM.js";import{C as c}from"./CartesianGrid-tCMk91Zb.js";import{X as l}from"./XAxis-C40iw1gZ.js";import{Y as d}from"./YAxis-x1YS6WwT.js";import{L as y}from"./Legend-BvZZgudz.js";import{L as h}from"./Line-CsqiaEo_.js";import{T as u}from"./Tooltip-BUjbNrjQ.js";import{R as g}from"./RechartsHookInspector-CbZDQ_xN.js";import{p as K}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BWBPYC1r.js";import"./index-1kC-pV_c.js";import"./immer-D42ZyI8P.js";import"./hooks-Bla0K3sY.js";import"./axisSelectors-DvTXpJxJ.js";import"./d3-scale-Bj0Wd2Rm.js";import"./zIndexSlice-Dv9Y9W3b.js";import"./renderedTicksSlice-C2PuzhHM.js";import"./clsx-B-dksMZM.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-YjLZrE0S.js";import"./chartDataContext-BuXntJJ8.js";import"./CategoricalChart-3Wrbo8_n.js";import"./resolveDefaultProps-_H3sYQ_H.js";import"./CartesianAxis-BOemEoe1.js";import"./Layer-CfeiBM7_.js";import"./Text-Dt_FG9bq.js";import"./DOMUtils-n5N7L4PT.js";import"./Label-DwmX4z8O.js";import"./ZIndexLayer-BB6UhYUp.js";import"./types-DHG31Cql.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-D1J3is_N.js";import"./symbol-Bi67EGLP.js";import"./step-28_znSZY.js";import"./useElementOffset-DO-lVvkB.js";import"./uniqBy-aig2Gkf7.js";import"./iteratee-CEjlmyDu.js";import"./ReactUtils-BPco_pTv.js";import"./ActivePoints-DGvp93MP.js";import"./Dot-DvBHW_pK.js";import"./RegisterGraphicalItemId-DpTWPNPm.js";import"./ErrorBarContext-BIl6qq4l.js";import"./GraphicalItemClipPath-DGAu4crQ.js";import"./SetGraphicalItem-A8lByKkr.js";import"./useAnimationId-CVC-EATQ.js";import"./getRadiusAndStrokeWidthFromDot-3P602oOp.js";import"./ActiveShapeUtils-atDgqYom.js";import"./isPlainObject-eGyZT97o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-U6qmZG0w.js";import"./Trapezoid-eVJamGS1.js";import"./Sector-Cw_z1t88.js";import"./Curve-1v3U2npm.js";import"./Cross-Bmyi6vQQ.js";import"./index-DDQU038C.js";import"./ChartSizeDimensions-Cqws91-P.js";import"./OffsetShower-Bc2DkPnc.js";import"./PlotAreaShower-B81JCCGH.js";const wt={component:p,docs:{autodocs:!1}},e={render:()=>{const[r,o]=n.useState("pv");return t.createElement(t.Fragment,null,t.createElement("button",{type:"button",onClick:()=>{o(r==="pv"?"uv":"pv")}},"Change Data Key"),t.createElement(s,{width:"100%",height:"100%"},t.createElement(p,{width:500,height:400,data:K},t.createElement(c,{strokeDasharray:"3 3"}),t.createElement(l,{dataKey:"name"}),t.createElement(d,null),t.createElement(y,null),t.createElement(h,{type:"monotone",dataKey:r,stroke:"#8884d8",activeDot:{r:8}}),t.createElement(u,null),t.createElement(g,null))))}};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
