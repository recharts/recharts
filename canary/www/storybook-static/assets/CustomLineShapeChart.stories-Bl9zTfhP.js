import{e as t}from"./iframe-CJsZiOdQ.js";import{R as D,n as p}from"./arrayEqualityCheck-DmoSYxVB.js";import{L as v}from"./LineChartArgs-CwVdhtIV.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-_rHhn5_z.js";import{C as K}from"./CartesianGrid-DcZcYl5q.js";import{X as T}from"./XAxis-8z1ahuYp.js";import{Y as M}from"./YAxis-CY7M7u2R.js";import{L as $}from"./Legend-D3LeUZBA.js";import{T as O}from"./Tooltip-Bg6-faOR.js";import{L as C}from"./Line-BNl370Ap.js";import{R as W}from"./RechartsHookInspector-Cp7SH18f.js";import{C as X}from"./Curve-5kCuP2Ri.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BsN_5Oop.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-C6hoNl5r.js";import"./hooks-rVLXmLp9.js";import"./axisSelectors-CRJt1Qbh.js";import"./zIndexSlice-DOwFRgwN.js";import"./CartesianChart-_elP97Nq.js";import"./chartDataContext-D1i6v4HN.js";import"./CategoricalChart-FSCxQE7m.js";import"./CartesianAxis-Bxrejv1n.js";import"./Layer-saDXbA70.js";import"./Text-B5Zl5I22.js";import"./DOMUtils-xNMyZWBQ.js";import"./Label-B5dudWmS.js";import"./ZIndexLayer-B2Kkx2Li.js";import"./types--3K6j7TR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DzvLu2sy.js";import"./useElementOffset-ByOgFwSC.js";import"./iteratee-BR97XEbH.js";import"./Cross-BvSndK2L.js";import"./Rectangle-DIx0VdbO.js";import"./useAnimationId-992q7OPb.js";import"./Sector-CNxjvECL.js";import"./ReactUtils-B6les9Ok.js";import"./ActivePoints-s1VLO5u4.js";import"./Dot-C-IcEIkw.js";import"./RegisterGraphicalItemId-B2S5SyCV.js";import"./ErrorBarContext-BSMEYapQ.js";import"./GraphicalItemClipPath-CTITSRsG.js";import"./SetGraphicalItem-wLUZTpUq.js";import"./getRadiusAndStrokeWidthFromDot-B69isiT9.js";import"./ActiveShapeUtils-DoWMc9rU.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-C7AD2RUx.js";import"./index-B5U_62lg.js";import"./ChartSizeDimensions-Cywz4jFM.js";import"./OffsetShower-qPlPbWlS.js";import"./PlotAreaShower-e-2A-3GR.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const jt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,jt as __namedExportsOrder,_t as default};
