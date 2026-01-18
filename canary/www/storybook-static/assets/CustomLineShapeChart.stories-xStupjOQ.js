import{e as t}from"./iframe-E6stEF2S.js";import{R as D,n as p}from"./arrayEqualityCheck-CwuTMurj.js";import{L as v}from"./LineChartArgs-C9Vp8FkW.js";import{g as I}from"./utils-ePvtT4un.js";import{L as A}from"./LineChart-C1Ee3c1G.js";import{C as K}from"./CartesianGrid-S_-5ZoSZ.js";import{X as T}from"./XAxis-Bwrfz7AR.js";import{Y as M}from"./YAxis-ChoODXTv.js";import{L as $}from"./Legend-BxsS8-YX.js";import{T as O}from"./Tooltip-BS0GZFLk.js";import{L as C}from"./Line-DCeOoju3.js";import{R as W}from"./RechartsHookInspector-DWDZSsYq.js";import{C as X}from"./Curve-CjjQKwtg.js";import{p as Y}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DpBS-wta.js";import"./PolarUtils-BcxrLtWd.js";import"./RechartsWrapper-CZ-4KBI2.js";import"./hooks-B7vED1ex.js";import"./axisSelectors-CGOr44mz.js";import"./zIndexSlice-DWahER7A.js";import"./CartesianChart-BDrQ5wVQ.js";import"./chartDataContext-mxEGBICQ.js";import"./CategoricalChart-HONQPrlU.js";import"./CartesianAxis-Ji6qmxj-.js";import"./Layer-BegbPFb9.js";import"./Text-Da_5tIJ5.js";import"./DOMUtils-DelYEp0F.js";import"./Label-rhvib36b.js";import"./ZIndexLayer-CZ3aFF1-.js";import"./types-FSWLiQQw.js";import"./Symbols-BofiGE9Z.js";import"./useElementOffset-5Bek4vIi.js";import"./iteratee-Dz5Fb5yH.js";import"./Cross-Cd8u4PDt.js";import"./Rectangle-DJCClTE6.js";import"./useAnimationId-jacrtTCV.js";import"./Sector-DQ6bsa91.js";import"./ReactUtils-ofTPTzz1.js";import"./ActivePoints-D2kK9Clq.js";import"./Dot-DgZWwon8.js";import"./RegisterGraphicalItemId-RdaYGkCK.js";import"./ErrorBarContext-C4-NhtXv.js";import"./GraphicalItemClipPath-D7GqE0xr.js";import"./SetGraphicalItem-CJIPhBZp.js";import"./getRadiusAndStrokeWidthFromDot-Clffww7b.js";import"./ActiveShapeUtils-vlVDSwIy.js";import"./isPlainObject-BSutPv-K.js";import"./Trapezoid-BRnSAzjS.js";import"./index-D_N7o97v.js";import"./ChartSizeDimensions-Bkhb3coG.js";import"./OffsetShower-C8PKcIaU.js";import"./PlotAreaShower-Tf4T6ETR.js";const Yt={component:A,argTypes:v,docs:{autodocs:!1}},k=c=>{const{tick:o,tickInterval:h=30,...l}=c,{points:m}=l,d=[];if(m)for(let a=1,S=m.length;a<S;++a){let R=0;const e=m[a-1],i=m[a];if(p(e.x)&&p(e.y)&&p(i.x)&&p(i.y)){let r=Math.abs(e.x-i.x);const g=(i.x-e.x)/r,u=(i.y-e.y)/r,b=Math.atan2(u,g)*180/Math.PI,w=Math.abs(Math.floor(r/h-1)),P=r/w;let s=h/2,{x:y,y:f}=e;for(;r-s>0;)r-=s,y+=g*s,f+=u*s,d.push(t.createElement("g",{key:`${a}-${++R}`,transform:`translate(${y} ${f}) rotate(${b})`},o)),s=P}}return t.createElement("g",{style:{color:l.stroke}},t.createElement(X,{...l}),d)},n={render:c=>t.createElement(D,{width:"100%",height:"100%"},t.createElement(A,{...c},t.createElement(K,{strokeDasharray:"3 3"}),t.createElement(T,{dataKey:"name"}),t.createElement(M,null),t.createElement($,null),t.createElement(O,{cursor:{stroke:"gold",strokeWidth:2},defaultIndex:3}),t.createElement(C,{type:"linear",dataKey:"pv",stroke:"#8884d8",activeDot:{r:8},shape:o=>t.createElement(k,{...o,tick:t.createElement("circle",{r:5,fill:"currentColor"})})}),t.createElement(C,{type:"linear",dataKey:"uv",stroke:"#82ca9d",shape:o=>t.createElement(k,{...o,tick:t.createElement("rect",{x:-5,y:-5,width:10,height:10,fill:"currentColor"})})}),t.createElement(W,null))),args:{...I(v),width:500,height:300,data:Y,margin:{top:5,right:30,left:20,bottom:5}}};var L,x,E;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(x=n.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const _t=["CustomLineShapeChart"];export{n as CustomLineShapeChart,_t as __namedExportsOrder,Yt as default};
