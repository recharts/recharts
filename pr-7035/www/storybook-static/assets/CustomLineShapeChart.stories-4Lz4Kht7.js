import{e as t}from"./iframe-BJOlw-Op.js";import{R as D,i as s}from"./arrayEqualityCheck-DnusCzBD.js";import{L as v}from"./LineChartArgs-DJq4Pk8T.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-rryw1rLX.js";import{C as K}from"./CartesianGrid-Diy8NTCf.js";import{X as T}from"./XAxis-43KHVoFo.js";import{Y as M}from"./YAxis-BPIAOwcF.js";import{L as $}from"./Legend-UXCvRbzc.js";import{T as O}from"./Tooltip-CNVqS8XJ.js";import{L as C}from"./Line-l144VTnQ.js";import{R as W}from"./RechartsHookInspector-CPO0M8Xx.js";import{C as X}from"./Curve-pTrnSDAj.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Wvn0zu9i.js";import"./immer-DfiRd44R.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BHn8DA_q.js";import"./index-Qcq4P_Nt.js";import"./hooks-CnmjgxEU.js";import"./axisSelectors-WpUYVbi6.js";import"./d3-scale-DYbsxYoA.js";import"./zIndexSlice-CeiBfx4M.js";import"./renderedTicksSlice-BL6GofNb.js";import"./CartesianChart-BMN72tVe.js";import"./chartDataContext-DTMD5Oqb.js";import"./CategoricalChart-linssQQb.js";import"./CartesianAxis-Y6m8iiHs.js";import"./Layer-BBwqN8Jm.js";import"./Text-CtfAbWJb.js";import"./DOMUtils-OblLamz_.js";import"./Label-D8He3MwY.js";import"./ZIndexLayer-DYremzN-.js";import"./types-CnF3ZZeT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-rjn2Khx8.js";import"./symbol-DL0oUuW8.js";import"./step-DgvGX9zV.js";import"./useElementOffset-duskTvdV.js";import"./uniqBy-DFQ4Efts.js";import"./iteratee-BdafbVaq.js";import"./useAnimationId-C14qPNnG.js";import"./Cross-zMJlw_J0.js";import"./Rectangle-vSj0lbmg.js";import"./Sector-CGzr-x9r.js";import"./ReactUtils-BfARamF_.js";import"./ActivePoints-CHOum2cR.js";import"./Dot-DwKpvT0b.js";import"./RegisterGraphicalItemId-Dp1CPZih.js";import"./ErrorBarContext-DQMcR9jZ.js";import"./GraphicalItemClipPath-EzqtyZLV.js";import"./SetGraphicalItem-BPcUI2au.js";import"./getRadiusAndStrokeWidthFromDot-BomTk5Ge.js";import"./ActiveShapeUtils-CbtKb807.js";import"./isPlainObject-D466DHg4.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-DFU8e3Ta.js";import"./index-D9yuPKYy.js";import"./ChartSizeDimensions-C1LvrkRR.js";import"./OffsetShower-B4YdrASr.js";import"./PlotAreaShower-DXcv1_AG.js";const Jt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:p}=l,d=[];if(p)for(let i=1,S=p.length;i<S;++i){let R=0;const r=p[i-1],a=p[i];if(s(r.x)&&s(r.y)&&s(a.x)&&s(a.y)){let e=Math.abs(r.x-a.x);const g=(a.x-r.x)/e,u=(a.y-r.y)/e,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(e/h-1)),P=e/w;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${i}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),m=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height="100%">
        <LineChart {...args}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip cursor={{
          stroke: 'gold',
          strokeWidth: 2
        }} defaultIndex={3} />
          <Line type="linear" dataKey="pv" stroke="#8884d8" activeDot={{
          r: 8
        }} shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<circle r={5} fill="currentColor" />} />} />
          <Line type="linear" dataKey="uv" stroke="#82ca9d" shape={(payload: CurveProps) => <CustomLineShapeProps {...payload} tick={<rect x={-5} y={-5} width={10} height={10} fill="currentColor" />} />} />
          <RechartsHookInspector />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(LineChartArgs),
    width: 500,
    height: 300,
    data: pageData,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }
  }
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Qt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Qt as __namedExportsOrder,Jt as default};
