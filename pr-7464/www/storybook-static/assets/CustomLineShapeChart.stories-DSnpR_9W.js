import{R as t}from"./iframe-DMp7qWBc.js";import{a as p}from"./isWellBehavedNumber-B2IEwkWH.js";import{L as v}from"./LineChartArgs-C_clS3fs.js";import{g as D}from"./utils-ePvtT4un.js";import{p as K}from"./Page-Cj8EiXz7.js";import{L as A}from"./LineChart-bj5fipK1.js";import{R as T}from"./zIndexSlice-DwEqiBQ-.js";import{C as M}from"./CartesianGrid-FVIu4V9p.js";import{X as $}from"./XAxis-BEU7rEXV.js";import{Y as I}from"./YAxis-Csr1iP4L.js";import{L as O}from"./Legend-DfI93GLz.js";import{T as W}from"./Tooltip-DWEhkbfW.js";import{L as C}from"./Line-ChEIx0ob.js";import{C as X}from"./Curve-ClaSDCwv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-xm_p6-0H.js";import"./resolveDefaultProps-CCMYu7HG.js";import"./RechartsWrapper-8C7w0fBl.js";import"./index-Bwz7camG.js";import"./index-BjkWDWFl.js";import"./index-DJULArvF.js";import"./index-FSdFZP1-.js";import"./immer-Cdu3yC2y.js";import"./renderedTicksSlice-xTgogQQT.js";import"./axisSelectors-CBZu9wu4.js";import"./d3-scale-BXmCrXPd.js";import"./string-B6fdYHAA.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-k38Maw3n.js";import"./chartDataContext-CQxGEncO.js";import"./CategoricalChart-Wp3XMWTG.js";import"./CartesianAxis-BpcewqQP.js";import"./Layer-CuLdBvJ8.js";import"./Text-BUBM5ImZ.js";import"./DOMUtils-u8y8aNP3.js";import"./Label-CTVwy9Ni.js";import"./ZIndexLayer-r-UQ7MHf.js";import"./types-nrPXTQ41.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-B2QFfdKs.js";import"./symbol-C-pIEiEF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DiViSUwj.js";import"./uniqBy-CQGZokB0.js";import"./iteratee-g85ug9Sr.js";import"./useAnimationId-Bo28EVo_.js";import"./Cross-CwfmxRKV.js";import"./Rectangle-hZTYOPpO.js";import"./Sector-Di9ZlAww.js";import"./AnimatedItems-BdLU55_g.js";import"./ActivePoints-BbdycfO-.js";import"./Dot-BLk4Ltpd.js";import"./RegisterGraphicalItemId-CQp3zThr.js";import"./ErrorBarContext-BXcE1fb6.js";import"./GraphicalItemClipPath-BhBDN4-E.js";import"./SetGraphicalItem-DeAOJWfR.js";import"./getRadiusAndStrokeWidthFromDot-3yPUTvTw.js";import"./ActiveShapeUtils-B9LOxtfw.js";import"./step-BmHxAVOq.js";const Bt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:s}=l,d=[];if(s)for(let a=1,S=s.length;a<S;++a){let b=0;const r=s[a-1],i=s[a];if(p(r.x)&&p(r.y)&&p(i.x)&&p(i.y)){let e=Math.abs(r.x-i.x);const g=(i.x-r.x)/e,u=(i.y-r.y)/e,w=Math.atan2(u,g)*180/Math.PI,P=Math.abs(Math.floor(e/h-1)),R=e/P;let m=h/2,{x:y,y:f}=r;for(;e-m>0;)e-=m,y+=g*m,f+=u*m,d.push(t.createElement("g",{key:`${a}-${++b}`,transform:`translate(${y} ${f}) rotate(${w})`},o)),m=R}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(T,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(M,{strokeDasharray:"3 3"}),t.createElement($,{dataKey:"name"}),t.createElement(I,null),t.createElement(O,null),t.createElement(W,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}))),args:{...D(v),width:500,height:300,data:K,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const Nt=["CustomLineShapeChart"];export{n as CustomLineShapeChart,Nt as __namedExportsOrder,Bt as default};
