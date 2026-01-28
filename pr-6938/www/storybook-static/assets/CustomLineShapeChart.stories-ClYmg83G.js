import{e as t}from"./iframe-DE0S0nct.js";import{R as D,n as p}from"./arrayEqualityCheck-njkWtJmX.js";import{L as v}from"./LineChartArgs-CwVdhtIV.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-CD_ineKY.js";import{C as K}from"./CartesianGrid-xqUvOSJ7.js";import{X as T}from"./XAxis-HiP-oMgI.js";import{Y as M}from"./YAxis-ASXYxn9M.js";import{L as $}from"./Legend-CufHvxxK.js";import{T as O}from"./Tooltip-c4RdN7f5.js";import{L as C}from"./Line-Cb1a5OKW.js";import{R as W}from"./RechartsHookInspector-dBbs_0nU.js";import{C as X}from"./Curve-BVDZfIkI.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DuoQUEeP.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-C5KB-qxr.js";import"./hooks-DWbbdqvJ.js";import"./axisSelectors-BfEHf8Yv.js";import"./zIndexSlice-Blf1dc2N.js";import"./CartesianChart-BBxR-i6W.js";import"./chartDataContext-CPGe86t4.js";import"./CategoricalChart-CSOSO7HJ.js";import"./CartesianAxis-CwKKuba7.js";import"./Layer-BleDqXEW.js";import"./Text-DM7a8pWI.js";import"./DOMUtils-A7wZFaJD.js";import"./Label-DgM-_lJi.js";import"./ZIndexLayer-Dp1Pf4so.js";import"./types-B8SW-iMR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-w5RZTm0Y.js";import"./useElementOffset-G6wVWYzT.js";import"./iteratee-DE09Y-Is.js";import"./Cross-CpfL9XrS.js";import"./Rectangle-DpQeIB4m.js";import"./useAnimationId-BumXreuS.js";import"./Sector-DcADG8WR.js";import"./ReactUtils-BtFFfC7o.js";import"./ActivePoints-CsWDm8lK.js";import"./Dot-D5tclzZ_.js";import"./RegisterGraphicalItemId-BfeEISo0.js";import"./ErrorBarContext-CdBsOezF.js";import"./GraphicalItemClipPath-JwwxWQFx.js";import"./SetGraphicalItem-DO-9Utur.js";import"./getRadiusAndStrokeWidthFromDot-D6SrTg5b.js";import"./ActiveShapeUtils-2Zcp-jd_.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BZphNEJe.js";import"./index-C9PHO12n.js";import"./ChartSizeDimensions-Bvtmd44U.js";import"./OffsetShower-6Tlh9GY1.js";import"./PlotAreaShower-C2nHCOpp.js";const _t={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
